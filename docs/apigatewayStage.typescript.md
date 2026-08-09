# `apigatewayStage` Submodule <a name="`apigatewayStage` Submodule" id="@cdktn/provider-awscc.apigatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayStage <a name="ApigatewayStage" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage awscc_apigateway_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStage(scope: Construct, id: string, config: ApigatewayStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig">ApigatewayStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig">ApigatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting">putAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting">putCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings">putMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetAccessLogSetting">resetAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterEnabled">resetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterSize">resetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCanarySetting">resetCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDocumentationVersion">resetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetMethodSettings">resetMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetStageName">resetStageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTracingEnabled">resetTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogSetting` <a name="putAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting"></a>

```typescript
public putAccessLogSetting(value: ApigatewayStageAccessLogSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---

##### `putCanarySetting` <a name="putCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting"></a>

```typescript
public putCanarySetting(value: ApigatewayStageCanarySetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---

##### `putMethodSettings` <a name="putMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings"></a>

```typescript
public putMethodSettings(value: IResolvable | ApigatewayStageMethodSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags"></a>

```typescript
public putTags(value: IResolvable | ApigatewayStageTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

---

##### `resetAccessLogSetting` <a name="resetAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetAccessLogSetting"></a>

```typescript
public resetAccessLogSetting(): void
```

##### `resetCacheClusterEnabled` <a name="resetCacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterEnabled"></a>

```typescript
public resetCacheClusterEnabled(): void
```

##### `resetCacheClusterSize` <a name="resetCacheClusterSize" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterSize"></a>

```typescript
public resetCacheClusterSize(): void
```

##### `resetCanarySetting` <a name="resetCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCanarySetting"></a>

```typescript
public resetCanarySetting(): void
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetClientCertificateId"></a>

```typescript
public resetClientCertificateId(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentationVersion` <a name="resetDocumentationVersion" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDocumentationVersion"></a>

```typescript
public resetDocumentationVersion(): void
```

##### `resetMethodSettings` <a name="resetMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetMethodSettings"></a>

```typescript
public resetMethodSettings(): void
```

##### `resetStageName` <a name="resetStageName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetStageName"></a>

```typescript
public resetStageName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTracingEnabled` <a name="resetTracingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTracingEnabled"></a>

```typescript
public resetTracingEnabled(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetVariables"></a>

```typescript
public resetVariables(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayStage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

apigatewayStage.ApigatewayStage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

apigatewayStage.ApigatewayStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

apigatewayStage.ApigatewayStage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

apigatewayStage.ApigatewayStage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference">ApigatewayStageAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference">ApigatewayStageCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettings">methodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList">ApigatewayStageMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList">ApigatewayStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSettingInput">accessLogSettingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabledInput">cacheClusterEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSizeInput">cacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySettingInput">canarySettingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersionInput">documentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettingsInput">methodSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabledInput">tracingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabled">tracingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessLogSetting`<sup>Required</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSetting"></a>

```typescript
public readonly accessLogSetting: ApigatewayStageAccessLogSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference">ApigatewayStageAccessLogSettingOutputReference</a>

---

##### `canarySetting`<sup>Required</sup> <a name="canarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySetting"></a>

```typescript
public readonly canarySetting: ApigatewayStageCanarySettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference">ApigatewayStageCanarySettingOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `methodSettings`<sup>Required</sup> <a name="methodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettings"></a>

```typescript
public readonly methodSettings: ApigatewayStageMethodSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList">ApigatewayStageMethodSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tags"></a>

```typescript
public readonly tags: ApigatewayStageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList">ApigatewayStageTagsList</a>

---

##### `accessLogSettingInput`<sup>Optional</sup> <a name="accessLogSettingInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSettingInput"></a>

```typescript
public readonly accessLogSettingInput: IResolvable | ApigatewayStageAccessLogSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---

##### `cacheClusterEnabledInput`<sup>Optional</sup> <a name="cacheClusterEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabledInput"></a>

```typescript
public readonly cacheClusterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheClusterSizeInput`<sup>Optional</sup> <a name="cacheClusterSizeInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSizeInput"></a>

```typescript
public readonly cacheClusterSizeInput: string;
```

- *Type:* string

---

##### `canarySettingInput`<sup>Optional</sup> <a name="canarySettingInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySettingInput"></a>

```typescript
public readonly canarySettingInput: IResolvable | ApigatewayStageCanarySetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateIdInput"></a>

```typescript
public readonly clientCertificateIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentationVersionInput`<sup>Optional</sup> <a name="documentationVersionInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersionInput"></a>

```typescript
public readonly documentationVersionInput: string;
```

- *Type:* string

---

##### `methodSettingsInput`<sup>Optional</sup> <a name="methodSettingsInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettingsInput"></a>

```typescript
public readonly methodSettingsInput: IResolvable | ApigatewayStageMethodSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApigatewayStageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

---

##### `tracingEnabledInput`<sup>Optional</sup> <a name="tracingEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabledInput"></a>

```typescript
public readonly tracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

##### `tracingEnabled`<sup>Required</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayStageAccessLogSetting <a name="ApigatewayStageAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

const apigatewayStageAccessLogSetting: apigatewayStage.ApigatewayStageAccessLogSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.destinationArn">destinationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.format">format</a></code> | <code>string</code> | A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs.

If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with ``amazon-apigateway-``. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#destination_arn ApigatewayStage#destination_arn}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#format ApigatewayStage#format}

---

### ApigatewayStageCanarySetting <a name="ApigatewayStageCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

const apigatewayStageCanarySetting: apigatewayStage.ApigatewayStageCanarySetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}. |

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}.

---

### ApigatewayStageConfig <a name="ApigatewayStageConfig" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

const apigatewayStageConfig: apigatewayStage.ApigatewayStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | The ``AccessLogSetting`` property type specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#description ApigatewayStage#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.methodSettings">methodSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tracingEnabled">tracingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}.

---

##### `accessLogSetting`<sup>Optional</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.accessLogSetting"></a>

```typescript
public readonly accessLogSetting: ApigatewayStageAccessLogSetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

The ``AccessLogSetting`` property type specifies settings for logging access in this stage.

``AccessLogSetting`` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#access_log_setting ApigatewayStage#access_log_setting}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}.

---

##### `canarySetting`<sup>Optional</sup> <a name="canarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.canarySetting"></a>

```typescript
public readonly canarySetting: ApigatewayStageCanarySetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}.

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#description ApigatewayStage#description}.

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}.

---

##### `methodSettings`<sup>Optional</sup> <a name="methodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.methodSettings"></a>

```typescript
public readonly methodSettings: IResolvable | ApigatewayStageMethodSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApigatewayStageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}.

---

##### `tracingEnabled`<sup>Optional</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value.

Variable names are limited to alphanumeric characters. Values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#variables ApigatewayStage#variables}

---

### ApigatewayStageMethodSettings <a name="ApigatewayStageMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

const apigatewayStageMethodSettings: apigatewayStage.ApigatewayStageMethodSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_data_encrypted ApigatewayStage#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_ttl_in_seconds ApigatewayStage#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#caching_enabled ApigatewayStage#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#data_trace_enabled ApigatewayStage#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#logging_level ApigatewayStage#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#metrics_enabled ApigatewayStage#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.resourcePath">resourcePath</a></code> | <code>string</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_burst_limit ApigatewayStage#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_rate_limit ApigatewayStage#throttling_rate_limit}. |

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_data_encrypted ApigatewayStage#cache_data_encrypted}.

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_ttl_in_seconds ApigatewayStage#cache_ttl_in_seconds}.

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#caching_enabled ApigatewayStage#caching_enabled}.

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#data_trace_enabled ApigatewayStage#data_trace_enabled}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method.

To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#http_method ApigatewayStage#http_method}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#logging_level ApigatewayStage#logging_level}.

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#metrics_enabled ApigatewayStage#metrics_enabled}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The resource path for this method.

Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``). To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#resource_path ApigatewayStage#resource_path}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_burst_limit ApigatewayStage#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_rate_limit ApigatewayStage#throttling_rate_limit}.

---

### ApigatewayStageTags <a name="ApigatewayStageTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

const apigatewayStageTags: apigatewayStage.ApigatewayStageTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.key">key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#key ApigatewayStage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#value ApigatewayStage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayStageAccessLogSettingOutputReference <a name="ApigatewayStageAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStageAccessLogSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetDestinationArn"></a>

```typescript
public resetDestinationArn(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayStageAccessLogSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---


### ApigatewayStageCanarySettingOutputReference <a name="ApigatewayStageCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStageCanarySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetPercentTraffic"></a>

```typescript
public resetPercentTraffic(): void
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetStageVariableOverrides"></a>

```typescript
public resetStageVariableOverrides(): void
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetUseStageCache"></a>

```typescript
public resetUseStageCache(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTrafficInput"></a>

```typescript
public readonly percentTrafficInput: number;
```

- *Type:* number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```typescript
public readonly stageVariableOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCacheInput"></a>

```typescript
public readonly useStageCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayStageCanarySetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---


### ApigatewayStageMethodSettingsList <a name="ApigatewayStageMethodSettingsList" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStageMethodSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get"></a>

```typescript
public get(index: number): ApigatewayStageMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayStageMethodSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

---


### ApigatewayStageMethodSettingsOutputReference <a name="ApigatewayStageMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStageMethodSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```typescript
public resetCacheDataEncrypted(): void
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```typescript
public resetCacheTtlInSeconds(): void
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCachingEnabled"></a>

```typescript
public resetCachingEnabled(): void
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```typescript
public resetDataTraceEnabled(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetMetricsEnabled"></a>

```typescript
public resetMetricsEnabled(): void
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetResourcePath"></a>

```typescript
public resetResourcePath(): void
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```typescript
public resetThrottlingBurstLimit(): void
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```typescript
public resetThrottlingRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```typescript
public readonly cacheDataEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```typescript
public readonly cacheTtlInSecondsInput: number;
```

- *Type:* number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```typescript
public readonly cachingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```typescript
public readonly dataTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```typescript
public readonly metricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePathInput"></a>

```typescript
public readonly resourcePathInput: string;
```

- *Type:* string

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```typescript
public readonly throttlingBurstLimitInput: number;
```

- *Type:* number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```typescript
public readonly throttlingRateLimitInput: number;
```

- *Type:* number

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```typescript
public readonly cacheDataEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```typescript
public readonly cacheTtlInSeconds: number;
```

- *Type:* number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabled"></a>

```typescript
public readonly cachingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayStageMethodSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>

---


### ApigatewayStageTagsList <a name="ApigatewayStageTagsList" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get"></a>

```typescript
public get(index: number): ApigatewayStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayStageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

---


### ApigatewayStageTagsOutputReference <a name="ApigatewayStageTagsOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer"></a>

```typescript
import { apigatewayStage } from '@cdktn/provider-awscc'

new apigatewayStage.ApigatewayStageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayStageTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>

---



