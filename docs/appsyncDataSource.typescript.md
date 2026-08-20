# `appsyncDataSource` Submodule <a name="`appsyncDataSource` Submodule" id="@cdktn/provider-awscc.appsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDataSource <a name="AppsyncDataSource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSource(scope: Construct, id: string, config: AppsyncDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig">AppsyncDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig">AppsyncDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig">putDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig">putElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig">putEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig">putHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig">putOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig">putRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig">resetDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig">resetElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig">resetEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig">resetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig">resetOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig">resetRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn">resetServiceRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamoDbConfig` <a name="putDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig"></a>

```typescript
public putDynamoDbConfig(value: AppsyncDataSourceDynamoDbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `putElasticsearchConfig` <a name="putElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig"></a>

```typescript
public putElasticsearchConfig(value: AppsyncDataSourceElasticsearchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `putEventBridgeConfig` <a name="putEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig"></a>

```typescript
public putEventBridgeConfig(value: AppsyncDataSourceEventBridgeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `putHttpConfig` <a name="putHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig"></a>

```typescript
public putHttpConfig(value: AppsyncDataSourceHttpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig"></a>

```typescript
public putLambdaConfig(value: AppsyncDataSourceLambdaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `putOpenSearchServiceConfig` <a name="putOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig"></a>

```typescript
public putOpenSearchServiceConfig(value: AppsyncDataSourceOpenSearchServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `putRelationalDatabaseConfig` <a name="putRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig"></a>

```typescript
public putRelationalDatabaseConfig(value: AppsyncDataSourceRelationalDatabaseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDynamoDbConfig` <a name="resetDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig"></a>

```typescript
public resetDynamoDbConfig(): void
```

##### `resetElasticsearchConfig` <a name="resetElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig"></a>

```typescript
public resetElasticsearchConfig(): void
```

##### `resetEventBridgeConfig` <a name="resetEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig"></a>

```typescript
public resetEventBridgeConfig(): void
```

##### `resetHttpConfig` <a name="resetHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig"></a>

```typescript
public resetHttpConfig(): void
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig"></a>

```typescript
public resetLambdaConfig(): void
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig"></a>

```typescript
public resetMetricsConfig(): void
```

##### `resetOpenSearchServiceConfig` <a name="resetOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig"></a>

```typescript
public resetOpenSearchServiceConfig(): void
```

##### `resetRelationalDatabaseConfig` <a name="resetRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig"></a>

```typescript
public resetRelationalDatabaseConfig(): void
```

##### `resetServiceRoleArn` <a name="resetServiceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn"></a>

```typescript
public resetServiceRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

appsyncDataSource.AppsyncDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

appsyncDataSource.AppsyncDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

appsyncDataSource.AppsyncDataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

appsyncDataSource.AppsyncDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig">dynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig">eventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig">openSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput">dynamoDbConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput">elasticsearchConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput">eventBridgeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput">httpConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput">metricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput">openSearchServiceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput">relationalDatabaseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig">metricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dynamoDbConfig`<sup>Required</sup> <a name="dynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig"></a>

```typescript
public readonly dynamoDbConfig: AppsyncDataSourceDynamoDbConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="elasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig"></a>

```typescript
public readonly elasticsearchConfig: AppsyncDataSourceElasticsearchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `eventBridgeConfig`<sup>Required</sup> <a name="eventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig"></a>

```typescript
public readonly eventBridgeConfig: AppsyncDataSourceEventBridgeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig"></a>

```typescript
public readonly httpConfig: AppsyncDataSourceHttpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: AppsyncDataSourceLambdaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `openSearchServiceConfig`<sup>Required</sup> <a name="openSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig"></a>

```typescript
public readonly openSearchServiceConfig: AppsyncDataSourceOpenSearchServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="relationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig"></a>

```typescript
public readonly relationalDatabaseConfig: AppsyncDataSourceRelationalDatabaseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dynamoDbConfigInput`<sup>Optional</sup> <a name="dynamoDbConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput"></a>

```typescript
public readonly dynamoDbConfigInput: IResolvable | AppsyncDataSourceDynamoDbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `elasticsearchConfigInput`<sup>Optional</sup> <a name="elasticsearchConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput"></a>

```typescript
public readonly elasticsearchConfigInput: IResolvable | AppsyncDataSourceElasticsearchConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `eventBridgeConfigInput`<sup>Optional</sup> <a name="eventBridgeConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput"></a>

```typescript
public readonly eventBridgeConfigInput: IResolvable | AppsyncDataSourceEventBridgeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `httpConfigInput`<sup>Optional</sup> <a name="httpConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput"></a>

```typescript
public readonly httpConfigInput: IResolvable | AppsyncDataSourceHttpConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput"></a>

```typescript
public readonly lambdaConfigInput: IResolvable | AppsyncDataSourceLambdaConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput"></a>

```typescript
public readonly metricsConfigInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openSearchServiceConfigInput`<sup>Optional</sup> <a name="openSearchServiceConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput"></a>

```typescript
public readonly openSearchServiceConfigInput: IResolvable | AppsyncDataSourceOpenSearchServiceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `relationalDatabaseConfigInput`<sup>Optional</sup> <a name="relationalDatabaseConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput"></a>

```typescript
public readonly relationalDatabaseConfigInput: IResolvable | AppsyncDataSourceRelationalDatabaseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDataSourceConfig <a name="AppsyncDataSourceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceConfig: appsyncDataSource.AppsyncDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId">apiId</a></code> | <code>string</code> | Unique AWS AppSync GraphQL API identifier where this data source will be created. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name">name</a></code> | <code>string</code> | Friendly name for you to identify your AppSync data source after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type">type</a></code> | <code>string</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description">description</a></code> | <code>string</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig">dynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | AWS Region and TableName for an Amazon DynamoDB table in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig">eventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | ARN for the EventBridge bus. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | Endpoints for an HTTP data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | An ARN of a Lambda function in valid ARN format. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig">metricsConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig">openSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | Relational Database configuration of the relational database data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | The AWS Identity and Access Management service role ARN for the data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Unique AWS AppSync GraphQL API identifier where this data source will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#api_id AppsyncDataSource#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name for you to identify your AppSync data source after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#name AppsyncDataSource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#type AppsyncDataSource#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#description AppsyncDataSource#description}

---

##### `dynamoDbConfig`<sup>Optional</sup> <a name="dynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig"></a>

```typescript
public readonly dynamoDbConfig: AppsyncDataSourceDynamoDbConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

AWS Region and TableName for an Amazon DynamoDB table in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#dynamo_db_config AppsyncDataSource#dynamo_db_config}

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="elasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig"></a>

```typescript
public readonly elasticsearchConfig: AppsyncDataSourceElasticsearchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#elasticsearch_config AppsyncDataSource#elasticsearch_config}

---

##### `eventBridgeConfig`<sup>Optional</sup> <a name="eventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig"></a>

```typescript
public readonly eventBridgeConfig: AppsyncDataSourceEventBridgeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#event_bridge_config AppsyncDataSource#event_bridge_config}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig"></a>

```typescript
public readonly httpConfig: AppsyncDataSourceHttpConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

Endpoints for an HTTP data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#http_config AppsyncDataSource#http_config}

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: AppsyncDataSourceLambdaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

An ARN of a Lambda function in valid ARN format.

This can be the ARN of a Lambda function that exists in the current account or in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#lambda_config AppsyncDataSource#lambda_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}.

---

##### `openSearchServiceConfig`<sup>Optional</sup> <a name="openSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig"></a>

```typescript
public readonly openSearchServiceConfig: AppsyncDataSourceOpenSearchServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#open_search_service_config AppsyncDataSource#open_search_service_config}

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="relationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig"></a>

```typescript
public readonly relationalDatabaseConfig: AppsyncDataSourceRelationalDatabaseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

Relational Database configuration of the relational database data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#relational_database_config AppsyncDataSource#relational_database_config}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

The AWS Identity and Access Management service role ARN for the data source.

The system assumes this role when accessing the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#service_role_arn AppsyncDataSource#service_role_arn}

---

### AppsyncDataSourceDynamoDbConfig <a name="AppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceDynamoDbConfig: appsyncDataSource.AppsyncDataSourceDynamoDbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | The DeltaSyncConfig for a versioned datasource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName">tableName</a></code> | <code>string</code> | The table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials">useCallerCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to TRUE to use AWS Identity and Access Management with this data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned">versioned</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to TRUE to use Conflict Detection and Resolution with this data source. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `deltaSyncConfig`<sup>Optional</sup> <a name="deltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig"></a>

```typescript
public readonly deltaSyncConfig: AppsyncDataSourceDynamoDbConfigDeltaSyncConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

The DeltaSyncConfig for a versioned datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#delta_sync_config AppsyncDataSource#delta_sync_config}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#table_name AppsyncDataSource#table_name}

---

##### `useCallerCredentials`<sup>Optional</sup> <a name="useCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials"></a>

```typescript
public readonly useCallerCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to TRUE to use AWS Identity and Access Management with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#use_caller_credentials AppsyncDataSource#use_caller_credentials}

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned"></a>

```typescript
public readonly versioned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to TRUE to use Conflict Detection and Resolution with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#versioned AppsyncDataSource#versioned}

---

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceDynamoDbConfigDeltaSyncConfig: appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl">baseTableTtl</a></code> | <code>string</code> | The number of minutes that an Item is stored in the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>string</code> | The Delta Sync table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>string</code> | The number of minutes that a Delta Sync log entry is stored in the Delta Sync table. |

---

##### `baseTableTtl`<sup>Optional</sup> <a name="baseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```typescript
public readonly baseTableTtl: string;
```

- *Type:* string

The number of minutes that an Item is stored in the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#base_table_ttl AppsyncDataSource#base_table_ttl}

---

##### `deltaSyncTableName`<sup>Optional</sup> <a name="deltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```typescript
public readonly deltaSyncTableName: string;
```

- *Type:* string

The Delta Sync table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#delta_sync_table_name AppsyncDataSource#delta_sync_table_name}

---

##### `deltaSyncTableTtl`<sup>Optional</sup> <a name="deltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```typescript
public readonly deltaSyncTableTtl: string;
```

- *Type:* string

The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#delta_sync_table_ttl AppsyncDataSource#delta_sync_table_ttl}

---

### AppsyncDataSourceElasticsearchConfig <a name="AppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceElasticsearchConfig: appsyncDataSource.AppsyncDataSourceElasticsearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceEventBridgeConfig <a name="AppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceEventBridgeConfig: appsyncDataSource.AppsyncDataSourceEventBridgeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | ARN for the EventBridge bus. |

---

##### `eventBusArn`<sup>Optional</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#event_bus_arn AppsyncDataSource#event_bus_arn}

---

### AppsyncDataSourceHttpConfig <a name="AppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceHttpConfig: appsyncDataSource.AppsyncDataSourceHttpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | The authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: AppsyncDataSourceHttpConfigAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

The authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#authorization_config AppsyncDataSource#authorization_config}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceHttpConfigAuthorizationConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceHttpConfigAuthorizationConfig: appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType">authorizationType</a></code> | <code>string</code> | The authorization type that the HTTP endpoint requires. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | The AWS Identity and Access Management settings. |

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

The authorization type that the HTTP endpoint requires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#authorization_type AppsyncDataSource#authorization_type}

---

##### `awsIamConfig`<sup>Optional</sup> <a name="awsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```typescript
public readonly awsIamConfig: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

The AWS Identity and Access Management settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_iam_config AppsyncDataSource#aws_iam_config}

---

### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig: appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">signingRegion</a></code> | <code>string</code> | The signing Region for AWS Identity and Access Management authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">signingServiceName</a></code> | <code>string</code> | The signing service name for AWS Identity and Access Management authorization. |

---

##### `signingRegion`<sup>Optional</sup> <a name="signingRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```typescript
public readonly signingRegion: string;
```

- *Type:* string

The signing Region for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#signing_region AppsyncDataSource#signing_region}

---

##### `signingServiceName`<sup>Optional</sup> <a name="signingServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```typescript
public readonly signingServiceName: string;
```

- *Type:* string

The signing service name for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#signing_service_name AppsyncDataSource#signing_service_name}

---

### AppsyncDataSourceLambdaConfig <a name="AppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceLambdaConfig: appsyncDataSource.AppsyncDataSourceLambdaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | The ARN for the Lambda function. |

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

The ARN for the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#lambda_function_arn AppsyncDataSource#lambda_function_arn}

---

### AppsyncDataSourceOpenSearchServiceConfig <a name="AppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceOpenSearchServiceConfig: appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceRelationalDatabaseConfig <a name="AppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceRelationalDatabaseConfig: appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig">rdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | Information about the Amazon RDS resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType">relationalDatabaseSourceType</a></code> | <code>string</code> | The type of relational data source. |

---

##### `rdsHttpEndpointConfig`<sup>Optional</sup> <a name="rdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

```typescript
public readonly rdsHttpEndpointConfig: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

Information about the Amazon RDS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#rds_http_endpoint_config AppsyncDataSource#rds_http_endpoint_config}

---

##### `relationalDatabaseSourceType`<sup>Optional</sup> <a name="relationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

```typescript
public readonly relationalDatabaseSourceType: string;
```

- *Type:* string

The type of relational data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#relational_database_source_type AppsyncDataSource#relational_database_source_type}

---

### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

const appsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig: appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | AWS Region for RDS HTTP endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>string</code> | The ARN for database credentials stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Logical database name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | Amazon RDS cluster Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema">schema</a></code> | <code>string</code> | Logical schema name. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

AWS Region for RDS HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `awsSecretStoreArn`<sup>Optional</sup> <a name="awsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

```typescript
public readonly awsSecretStoreArn: string;
```

- *Type:* string

The ARN for database credentials stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_secret_store_arn AppsyncDataSource#aws_secret_store_arn}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Logical database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#database_name AppsyncDataSource#database_name}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

Amazon RDS cluster Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#db_cluster_identifier AppsyncDataSource#db_cluster_identifier}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Logical schema name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#schema AppsyncDataSource#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">resetBaseTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName">resetDeltaSyncTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">resetDeltaSyncTableTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseTableTtl` <a name="resetBaseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```typescript
public resetBaseTableTtl(): void
```

##### `resetDeltaSyncTableName` <a name="resetDeltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName"></a>

```typescript
public resetDeltaSyncTableName(): void
```

##### `resetDeltaSyncTableTtl` <a name="resetDeltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```typescript
public resetDeltaSyncTableTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">baseTableTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">deltaSyncTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">deltaSyncTableTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">baseTableTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTableTtlInput`<sup>Optional</sup> <a name="baseTableTtlInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```typescript
public readonly baseTableTtlInput: string;
```

- *Type:* string

---

##### `deltaSyncTableNameInput`<sup>Optional</sup> <a name="deltaSyncTableNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```typescript
public readonly deltaSyncTableNameInput: string;
```

- *Type:* string

---

##### `deltaSyncTableTtlInput`<sup>Optional</sup> <a name="deltaSyncTableTtlInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```typescript
public readonly deltaSyncTableTtlInput: string;
```

- *Type:* string

---

##### `baseTableTtl`<sup>Required</sup> <a name="baseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```typescript
public readonly baseTableTtl: string;
```

- *Type:* string

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="deltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```typescript
public readonly deltaSyncTableName: string;
```

- *Type:* string

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="deltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```typescript
public readonly deltaSyncTableTtl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceDynamoDbConfigDeltaSyncConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### AppsyncDataSourceDynamoDbConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig">putDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig">resetDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials">resetUseCallerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned">resetVersioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaSyncConfig` <a name="putDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig"></a>

```typescript
public putDeltaSyncConfig(value: AppsyncDataSourceDynamoDbConfigDeltaSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetDeltaSyncConfig` <a name="resetDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig"></a>

```typescript
public resetDeltaSyncConfig(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetUseCallerCredentials` <a name="resetUseCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials"></a>

```typescript
public resetUseCallerCredentials(): void
```

##### `resetVersioned` <a name="resetVersioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned"></a>

```typescript
public resetVersioned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput">deltaSyncConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput">useCallerCredentialsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput">versionedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">useCallerCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">versioned</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="deltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```typescript
public readonly deltaSyncConfig: AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `deltaSyncConfigInput`<sup>Optional</sup> <a name="deltaSyncConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput"></a>

```typescript
public readonly deltaSyncConfigInput: IResolvable | AppsyncDataSourceDynamoDbConfigDeltaSyncConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `useCallerCredentialsInput`<sup>Optional</sup> <a name="useCallerCredentialsInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput"></a>

```typescript
public readonly useCallerCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versionedInput`<sup>Optional</sup> <a name="versionedInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput"></a>

```typescript
public readonly versionedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `useCallerCredentials`<sup>Required</sup> <a name="useCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```typescript
public readonly useCallerCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```typescript
public readonly versioned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceDynamoDbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---


### AppsyncDataSourceElasticsearchConfigOutputReference <a name="AppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceElasticsearchConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---


### AppsyncDataSourceEventBridgeConfigOutputReference <a name="AppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn">resetEventBusArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBusArn` <a name="resetEventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn"></a>

```typescript
public resetEventBusArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput"></a>

```typescript
public readonly eventBusArnInput: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceEventBridgeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">resetSigningRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">resetSigningServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSigningRegion` <a name="resetSigningRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```typescript
public resetSigningRegion(): void
```

##### `resetSigningServiceName` <a name="resetSigningServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```typescript
public resetSigningServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">signingRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">signingServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signingRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signingServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingRegionInput`<sup>Optional</sup> <a name="signingRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```typescript
public readonly signingRegionInput: string;
```

- *Type:* string

---

##### `signingServiceNameInput`<sup>Optional</sup> <a name="signingServiceNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```typescript
public readonly signingServiceNameInput: string;
```

- *Type:* string

---

##### `signingRegion`<sup>Required</sup> <a name="signingRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```typescript
public readonly signingRegion: string;
```

- *Type:* string

---

##### `signingServiceName`<sup>Required</sup> <a name="signingServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```typescript
public readonly signingServiceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">putAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">resetAwsIamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsIamConfig` <a name="putAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```typescript
public putAwsIamConfig(value: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```typescript
public resetAuthorizationType(): void
```

##### `resetAwsIamConfig` <a name="resetAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```typescript
public resetAwsIamConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">awsIamConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsIamConfig`<sup>Required</sup> <a name="awsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```typescript
public readonly awsIamConfig: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```typescript
public readonly authorizationTypeInput: string;
```

- *Type:* string

---

##### `awsIamConfigInput`<sup>Optional</sup> <a name="awsIamConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```typescript
public readonly awsIamConfigInput: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDataSourceHttpConfigOutputReference <a name="AppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: AppsyncDataSourceHttpConfigAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```typescript
public resetAuthorizationConfig(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceHttpConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---


### AppsyncDataSourceLambdaConfigOutputReference <a name="AppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn"></a>

```typescript
public resetLambdaFunctionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput"></a>

```typescript
public readonly lambdaFunctionArnInput: string;
```

- *Type:* string

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceLambdaConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---


### AppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="AppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceOpenSearchServiceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig">putRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig">resetRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType">resetRelationalDatabaseSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRdsHttpEndpointConfig` <a name="putRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig"></a>

```typescript
public putRdsHttpEndpointConfig(value: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `resetRdsHttpEndpointConfig` <a name="resetRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig"></a>

```typescript
public resetRdsHttpEndpointConfig(): void
```

##### `resetRelationalDatabaseSourceType` <a name="resetRelationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType"></a>

```typescript
public resetRelationalDatabaseSourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">rdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput">rdsHttpEndpointConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput">relationalDatabaseSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">relationalDatabaseSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rdsHttpEndpointConfig`<sup>Required</sup> <a name="rdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```typescript
public readonly rdsHttpEndpointConfig: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `rdsHttpEndpointConfigInput`<sup>Optional</sup> <a name="rdsHttpEndpointConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput"></a>

```typescript
public readonly rdsHttpEndpointConfigInput: IResolvable | AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `relationalDatabaseSourceTypeInput`<sup>Optional</sup> <a name="relationalDatabaseSourceTypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput"></a>

```typescript
public readonly relationalDatabaseSourceTypeInput: string;
```

- *Type:* string

---

##### `relationalDatabaseSourceType`<sup>Required</sup> <a name="relationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```typescript
public readonly relationalDatabaseSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceRelationalDatabaseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```typescript
import { appsyncDataSource } from '@cdktn/provider-awscc'

new appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn">resetAwsSecretStoreArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetAwsSecretStoreArn` <a name="resetAwsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn"></a>

```typescript
public resetAwsSecretStoreArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier"></a>

```typescript
public resetDbClusterIdentifier(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">awsSecretStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `awsSecretStoreArnInput`<sup>Optional</sup> <a name="awsSecretStoreArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```typescript
public readonly awsSecretStoreArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="awsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```typescript
public readonly awsSecretStoreArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



