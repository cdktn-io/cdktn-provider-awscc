# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStream(scope: Construct, id: string, config?: CloudwatchMetricStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters">putExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters">putIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations">putStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters">resetExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn">resetFirehoseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters">resetIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics">resetIncludeLinkedAccountsMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations">resetStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludeFilters` <a name="putExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters"></a>

```typescript
public putExcludeFilters(value: IResolvable | CloudwatchMetricStreamExcludeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

---

##### `putIncludeFilters` <a name="putIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters"></a>

```typescript
public putIncludeFilters(value: IResolvable | CloudwatchMetricStreamIncludeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

---

##### `putStatisticsConfigurations` <a name="putStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations"></a>

```typescript
public putStatisticsConfigurations(value: IResolvable | CloudwatchMetricStreamStatisticsConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchMetricStreamTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

---

##### `resetExcludeFilters` <a name="resetExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters"></a>

```typescript
public resetExcludeFilters(): void
```

##### `resetFirehoseArn` <a name="resetFirehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn"></a>

```typescript
public resetFirehoseArn(): void
```

##### `resetIncludeFilters` <a name="resetIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters"></a>

```typescript
public resetIncludeFilters(): void
```

##### `resetIncludeLinkedAccountsMetrics` <a name="resetIncludeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics"></a>

```typescript
public resetIncludeLinkedAccountsMetrics(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetStatisticsConfigurations` <a name="resetStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations"></a>

```typescript
public resetStatisticsConfigurations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

cloudwatchMetricStream.CloudwatchMetricStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchMetricStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchMetricStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters">excludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters">includeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">lastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations">statisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput">excludeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">firehoseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput">includeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput">includeLinkedAccountsMetricsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput">statisticsConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics">includeLinkedAccountsMetrics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `excludeFilters`<sup>Required</sup> <a name="excludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters"></a>

```typescript
public readonly excludeFilters: CloudwatchMetricStreamExcludeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeFilters`<sup>Required</sup> <a name="includeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters"></a>

```typescript
public readonly includeFilters: CloudwatchMetricStreamIncludeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a>

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```typescript
public readonly lastUpdateDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `statisticsConfigurations`<sup>Required</sup> <a name="statisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations"></a>

```typescript
public readonly statisticsConfigurations: CloudwatchMetricStreamStatisticsConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```typescript
public readonly tags: CloudwatchMetricStreamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a>

---

##### `excludeFiltersInput`<sup>Optional</sup> <a name="excludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput"></a>

```typescript
public readonly excludeFiltersInput: IResolvable | CloudwatchMetricStreamExcludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```typescript
public readonly firehoseArnInput: string;
```

- *Type:* string

---

##### `includeFiltersInput`<sup>Optional</sup> <a name="includeFiltersInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput"></a>

```typescript
public readonly includeFiltersInput: IResolvable | CloudwatchMetricStreamIncludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

---

##### `includeLinkedAccountsMetricsInput`<sup>Optional</sup> <a name="includeLinkedAccountsMetricsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput"></a>

```typescript
public readonly includeLinkedAccountsMetricsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `statisticsConfigurationsInput`<sup>Optional</sup> <a name="statisticsConfigurationsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput"></a>

```typescript
public readonly statisticsConfigurationsInput: IResolvable | CloudwatchMetricStreamStatisticsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchMetricStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

---

##### `includeLinkedAccountsMetrics`<sup>Required</sup> <a name="includeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics"></a>

```typescript
public readonly includeLinkedAccountsMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

const cloudwatchMetricStreamConfig: cloudwatchMetricStream.CloudwatchMetricStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters">excludeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]</code> | Define which metrics will be not streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | The ARN of the Kinesis Firehose where to stream the data. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters">includeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]</code> | Define which metrics will be streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics">includeLinkedAccountsMetrics</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">name</a></code> | <code>string</code> | Name of the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">outputFormat</a></code> | <code>string</code> | The output format of the data streamed to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that provides access to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations">statisticsConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]</code> | By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]</code> | A set of tags to assign to the delivery stream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `excludeFilters`<sup>Optional</sup> <a name="excludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters"></a>

```typescript
public readonly excludeFilters: IResolvable | CloudwatchMetricStreamExcludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

Define which metrics will be not streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#exclude_filters CloudwatchMetricStream#exclude_filters}

---

##### `firehoseArn`<sup>Optional</sup> <a name="firehoseArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

The ARN of the Kinesis Firehose where to stream the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}

---

##### `includeFilters`<sup>Optional</sup> <a name="includeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters"></a>

```typescript
public readonly includeFilters: IResolvable | CloudwatchMetricStreamIncludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

Define which metrics will be streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#include_filters CloudwatchMetricStream#include_filters}

---

##### `includeLinkedAccountsMetrics`<sup>Optional</sup> <a name="includeLinkedAccountsMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics"></a>

```typescript
public readonly includeLinkedAccountsMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the metric stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The output format of the data streamed to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that provides access to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}

---

##### `statisticsConfigurations`<sup>Optional</sup> <a name="statisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations"></a>

```typescript
public readonly statisticsConfigurations: IResolvable | CloudwatchMetricStreamStatisticsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.

You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#statistics_configurations CloudwatchMetricStream#statistics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchMetricStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

A set of tags to assign to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}

---

### CloudwatchMetricStreamExcludeFilters <a name="CloudwatchMetricStreamExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

const cloudwatchMetricStreamExcludeFilters: cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames">metricNames</a></code> | <code>string[]</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace">namespace</a></code> | <code>string</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamIncludeFilters <a name="CloudwatchMetricStreamIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

const cloudwatchMetricStreamIncludeFilters: cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames">metricNames</a></code> | <code>string[]</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace">namespace</a></code> | <code>string</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamStatisticsConfigurations <a name="CloudwatchMetricStreamStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

const cloudwatchMetricStreamStatisticsConfigurations: cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics">additionalStatistics</a></code> | <code>string[]</code> | The additional statistics to stream for the metrics listed in IncludeMetrics. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics">includeMetrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]</code> | An array that defines the metrics that are to have additional statistics streamed. |

---

##### `additionalStatistics`<sup>Optional</sup> <a name="additionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics"></a>

```typescript
public readonly additionalStatistics: string[];
```

- *Type:* string[]

The additional statistics to stream for the metrics listed in IncludeMetrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}

---

##### `includeMetrics`<sup>Optional</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics"></a>

```typescript
public readonly includeMetrics: IResolvable | CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

An array that defines the metrics that are to have additional statistics streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#include_metrics CloudwatchMetricStream#include_metrics}

---

### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

const cloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics: cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the metric. |

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamTags <a name="CloudwatchMetricStreamTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

const cloudwatchMetricStreamTags: cloudwatchMetricStream.CloudwatchMetricStreamTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key">key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value">value</a></code> | <code>string</code> | String which you can use to describe or define the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#key CloudwatchMetricStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String which you can use to describe or define the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_metric_stream#value CloudwatchMetricStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFiltersList <a name="CloudwatchMetricStreamExcludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamExcludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamExcludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>[]

---


### CloudwatchMetricStreamExcludeFiltersOutputReference <a name="CloudwatchMetricStreamExcludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames"></a>

```typescript
public resetMetricNames(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput"></a>

```typescript
public readonly metricNamesInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamExcludeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>

---


### CloudwatchMetricStreamIncludeFiltersList <a name="CloudwatchMetricStreamIncludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamIncludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamIncludeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>[]

---


### CloudwatchMetricStreamIncludeFiltersOutputReference <a name="CloudwatchMetricStreamIncludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames"></a>

```typescript
public resetMetricNames(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput"></a>

```typescript
public readonly metricNamesInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamIncludeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>

---


### CloudwatchMetricStreamStatisticsConfigurationsList <a name="CloudwatchMetricStreamStatisticsConfigurationsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamStatisticsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>[]

---


### CloudwatchMetricStreamStatisticsConfigurationsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics">putIncludeMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics">resetAdditionalStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics">resetIncludeMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeMetrics` <a name="putIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics"></a>

```typescript
public putIncludeMetrics(value: IResolvable | CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

---

##### `resetAdditionalStatistics` <a name="resetAdditionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics"></a>

```typescript
public resetAdditionalStatistics(): void
```

##### `resetIncludeMetrics` <a name="resetIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics"></a>

```typescript
public resetIncludeMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics">includeMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput">additionalStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput">includeMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics">additionalStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeMetrics`<sup>Required</sup> <a name="includeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics"></a>

```typescript
public readonly includeMetrics: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a>

---

##### `additionalStatisticsInput`<sup>Optional</sup> <a name="additionalStatisticsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput"></a>

```typescript
public readonly additionalStatisticsInput: string[];
```

- *Type:* string[]

---

##### `includeMetricsInput`<sup>Optional</sup> <a name="includeMetricsInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput"></a>

```typescript
public readonly includeMetricsInput: IResolvable | CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>[]

---

##### `additionalStatistics`<sup>Required</sup> <a name="additionalStatistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics"></a>

```typescript
public readonly additionalStatistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamStatisticsConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>

---


### CloudwatchMetricStreamTagsList <a name="CloudwatchMetricStreamTagsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>[]

---


### CloudwatchMetricStreamTagsOutputReference <a name="CloudwatchMetricStreamTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktn/provider-awscc'

new cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>

---



