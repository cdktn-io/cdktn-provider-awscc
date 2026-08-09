# `appsyncResolver` Submodule <a name="`appsyncResolver` Submodule" id="@cdktn/provider-awscc.appsyncResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncResolver <a name="AppsyncResolver" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver awscc_appsync_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

new appsyncResolver.AppsyncResolver(scope: Construct, id: string, config: AppsyncResolverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig">AppsyncResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig">AppsyncResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig">putCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig">putPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCachingConfig">resetCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCodeS3Location">resetCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetDataSourceName">resetDataSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetPipelineConfig">resetPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplate">resetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplateS3Location">resetRequestMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplate">resetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplateS3Location">resetResponseMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCachingConfig` <a name="putCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig"></a>

```typescript
public putCachingConfig(value: AppsyncResolverCachingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `putPipelineConfig` <a name="putPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig"></a>

```typescript
public putPipelineConfig(value: AppsyncResolverPipelineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `putRuntime` <a name="putRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime"></a>

```typescript
public putRuntime(value: AppsyncResolverRuntime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig"></a>

```typescript
public putSyncConfig(value: AppsyncResolverSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `resetCachingConfig` <a name="resetCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCachingConfig"></a>

```typescript
public resetCachingConfig(): void
```

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetCodeS3Location` <a name="resetCodeS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCodeS3Location"></a>

```typescript
public resetCodeS3Location(): void
```

##### `resetDataSourceName` <a name="resetDataSourceName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetDataSourceName"></a>

```typescript
public resetDataSourceName(): void
```

##### `resetKind` <a name="resetKind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMaxBatchSize"></a>

```typescript
public resetMaxBatchSize(): void
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMetricsConfig"></a>

```typescript
public resetMetricsConfig(): void
```

##### `resetPipelineConfig` <a name="resetPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetPipelineConfig"></a>

```typescript
public resetPipelineConfig(): void
```

##### `resetRequestMappingTemplate` <a name="resetRequestMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplate"></a>

```typescript
public resetRequestMappingTemplate(): void
```

##### `resetRequestMappingTemplateS3Location` <a name="resetRequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplateS3Location"></a>

```typescript
public resetRequestMappingTemplateS3Location(): void
```

##### `resetResponseMappingTemplate` <a name="resetResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplate"></a>

```typescript
public resetResponseMappingTemplate(): void
```

##### `resetResponseMappingTemplateS3Location` <a name="resetResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplateS3Location"></a>

```typescript
public resetResponseMappingTemplateS3Location(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncResolver resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

appsyncResolver.AppsyncResolver.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

appsyncResolver.AppsyncResolver.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

appsyncResolver.AppsyncResolver.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

appsyncResolver.AppsyncResolver.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppsyncResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.resolverArn">resolverArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfigInput">cachingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3LocationInput">codeS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfigInput">metricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfigInput">pipelineConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateInput">requestMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3LocationInput">requestMappingTemplateS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateInput">responseMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3LocationInput">responseMappingTemplateS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtimeInput">runtimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfigInput">syncConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3Location">codeS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfig">metricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cachingConfig`<sup>Required</sup> <a name="cachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfig"></a>

```typescript
public readonly cachingConfig: AppsyncResolverCachingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pipelineConfig`<sup>Required</sup> <a name="pipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: AppsyncResolverPipelineConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a>

---

##### `resolverArn`<sup>Required</sup> <a name="resolverArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.resolverArn"></a>

```typescript
public readonly resolverArn: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtime"></a>

```typescript
public readonly runtime: AppsyncResolverRuntimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncResolverSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `cachingConfigInput`<sup>Optional</sup> <a name="cachingConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfigInput"></a>

```typescript
public readonly cachingConfigInput: IResolvable | AppsyncResolverCachingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `codeS3LocationInput`<sup>Optional</sup> <a name="codeS3LocationInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3LocationInput"></a>

```typescript
public readonly codeS3LocationInput: string;
```

- *Type:* string

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceNameInput"></a>

```typescript
public readonly dataSourceNameInput: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput"></a>

```typescript
public readonly maxBatchSizeInput: number;
```

- *Type:* number

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfigInput"></a>

```typescript
public readonly metricsConfigInput: string;
```

- *Type:* string

---

##### `pipelineConfigInput`<sup>Optional</sup> <a name="pipelineConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfigInput"></a>

```typescript
public readonly pipelineConfigInput: IResolvable | AppsyncResolverPipelineConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `requestMappingTemplateInput`<sup>Optional</sup> <a name="requestMappingTemplateInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateInput"></a>

```typescript
public readonly requestMappingTemplateInput: string;
```

- *Type:* string

---

##### `requestMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="requestMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3LocationInput"></a>

```typescript
public readonly requestMappingTemplateS3LocationInput: string;
```

- *Type:* string

---

##### `responseMappingTemplateInput`<sup>Optional</sup> <a name="responseMappingTemplateInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateInput"></a>

```typescript
public readonly responseMappingTemplateInput: string;
```

- *Type:* string

---

##### `responseMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="responseMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3LocationInput"></a>

```typescript
public readonly responseMappingTemplateS3LocationInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: IResolvable | AppsyncResolverRuntime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: IResolvable | AppsyncResolverSyncConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `codeS3Location`<sup>Required</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3Location"></a>

```typescript
public readonly codeS3Location: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: string;
```

- *Type:* string

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

---

##### `requestMappingTemplateS3Location`<sup>Required</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3Location"></a>

```typescript
public readonly requestMappingTemplateS3Location: string;
```

- *Type:* string

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

---

##### `responseMappingTemplateS3Location`<sup>Required</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3Location"></a>

```typescript
public readonly responseMappingTemplateS3Location: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncResolverCachingConfig <a name="AppsyncResolverCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

const appsyncResolverCachingConfig: appsyncResolver.AppsyncResolverCachingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys">cachingKeys</a></code> | <code>string[]</code> | The caching keys for a resolver that has caching activated. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.ttl">ttl</a></code> | <code>number</code> | The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds. |

---

##### `cachingKeys`<sup>Optional</sup> <a name="cachingKeys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys"></a>

```typescript
public readonly cachingKeys: string[];
```

- *Type:* string[]

The caching keys for a resolver that has caching activated.

Valid values are entries from the ``$context.arguments``, ``$context.source``, and ``$context.identity`` maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}

---

### AppsyncResolverConfig <a name="AppsyncResolverConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

const appsyncResolverConfig: appsyncResolver.AppsyncResolverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.apiId">apiId</a></code> | <code>string</code> | The APSYlong GraphQL API to which you want to attach this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.fieldName">fieldName</a></code> | <code>string</code> | The GraphQL field on a type that invokes the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.typeName">typeName</a></code> | <code>string</code> | The GraphQL type that invokes this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | The caching configuration for the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.code">code</a></code> | <code>string</code> | The ``resolver`` code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.codeS3Location">codeS3Location</a></code> | <code>string</code> | The Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The resolver data source name. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.kind">kind</a></code> | <code>string</code> | The resolver type. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.metricsConfig">metricsConfig</a></code> | <code>string</code> | Enables or disables enhanced resolver metrics for specified resolvers. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | Functions linked with the pipeline resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | The request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplateS3Location">requestMappingTemplateS3Location</a></code> | <code>string</code> | The location of a request mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | The response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplateS3Location">responseMappingTemplateS3Location</a></code> | <code>string</code> | The location of a response mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | Describes a runtime used by an APSYlong resolver or APSYlong function. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | The ``SyncConfig`` for a resolver attached to a versioned data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The APSYlong GraphQL API to which you want to attach this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The GraphQL field on a type that invokes the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#field_name AppsyncResolver#field_name}

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The GraphQL type that invokes this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#type_name AppsyncResolver#type_name}

---

##### `cachingConfig`<sup>Optional</sup> <a name="cachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.cachingConfig"></a>

```typescript
public readonly cachingConfig: AppsyncResolverCachingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

The caching configuration for the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

The ``resolver`` code that contains the request and response functions.

When code is used, the ``runtime`` is required. The runtime value must be ``APPSYNC_JS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#code AppsyncResolver#code}

---

##### `codeS3Location`<sup>Optional</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.codeS3Location"></a>

```typescript
public readonly codeS3Location: string;
```

- *Type:* string

The Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#code_s3_location AppsyncResolver#code_s3_location}

---

##### `dataSourceName`<sup>Optional</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

The resolver data source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#data_source_name AppsyncResolver#data_source_name}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The resolver type.

+  *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
  +  *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of ``Function`` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#kind AppsyncResolver#kind}

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: string;
```

- *Type:* string

Enables or disables enhanced resolver metrics for specified resolvers.

Note that ``MetricsConfig`` won't be used unless the ``resolverLevelMetricsBehavior`` value is set to ``PER_RESOLVER_METRICS``. If the ``resolverLevelMetricsBehavior`` is set to ``FULL_REQUEST_RESOLVER_METRICS`` instead, ``MetricsConfig`` will be ignored. However, you can still set its value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#metrics_config AppsyncResolver#metrics_config}

---

##### `pipelineConfig`<sup>Optional</sup> <a name="pipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: AppsyncResolverPipelineConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

Functions linked with the pipeline resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

The request mapping template.

Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#request_mapping_template AppsyncResolver#request_mapping_template}

---

##### `requestMappingTemplateS3Location`<sup>Optional</sup> <a name="requestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplateS3Location"></a>

```typescript
public readonly requestMappingTemplateS3Location: string;
```

- *Type:* string

The location of a request mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#request_mapping_template_s3_location AppsyncResolver#request_mapping_template_s3_location}

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

The response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#response_mapping_template AppsyncResolver#response_mapping_template}

---

##### `responseMappingTemplateS3Location`<sup>Optional</sup> <a name="responseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplateS3Location"></a>

```typescript
public readonly responseMappingTemplateS3Location: string;
```

- *Type:* string

The location of a response mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#response_mapping_template_s3_location AppsyncResolver#response_mapping_template_s3_location}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.runtime"></a>

```typescript
public readonly runtime: AppsyncResolverRuntime;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

Describes a runtime used by an APSYlong resolver or APSYlong function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncResolverSyncConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

The ``SyncConfig`` for a resolver attached to a versioned data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

### AppsyncResolverPipelineConfig <a name="AppsyncResolverPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

const appsyncResolverPipelineConfig: appsyncResolver.AppsyncResolverPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.property.functions">functions</a></code> | <code>string[]</code> | A list of ``Function`` objects. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.property.functions"></a>

```typescript
public readonly functions: string[];
```

- *Type:* string[]

A list of ``Function`` objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#functions AppsyncResolver#functions}

---

### AppsyncResolverRuntime <a name="AppsyncResolverRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

const appsyncResolverRuntime: appsyncResolver.AppsyncResolverRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.name">name</a></code> | <code>string</code> | The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#name AppsyncResolver#name}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#runtime_version AppsyncResolver#runtime_version}

---

### AppsyncResolverSyncConfig <a name="AppsyncResolverSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

const appsyncResolverSyncConfig: appsyncResolver.AppsyncResolverSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

The Conflict Detection strategy to use.

+  *VERSION*: Detect conflicts based on object versions for this resolver.
  +  *NONE*: Do not detect conflicts when invoking this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

The Conflict Resolution strategy to perform in the event of a conflict.

+  *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
  +  *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
  +  *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the ``LambdaConflictHandlerConfig``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

### AppsyncResolverSyncConfigLambdaConflictHandlerConfig <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

const appsyncResolverSyncConfigLambdaConflictHandlerConfig: appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncResolverCachingConfigOutputReference <a name="AppsyncResolverCachingConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

new appsyncResolver.AppsyncResolverCachingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys">resetCachingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCachingKeys` <a name="resetCachingKeys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys"></a>

```typescript
public resetCachingKeys(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput">cachingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys">cachingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachingKeysInput`<sup>Optional</sup> <a name="cachingKeysInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput"></a>

```typescript
public readonly cachingKeysInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `cachingKeys`<sup>Required</sup> <a name="cachingKeys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys"></a>

```typescript
public readonly cachingKeys: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncResolverCachingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---


### AppsyncResolverPipelineConfigOutputReference <a name="AppsyncResolverPipelineConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

new appsyncResolver.AppsyncResolverPipelineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions">resetFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctions` <a name="resetFunctions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions"></a>

```typescript
public resetFunctions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput">functionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions">functions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput"></a>

```typescript
public readonly functionsInput: string[];
```

- *Type:* string[]

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions"></a>

```typescript
public readonly functions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncResolverPipelineConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---


### AppsyncResolverRuntimeOutputReference <a name="AppsyncResolverRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

new appsyncResolver.AppsyncResolverRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncResolverRuntime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---


### AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

new appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```typescript
public resetLambdaConflictHandlerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```typescript
public readonly lambdaConflictHandlerArnInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncResolverSyncConfigOutputReference <a name="AppsyncResolverSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer"></a>

```typescript
import { appsyncResolver } from '@cdktn/provider-awscc'

new appsyncResolver.AppsyncResolverSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```typescript
public putLambdaConflictHandlerConfig(value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection"></a>

```typescript
public resetConflictDetection(): void
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler"></a>

```typescript
public resetConflictHandler(): void
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```typescript
public resetLambdaConflictHandlerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput"></a>

```typescript
public readonly conflictDetectionInput: string;
```

- *Type:* string

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput"></a>

```typescript
public readonly conflictHandlerInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```typescript
public readonly lambdaConflictHandlerConfigInput: IResolvable | AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncResolverSyncConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---



