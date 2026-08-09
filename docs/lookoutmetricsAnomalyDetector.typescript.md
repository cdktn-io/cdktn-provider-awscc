# `lookoutmetricsAnomalyDetector` Submodule <a name="`lookoutmetricsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAnomalyDetector <a name="LookoutmetricsAnomalyDetector" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector(scope: Construct, id: string, config: LookoutmetricsAnomalyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig">putAnomalyDetectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList">putMetricSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorDescription">resetAnomalyDetectorDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorName">resetAnomalyDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnomalyDetectorConfig` <a name="putAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig"></a>

```typescript
public putAnomalyDetectorConfig(value: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putAnomalyDetectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---

##### `putMetricSetList` <a name="putMetricSetList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList"></a>

```typescript
public putMetricSetList(value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.putMetricSetList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]

---

##### `resetAnomalyDetectorDescription` <a name="resetAnomalyDetectorDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorDescription"></a>

```typescript
public resetAnomalyDetectorDescription(): void
```

##### `resetAnomalyDetectorName` <a name="resetAnomalyDetectorName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetAnomalyDetectorName"></a>

```typescript
public resetAnomalyDetectorName(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LookoutmetricsAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LookoutmetricsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfig">anomalyDetectorConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetList">metricSetList</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList">LookoutmetricsAnomalyDetectorMetricSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfigInput">anomalyDetectorConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescriptionInput">anomalyDetectorDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorNameInput">anomalyDetectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetListInput">metricSetListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescription">anomalyDetectorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anomalyDetectorConfig`<sup>Required</sup> <a name="anomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfig"></a>

```typescript
public readonly anomalyDetectorConfig: LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricSetList`<sup>Required</sup> <a name="metricSetList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetList"></a>

```typescript
public readonly metricSetList: LookoutmetricsAnomalyDetectorMetricSetListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList">LookoutmetricsAnomalyDetectorMetricSetListStructList</a>

---

##### `anomalyDetectorConfigInput`<sup>Optional</sup> <a name="anomalyDetectorConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorConfigInput"></a>

```typescript
public readonly anomalyDetectorConfigInput: IResolvable | LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---

##### `anomalyDetectorDescriptionInput`<sup>Optional</sup> <a name="anomalyDetectorDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescriptionInput"></a>

```typescript
public readonly anomalyDetectorDescriptionInput: string;
```

- *Type:* string

---

##### `anomalyDetectorNameInput`<sup>Optional</sup> <a name="anomalyDetectorNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorNameInput"></a>

```typescript
public readonly anomalyDetectorNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `metricSetListInput`<sup>Optional</sup> <a name="metricSetListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.metricSetListInput"></a>

```typescript
public readonly metricSetListInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]

---

##### `anomalyDetectorDescription`<sup>Required</sup> <a name="anomalyDetectorDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorDescription"></a>

```typescript
public readonly anomalyDetectorDescription: string;
```

- *Type:* string

---

##### `anomalyDetectorName`<sup>Required</sup> <a name="anomalyDetectorName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAnomalyDetectorAnomalyDetectorConfig <a name="LookoutmetricsAnomalyDetectorAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorAnomalyDetectorConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.property.anomalyDetectorFrequency">anomalyDetectorFrequency</a></code> | <code>string</code> | Frequency of anomaly detection. |

---

##### `anomalyDetectorFrequency`<sup>Required</sup> <a name="anomalyDetectorFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig.property.anomalyDetectorFrequency"></a>

```typescript
public readonly anomalyDetectorFrequency: string;
```

- *Type:* string

Frequency of anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_frequency LookoutmetricsAnomalyDetector#anomaly_detector_frequency}

---

### LookoutmetricsAnomalyDetectorConfig <a name="LookoutmetricsAnomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorConfig">anomalyDetectorConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | Configuration options for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.metricSetList">metricSetList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]</code> | List of metric sets for anomaly detection. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorDescription">anomalyDetectorDescription</a></code> | <code>string</code> | A description for the AnomalyDetector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | Name for the Amazon Lookout for Metrics Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | KMS key used to encrypt the AnomalyDetector data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anomalyDetectorConfig`<sup>Required</sup> <a name="anomalyDetectorConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorConfig"></a>

```typescript
public readonly anomalyDetectorConfig: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

Configuration options for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_config LookoutmetricsAnomalyDetector#anomaly_detector_config}

---

##### `metricSetList`<sup>Required</sup> <a name="metricSetList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.metricSetList"></a>

```typescript
public readonly metricSetList: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]

List of metric sets for anomaly detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_list LookoutmetricsAnomalyDetector#metric_set_list}

---

##### `anomalyDetectorDescription`<sup>Optional</sup> <a name="anomalyDetectorDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorDescription"></a>

```typescript
public readonly anomalyDetectorDescription: string;
```

- *Type:* string

A description for the AnomalyDetector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_description LookoutmetricsAnomalyDetector#anomaly_detector_description}

---

##### `anomalyDetectorName`<sup>Optional</sup> <a name="anomalyDetectorName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

Name for the Amazon Lookout for Metrics Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_name LookoutmetricsAnomalyDetector#anomaly_detector_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

KMS key used to encrypt the AnomalyDetector data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#kms_key_arn LookoutmetricsAnomalyDetector#kms_key_arn}

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricListStruct: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.aggregationFunction">aggregationFunction</a></code> | <code>string</code> | Operator used to aggregate metric values. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.metricName">metricName</a></code> | <code>string</code> | Name of a column in the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#namespace LookoutmetricsAnomalyDetector#namespace}. |

---

##### `aggregationFunction`<sup>Required</sup> <a name="aggregationFunction" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.aggregationFunction"></a>

```typescript
public readonly aggregationFunction: string;
```

- *Type:* string

Operator used to aggregate metric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#aggregation_function LookoutmetricsAnomalyDetector#aggregation_function}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_name LookoutmetricsAnomalyDetector#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#namespace LookoutmetricsAnomalyDetector#namespace}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSource <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSource: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.appFlowConfig">appFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.rdsSourceConfig">rdsSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.redshiftSourceConfig">redshiftSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.s3SourceConfig">s3SourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}. |

---

##### `appFlowConfig`<sup>Optional</sup> <a name="appFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.appFlowConfig"></a>

```typescript
public readonly appFlowConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}.

---

##### `cloudwatchConfig`<sup>Optional</sup> <a name="cloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}.

---

##### `rdsSourceConfig`<sup>Optional</sup> <a name="rdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.rdsSourceConfig"></a>

```typescript
public readonly rdsSourceConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}.

---

##### `redshiftSourceConfig`<sup>Optional</sup> <a name="redshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.redshiftSourceConfig"></a>

```typescript
public readonly redshiftSourceConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}.

---

##### `s3SourceConfig`<sup>Optional</sup> <a name="s3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource.property.s3SourceConfig"></a>

```typescript
public readonly s3SourceConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.flowName">flowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |

---

##### `flowName`<sup>Optional</sup> <a name="flowName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#flow_name LookoutmetricsAnomalyDetector#flow_name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseHost">databaseHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databasePort">databasePort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}. |

---

##### `databaseHost`<sup>Optional</sup> <a name="databaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

##### `databasePort`<sup>Optional</sup> <a name="databasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.databasePort"></a>

```typescript
public readonly databasePort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `secretManagerArn`<sup>Optional</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}. |

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

##### `subnetIdList`<sup>Optional</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseHost">databaseHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databasePort">databasePort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}. |

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}.

---

##### `databaseHost`<sup>Optional</sup> <a name="databaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_host LookoutmetricsAnomalyDetector#database_host}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_name LookoutmetricsAnomalyDetector#database_name}.

---

##### `databasePort`<sup>Optional</sup> <a name="databasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.databasePort"></a>

```typescript
public readonly databasePort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#database_port LookoutmetricsAnomalyDetector#database_port}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `secretManagerArn`<sup>Optional</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#table_name LookoutmetricsAnomalyDetector#table_name}.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}. |

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}.

---

##### `subnetIdList`<sup>Optional</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.fileFormatDescriptor">fileFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.historicalDataPathList">historicalDataPathList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.templatedPathList">templatedPathList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}. |

---

##### `fileFormatDescriptor`<sup>Optional</sup> <a name="fileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.fileFormatDescriptor"></a>

```typescript
public readonly fileFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}.

---

##### `historicalDataPathList`<sup>Optional</sup> <a name="historicalDataPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.historicalDataPathList"></a>

```typescript
public readonly historicalDataPathList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#role_arn LookoutmetricsAnomalyDetector#role_arn}.

---

##### `templatedPathList`<sup>Optional</sup> <a name="templatedPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.property.templatedPathList"></a>

```typescript
public readonly templatedPathList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.csvFormatDescriptor">csvFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.jsonFormatDescriptor">jsonFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}. |

---

##### `csvFormatDescriptor`<sup>Optional</sup> <a name="csvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.csvFormatDescriptor"></a>

```typescript
public readonly csvFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}.

---

##### `jsonFormatDescriptor`<sup>Optional</sup> <a name="jsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.property.jsonFormatDescriptor"></a>

```typescript
public readonly jsonFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.charset">charset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.containsHeader">containsHeader</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.fileCompression">fileCompression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.headerList">headerList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}. |

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

##### `containsHeader`<sup>Optional</sup> <a name="containsHeader" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.containsHeader"></a>

```typescript
public readonly containsHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#contains_header LookoutmetricsAnomalyDetector#contains_header}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#delimiter LookoutmetricsAnomalyDetector#delimiter}.

---

##### `fileCompression`<sup>Optional</sup> <a name="fileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.fileCompression"></a>

```typescript
public readonly fileCompression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

##### `headerList`<sup>Optional</sup> <a name="headerList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.headerList"></a>

```typescript
public readonly headerList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#header_list LookoutmetricsAnomalyDetector#header_list}.

---

##### `quoteSymbol`<sup>Optional</sup> <a name="quoteSymbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}.

---

### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.charset">charset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.fileCompression">fileCompression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}. |

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#charset LookoutmetricsAnomalyDetector#charset}.

---

##### `fileCompression`<sup>Optional</sup> <a name="fileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.property.fileCompression"></a>

```typescript
public readonly fileCompression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#file_compression LookoutmetricsAnomalyDetector#file_compression}.

---

### LookoutmetricsAnomalyDetectorMetricSetListStruct <a name="LookoutmetricsAnomalyDetectorMetricSetListStruct" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListStruct: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricList">metricList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]</code> | Metrics captured by this MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetName">metricSetName</a></code> | <code>string</code> | The name of the MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSource">metricSource</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_source LookoutmetricsAnomalyDetector#metric_source}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.dimensionList">dimensionList</a></code> | <code>string[]</code> | Dimensions for this MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetDescription">metricSetDescription</a></code> | <code>string</code> | A description for the MetricSet. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetFrequency">metricSetFrequency</a></code> | <code>string</code> | A frequency period to aggregate the data. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.offset">offset</a></code> | <code>number</code> | Offset, in seconds, between the frequency interval and the time at which the metrics are available. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timestampColumn">timestampColumn</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timezone LookoutmetricsAnomalyDetector#timezone}. |

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricList"></a>

```typescript
public readonly metricList: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]

Metrics captured by this MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_list LookoutmetricsAnomalyDetector#metric_list}

---

##### `metricSetName`<sup>Required</sup> <a name="metricSetName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetName"></a>

```typescript
public readonly metricSetName: string;
```

- *Type:* string

The name of the MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_name LookoutmetricsAnomalyDetector#metric_set_name}

---

##### `metricSource`<sup>Required</sup> <a name="metricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSource"></a>

```typescript
public readonly metricSource: LookoutmetricsAnomalyDetectorMetricSetListMetricSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_source LookoutmetricsAnomalyDetector#metric_source}.

---

##### `dimensionList`<sup>Optional</sup> <a name="dimensionList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.dimensionList"></a>

```typescript
public readonly dimensionList: string[];
```

- *Type:* string[]

Dimensions for this MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#dimension_list LookoutmetricsAnomalyDetector#dimension_list}

---

##### `metricSetDescription`<sup>Optional</sup> <a name="metricSetDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetDescription"></a>

```typescript
public readonly metricSetDescription: string;
```

- *Type:* string

A description for the MetricSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_description LookoutmetricsAnomalyDetector#metric_set_description}

---

##### `metricSetFrequency`<sup>Optional</sup> <a name="metricSetFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.metricSetFrequency"></a>

```typescript
public readonly metricSetFrequency: string;
```

- *Type:* string

A frequency period to aggregate the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#metric_set_frequency LookoutmetricsAnomalyDetector#metric_set_frequency}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset, in seconds, between the frequency interval and the time at which the metrics are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#offset LookoutmetricsAnomalyDetector#offset}

---

##### `timestampColumn`<sup>Optional</sup> <a name="timestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#timezone LookoutmetricsAnomalyDetector#timezone}.

---

### LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn <a name="LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const lookoutmetricsAnomalyDetectorMetricSetListTimestampColumn: lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnFormat">columnFormat</a></code> | <code>string</code> | A timestamp format for the timestamps in the dataset. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnName">columnName</a></code> | <code>string</code> | Name of a column in the data. |

---

##### `columnFormat`<sup>Optional</sup> <a name="columnFormat" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnFormat"></a>

```typescript
public readonly columnFormat: string;
```

- *Type:* string

A timestamp format for the timestamps in the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#column_format LookoutmetricsAnomalyDetector#column_format}

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Name of a column in the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_anomaly_detector#column_name LookoutmetricsAnomalyDetector#column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference <a name="LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequencyInput">anomalyDetectorFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency">anomalyDetectorFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anomalyDetectorFrequencyInput`<sup>Optional</sup> <a name="anomalyDetectorFrequencyInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequencyInput"></a>

```typescript
public readonly anomalyDetectorFrequencyInput: string;
```

- *Type:* string

---

##### `anomalyDetectorFrequency`<sup>Required</sup> <a name="anomalyDetectorFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency"></a>

```typescript
public readonly anomalyDetectorFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorAnomalyDetectorConfig">LookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get"></a>

```typescript
public get(index: number): LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunctionInput">aggregationFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction">aggregationFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationFunctionInput`<sup>Optional</sup> <a name="aggregationFunctionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunctionInput"></a>

```typescript
public readonly aggregationFunctionInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `aggregationFunction`<sup>Required</sup> <a name="aggregationFunction" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction"></a>

```typescript
public readonly aggregationFunction: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetFlowName">resetFlowName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowName` <a name="resetFlowName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetFlowName"></a>

```typescript
public resetFlowName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowNameInput">flowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName">flowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowNameInput`<sup>Optional</sup> <a name="flowNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowNameInput"></a>

```typescript
public readonly flowNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig">putAppFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig">putCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig">putRdsSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig">putRedshiftSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig">putS3SourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetAppFlowConfig">resetAppFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetCloudwatchConfig">resetCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRdsSourceConfig">resetRdsSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRedshiftSourceConfig">resetRedshiftSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetS3SourceConfig">resetS3SourceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppFlowConfig` <a name="putAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig"></a>

```typescript
public putAppFlowConfig(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putAppFlowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---

##### `putCloudwatchConfig` <a name="putCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig"></a>

```typescript
public putCloudwatchConfig(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putCloudwatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---

##### `putRdsSourceConfig` <a name="putRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig"></a>

```typescript
public putRdsSourceConfig(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRdsSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---

##### `putRedshiftSourceConfig` <a name="putRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig"></a>

```typescript
public putRedshiftSourceConfig(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putRedshiftSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---

##### `putS3SourceConfig` <a name="putS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig"></a>

```typescript
public putS3SourceConfig(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.putS3SourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---

##### `resetAppFlowConfig` <a name="resetAppFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetAppFlowConfig"></a>

```typescript
public resetAppFlowConfig(): void
```

##### `resetCloudwatchConfig` <a name="resetCloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetCloudwatchConfig"></a>

```typescript
public resetCloudwatchConfig(): void
```

##### `resetRdsSourceConfig` <a name="resetRdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRdsSourceConfig"></a>

```typescript
public resetRdsSourceConfig(): void
```

##### `resetRedshiftSourceConfig` <a name="resetRedshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetRedshiftSourceConfig"></a>

```typescript
public resetRedshiftSourceConfig(): void
```

##### `resetS3SourceConfig` <a name="resetS3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resetS3SourceConfig"></a>

```typescript
public resetS3SourceConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig">appFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig">rdsSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig">redshiftSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig">s3SourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfigInput">appFlowConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfigInput">cloudwatchConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfigInput">rdsSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfigInput">redshiftSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfigInput">s3SourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appFlowConfig`<sup>Required</sup> <a name="appFlowConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig"></a>

```typescript
public readonly appFlowConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a>

---

##### `cloudwatchConfig`<sup>Required</sup> <a name="cloudwatchConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a>

---

##### `rdsSourceConfig`<sup>Required</sup> <a name="rdsSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig"></a>

```typescript
public readonly rdsSourceConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a>

---

##### `redshiftSourceConfig`<sup>Required</sup> <a name="redshiftSourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig"></a>

```typescript
public readonly redshiftSourceConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a>

---

##### `s3SourceConfig`<sup>Required</sup> <a name="s3SourceConfig" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig"></a>

```typescript
public readonly s3SourceConfig: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a>

---

##### `appFlowConfigInput`<sup>Optional</sup> <a name="appFlowConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfigInput"></a>

```typescript
public readonly appFlowConfigInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---

##### `cloudwatchConfigInput`<sup>Optional</sup> <a name="cloudwatchConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfigInput"></a>

```typescript
public readonly cloudwatchConfigInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---

##### `rdsSourceConfigInput`<sup>Optional</sup> <a name="rdsSourceConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfigInput"></a>

```typescript
public readonly rdsSourceConfigInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---

##### `redshiftSourceConfigInput`<sup>Optional</sup> <a name="redshiftSourceConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfigInput"></a>

```typescript
public readonly redshiftSourceConfigInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---

##### `s3SourceConfigInput`<sup>Optional</sup> <a name="s3SourceConfigInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfigInput"></a>

```typescript
public readonly s3SourceConfigInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseHost">resetDatabaseHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabasePort">resetDatabasePort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetSecretManagerArn">resetSecretManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---

##### `resetDatabaseHost` <a name="resetDatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseHost"></a>

```typescript
public resetDatabaseHost(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDatabasePort` <a name="resetDatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDatabasePort"></a>

```typescript
public resetDatabasePort(): void
```

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetDbInstanceIdentifier"></a>

```typescript
public resetDbInstanceIdentifier(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretManagerArn` <a name="resetSecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetSecretManagerArn"></a>

```typescript
public resetSecretManagerArn(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHostInput">databaseHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePortInput">databasePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArnInput">secretManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost">databaseHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort">databasePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a>

---

##### `databaseHostInput`<sup>Optional</sup> <a name="databaseHostInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHostInput"></a>

```typescript
public readonly databaseHostInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `databasePortInput`<sup>Optional</sup> <a name="databasePortInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePortInput"></a>

```typescript
public readonly databasePortInput: number;
```

- *Type:* number

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretManagerArnInput`<sup>Optional</sup> <a name="secretManagerArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArnInput"></a>

```typescript
public readonly secretManagerArnInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---

##### `databaseHost`<sup>Required</sup> <a name="databaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databasePort`<sup>Required</sup> <a name="databasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort"></a>

```typescript
public readonly databasePort: number;
```

- *Type:* number

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList">resetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSubnetIdList">resetSubnetIdList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIdList` <a name="resetSecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList"></a>

```typescript
public resetSecurityGroupIdList(): void
```

##### `resetSubnetIdList` <a name="resetSubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resetSubnetIdList"></a>

```typescript
public resetSubnetIdList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput">subnetIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput"></a>

```typescript
public readonly securityGroupIdListInput: string[];
```

- *Type:* string[]

---

##### `subnetIdListInput`<sup>Optional</sup> <a name="subnetIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput"></a>

```typescript
public readonly subnetIdListInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseHost">resetDatabaseHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabasePort">resetDatabasePort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetSecretManagerArn">resetSecretManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetClusterIdentifier"></a>

```typescript
public resetClusterIdentifier(): void
```

##### `resetDatabaseHost` <a name="resetDatabaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseHost"></a>

```typescript
public resetDatabaseHost(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDatabasePort` <a name="resetDatabasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetDatabasePort"></a>

```typescript
public resetDatabasePort(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretManagerArn` <a name="resetSecretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetSecretManagerArn"></a>

```typescript
public resetSecretManagerArn(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHostInput">databaseHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePortInput">databasePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArnInput">secretManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost">databaseHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort">databasePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a>

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `databaseHostInput`<sup>Optional</sup> <a name="databaseHostInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHostInput"></a>

```typescript
public readonly databaseHostInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `databasePortInput`<sup>Optional</sup> <a name="databasePortInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePortInput"></a>

```typescript
public readonly databasePortInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretManagerArnInput`<sup>Optional</sup> <a name="secretManagerArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArnInput"></a>

```typescript
public readonly secretManagerArnInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `databaseHost`<sup>Required</sup> <a name="databaseHost" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databasePort`<sup>Required</sup> <a name="databasePort" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort"></a>

```typescript
public readonly databasePort: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList">resetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSubnetIdList">resetSubnetIdList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIdList` <a name="resetSecurityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSecurityGroupIdList"></a>

```typescript
public resetSecurityGroupIdList(): void
```

##### `resetSubnetIdList` <a name="resetSubnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resetSubnetIdList"></a>

```typescript
public resetSubnetIdList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput">subnetIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdListInput"></a>

```typescript
public readonly securityGroupIdListInput: string[];
```

- *Type:* string[]

---

##### `subnetIdListInput`<sup>Optional</sup> <a name="subnetIdListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdListInput"></a>

```typescript
public readonly subnetIdListInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetCharset">resetCharset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetContainsHeader">resetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetFileCompression">resetFileCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetHeaderList">resetHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetQuoteSymbol">resetQuoteSymbol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCharset` <a name="resetCharset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetCharset"></a>

```typescript
public resetCharset(): void
```

##### `resetContainsHeader` <a name="resetContainsHeader" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetContainsHeader"></a>

```typescript
public resetContainsHeader(): void
```

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetFileCompression` <a name="resetFileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetFileCompression"></a>

```typescript
public resetFileCompression(): void
```

##### `resetHeaderList` <a name="resetHeaderList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetHeaderList"></a>

```typescript
public resetHeaderList(): void
```

##### `resetQuoteSymbol` <a name="resetQuoteSymbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resetQuoteSymbol"></a>

```typescript
public resetQuoteSymbol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charsetInput">charsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeaderInput">containsHeaderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompressionInput">fileCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerListInput">headerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbolInput">quoteSymbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader">containsHeader</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression">fileCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList">headerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `charsetInput`<sup>Optional</sup> <a name="charsetInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charsetInput"></a>

```typescript
public readonly charsetInput: string;
```

- *Type:* string

---

##### `containsHeaderInput`<sup>Optional</sup> <a name="containsHeaderInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeaderInput"></a>

```typescript
public readonly containsHeaderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `fileCompressionInput`<sup>Optional</sup> <a name="fileCompressionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompressionInput"></a>

```typescript
public readonly fileCompressionInput: string;
```

- *Type:* string

---

##### `headerListInput`<sup>Optional</sup> <a name="headerListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerListInput"></a>

```typescript
public readonly headerListInput: string[];
```

- *Type:* string[]

---

##### `quoteSymbolInput`<sup>Optional</sup> <a name="quoteSymbolInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbolInput"></a>

```typescript
public readonly quoteSymbolInput: string;
```

- *Type:* string

---

##### `charset`<sup>Required</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader"></a>

```typescript
public readonly containsHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `fileCompression`<sup>Required</sup> <a name="fileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression"></a>

```typescript
public readonly fileCompression: string;
```

- *Type:* string

---

##### `headerList`<sup>Required</sup> <a name="headerList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList"></a>

```typescript
public readonly headerList: string[];
```

- *Type:* string[]

---

##### `quoteSymbol`<sup>Required</sup> <a name="quoteSymbol" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetCharset">resetCharset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetFileCompression">resetFileCompression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCharset` <a name="resetCharset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetCharset"></a>

```typescript
public resetCharset(): void
```

##### `resetFileCompression` <a name="resetFileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resetFileCompression"></a>

```typescript
public resetFileCompression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charsetInput">charsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompressionInput">fileCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression">fileCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `charsetInput`<sup>Optional</sup> <a name="charsetInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charsetInput"></a>

```typescript
public readonly charsetInput: string;
```

- *Type:* string

---

##### `fileCompressionInput`<sup>Optional</sup> <a name="fileCompressionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompressionInput"></a>

```typescript
public readonly fileCompressionInput: string;
```

- *Type:* string

---

##### `charset`<sup>Required</sup> <a name="charset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `fileCompression`<sup>Required</sup> <a name="fileCompression" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression"></a>

```typescript
public readonly fileCompression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor">putCsvFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor">putJsonFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetCsvFormatDescriptor">resetCsvFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetJsonFormatDescriptor">resetJsonFormatDescriptor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsvFormatDescriptor` <a name="putCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor"></a>

```typescript
public putCsvFormatDescriptor(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putCsvFormatDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---

##### `putJsonFormatDescriptor` <a name="putJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor"></a>

```typescript
public putJsonFormatDescriptor(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.putJsonFormatDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---

##### `resetCsvFormatDescriptor` <a name="resetCsvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetCsvFormatDescriptor"></a>

```typescript
public resetCsvFormatDescriptor(): void
```

##### `resetJsonFormatDescriptor` <a name="resetJsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resetJsonFormatDescriptor"></a>

```typescript
public resetJsonFormatDescriptor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor">csvFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor">jsonFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptorInput">csvFormatDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptorInput">jsonFormatDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvFormatDescriptor`<sup>Required</sup> <a name="csvFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor"></a>

```typescript
public readonly csvFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a>

---

##### `jsonFormatDescriptor`<sup>Required</sup> <a name="jsonFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor"></a>

```typescript
public readonly jsonFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a>

---

##### `csvFormatDescriptorInput`<sup>Optional</sup> <a name="csvFormatDescriptorInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptorInput"></a>

```typescript
public readonly csvFormatDescriptorInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---

##### `jsonFormatDescriptorInput`<sup>Optional</sup> <a name="jsonFormatDescriptorInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptorInput"></a>

```typescript
public readonly jsonFormatDescriptorInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor">putFileFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetFileFormatDescriptor">resetFileFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetHistoricalDataPathList">resetHistoricalDataPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetTemplatedPathList">resetTemplatedPathList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileFormatDescriptor` <a name="putFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor"></a>

```typescript
public putFileFormatDescriptor(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.putFileFormatDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---

##### `resetFileFormatDescriptor` <a name="resetFileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetFileFormatDescriptor"></a>

```typescript
public resetFileFormatDescriptor(): void
```

##### `resetHistoricalDataPathList` <a name="resetHistoricalDataPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetHistoricalDataPathList"></a>

```typescript
public resetHistoricalDataPathList(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTemplatedPathList` <a name="resetTemplatedPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resetTemplatedPathList"></a>

```typescript
public resetTemplatedPathList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor">fileFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptorInput">fileFormatDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathListInput">historicalDataPathListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathListInput">templatedPathListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList">historicalDataPathList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList">templatedPathList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFormatDescriptor`<sup>Required</sup> <a name="fileFormatDescriptor" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor"></a>

```typescript
public readonly fileFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a>

---

##### `fileFormatDescriptorInput`<sup>Optional</sup> <a name="fileFormatDescriptorInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptorInput"></a>

```typescript
public readonly fileFormatDescriptorInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---

##### `historicalDataPathListInput`<sup>Optional</sup> <a name="historicalDataPathListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathListInput"></a>

```typescript
public readonly historicalDataPathListInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `templatedPathListInput`<sup>Optional</sup> <a name="templatedPathListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathListInput"></a>

```typescript
public readonly templatedPathListInput: string[];
```

- *Type:* string[]

---

##### `historicalDataPathList`<sup>Required</sup> <a name="historicalDataPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList"></a>

```typescript
public readonly historicalDataPathList: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `templatedPathList`<sup>Required</sup> <a name="templatedPathList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList"></a>

```typescript
public readonly templatedPathList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListStructList <a name="LookoutmetricsAnomalyDetectorMetricSetListStructList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get"></a>

```typescript
public get(index: number): LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>[]

---


### LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList">putMetricList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource">putMetricSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn">putTimestampColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetDimensionList">resetDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetDescription">resetMetricSetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetFrequency">resetMetricSetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimestampColumn">resetTimestampColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricList` <a name="putMetricList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList"></a>

```typescript
public putMetricList(value: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]

---

##### `putMetricSource` <a name="putMetricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource"></a>

```typescript
public putMetricSource(value: LookoutmetricsAnomalyDetectorMetricSetListMetricSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putMetricSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---

##### `putTimestampColumn` <a name="putTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn"></a>

```typescript
public putTimestampColumn(value: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.putTimestampColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---

##### `resetDimensionList` <a name="resetDimensionList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetDimensionList"></a>

```typescript
public resetDimensionList(): void
```

##### `resetMetricSetDescription` <a name="resetMetricSetDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetDescription"></a>

```typescript
public resetMetricSetDescription(): void
```

##### `resetMetricSetFrequency` <a name="resetMetricSetFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetMetricSetFrequency"></a>

```typescript
public resetMetricSetFrequency(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetTimestampColumn` <a name="resetTimestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimestampColumn"></a>

```typescript
public resetTimestampColumn(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList">metricList</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource">metricSource</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn">timestampColumn</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionListInput">dimensionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricListInput">metricListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescriptionInput">metricSetDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequencyInput">metricSetFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetNameInput">metricSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSourceInput">metricSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList">dimensionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription">metricSetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency">metricSetFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName">metricSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList"></a>

```typescript
public readonly metricList: LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">LookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a>

---

##### `metricSource`<sup>Required</sup> <a name="metricSource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource"></a>

```typescript
public readonly metricSource: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">LookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a>

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a>

---

##### `dimensionListInput`<sup>Optional</sup> <a name="dimensionListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionListInput"></a>

```typescript
public readonly dimensionListInput: string[];
```

- *Type:* string[]

---

##### `metricListInput`<sup>Optional</sup> <a name="metricListInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricListInput"></a>

```typescript
public readonly metricListInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">LookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>[]

---

##### `metricSetDescriptionInput`<sup>Optional</sup> <a name="metricSetDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescriptionInput"></a>

```typescript
public readonly metricSetDescriptionInput: string;
```

- *Type:* string

---

##### `metricSetFrequencyInput`<sup>Optional</sup> <a name="metricSetFrequencyInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequencyInput"></a>

```typescript
public readonly metricSetFrequencyInput: string;
```

- *Type:* string

---

##### `metricSetNameInput`<sup>Optional</sup> <a name="metricSetNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetNameInput"></a>

```typescript
public readonly metricSetNameInput: string;
```

- *Type:* string

---

##### `metricSourceInput`<sup>Optional</sup> <a name="metricSourceInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSourceInput"></a>

```typescript
public readonly metricSourceInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListMetricSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListMetricSource">LookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumnInput"></a>

```typescript
public readonly timestampColumnInput: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `dimensionList`<sup>Required</sup> <a name="dimensionList" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList"></a>

```typescript
public readonly dimensionList: string[];
```

- *Type:* string[]

---

##### `metricSetDescription`<sup>Required</sup> <a name="metricSetDescription" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription"></a>

```typescript
public readonly metricSetDescription: string;
```

- *Type:* string

---

##### `metricSetFrequency`<sup>Required</sup> <a name="metricSetFrequency" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency"></a>

```typescript
public readonly metricSetFrequency: string;
```

- *Type:* string

---

##### `metricSetName`<sup>Required</sup> <a name="metricSetName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName"></a>

```typescript
public readonly metricSetName: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListStruct">LookoutmetricsAnomalyDetectorMetricSetListStruct</a>

---


### LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference <a name="LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer"></a>

```typescript
import { lookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnFormat">resetColumnFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnFormat` <a name="resetColumnFormat" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnFormat"></a>

```typescript
public resetColumnFormat(): void
```

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resetColumnName"></a>

```typescript
public resetColumnName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormatInput">columnFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat">columnFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnFormatInput`<sup>Optional</sup> <a name="columnFormatInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormatInput"></a>

```typescript
public readonly columnFormatInput: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnFormat`<sup>Required</sup> <a name="columnFormat" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat"></a>

```typescript
public readonly columnFormat: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lookoutmetricsAnomalyDetector.LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---



