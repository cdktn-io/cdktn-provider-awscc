# `appsyncGraphQlApi` Submodule <a name="`appsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.appsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphQlApi <a name="AppsyncGraphQlApi" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApi(scope: Construct, id: string, config: AppsyncGraphQlApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig">AppsyncGraphQlApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig">AppsyncGraphQlApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders">putAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig">putEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig">putOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders">resetAdditionalAuthenticationProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType">resetApiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig">resetEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig">resetIntrospectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn">resetMergedApiExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig">resetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact">resetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit">resetQueryDepthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit">resetResolverCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled">resetXrayEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAuthenticationProviders` <a name="putAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders"></a>

```typescript
public putAdditionalAuthenticationProviders(value: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProviders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putAdditionalAuthenticationProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

---

##### `putEnhancedMetricsConfig` <a name="putEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig"></a>

```typescript
public putEnhancedMetricsConfig(value: AppsyncGraphQlApiEnhancedMetricsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putEnhancedMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig"></a>

```typescript
public putLambdaAuthorizerConfig(value: AppsyncGraphQlApiLambdaAuthorizerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig"></a>

```typescript
public putLogConfig(value: AppsyncGraphQlApiLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `putOpenIdConnectConfig` <a name="putOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig"></a>

```typescript
public putOpenIdConnectConfig(value: AppsyncGraphQlApiOpenIdConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags"></a>

```typescript
public putTags(value: IResolvable | AppsyncGraphQlApiTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig"></a>

```typescript
public putUserPoolConfig(value: AppsyncGraphQlApiUserPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `resetAdditionalAuthenticationProviders` <a name="resetAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetAdditionalAuthenticationProviders"></a>

```typescript
public resetAdditionalAuthenticationProviders(): void
```

##### `resetApiType` <a name="resetApiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetApiType"></a>

```typescript
public resetApiType(): void
```

##### `resetEnhancedMetricsConfig` <a name="resetEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnhancedMetricsConfig"></a>

```typescript
public resetEnhancedMetricsConfig(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetIntrospectionConfig` <a name="resetIntrospectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetIntrospectionConfig"></a>

```typescript
public resetIntrospectionConfig(): void
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLambdaAuthorizerConfig"></a>

```typescript
public resetLambdaAuthorizerConfig(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetMergedApiExecutionRoleArn` <a name="resetMergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetMergedApiExecutionRoleArn"></a>

```typescript
public resetMergedApiExecutionRoleArn(): void
```

##### `resetOpenIdConnectConfig` <a name="resetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOpenIdConnectConfig"></a>

```typescript
public resetOpenIdConnectConfig(): void
```

##### `resetOwnerContact` <a name="resetOwnerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetOwnerContact"></a>

```typescript
public resetOwnerContact(): void
```

##### `resetQueryDepthLimit` <a name="resetQueryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetQueryDepthLimit"></a>

```typescript
public resetQueryDepthLimit(): void
```

##### `resetResolverCountLimit` <a name="resetResolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetResolverCountLimit"></a>

```typescript
public resetResolverCountLimit(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetUserPoolConfig"></a>

```typescript
public resetUserPoolConfig(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetXrayEnabled` <a name="resetXrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.resetXrayEnabled"></a>

```typescript
public resetXrayEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncGraphQlApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders">additionalAuthenticationProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns">graphQlDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn">graphQlEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl">graphQlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns">realtimeDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl">realtimeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput">additionalAuthenticationProvidersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput">apiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput">enhancedMetricsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput">introspectionConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput">logConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput">mergedApiExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput">openIdConnectConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput">ownerContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput">queryDepthLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput">resolverCountLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput">xrayEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig">introspectionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact">ownerContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit">queryDepthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit">resolverCountLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled">xrayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalAuthenticationProviders`<sup>Required</sup> <a name="additionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```typescript
public readonly additionalAuthenticationProviders: AppsyncGraphQlApiAdditionalAuthenticationProvidersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList">AppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `enhancedMetricsConfig`<sup>Required</sup> <a name="enhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```typescript
public readonly enhancedMetricsConfig: AppsyncGraphQlApiEnhancedMetricsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference">AppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `graphQlDns`<sup>Required</sup> <a name="graphQlDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlDns"></a>

```typescript
public readonly graphQlDns: string;
```

- *Type:* string

---

##### `graphQlEndpointArn`<sup>Required</sup> <a name="graphQlEndpointArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```typescript
public readonly graphQlEndpointArn: string;
```

- *Type:* string

---

##### `graphQlUrl`<sup>Required</sup> <a name="graphQlUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.graphQlUrl"></a>

```typescript
public readonly graphQlUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfig"></a>

```typescript
public readonly logConfig: AppsyncGraphQlApiLogConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference">AppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfig"></a>

```typescript
public readonly openIdConnectConfig: AppsyncGraphQlApiOpenIdConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference">AppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `realtimeDns`<sup>Required</sup> <a name="realtimeDns" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeDns"></a>

```typescript
public readonly realtimeDns: string;
```

- *Type:* string

---

##### `realtimeUrl`<sup>Required</sup> <a name="realtimeUrl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.realtimeUrl"></a>

```typescript
public readonly realtimeUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tags"></a>

```typescript
public readonly tags: AppsyncGraphQlApiTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList">AppsyncGraphQlApiTagsList</a>

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphQlApiUserPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference">AppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `additionalAuthenticationProvidersInput`<sup>Optional</sup> <a name="additionalAuthenticationProvidersInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.additionalAuthenticationProvidersInput"></a>

```typescript
public readonly additionalAuthenticationProvidersInput: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

---

##### `apiTypeInput`<sup>Optional</sup> <a name="apiTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiTypeInput"></a>

```typescript
public readonly apiTypeInput: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `enhancedMetricsConfigInput`<sup>Optional</sup> <a name="enhancedMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.enhancedMetricsConfigInput"></a>

```typescript
public readonly enhancedMetricsConfigInput: IResolvable | AppsyncGraphQlApiEnhancedMetricsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `introspectionConfigInput`<sup>Optional</sup> <a name="introspectionConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfigInput"></a>

```typescript
public readonly introspectionConfigInput: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.lambdaAuthorizerConfigInput"></a>

```typescript
public readonly lambdaAuthorizerConfigInput: IResolvable | AppsyncGraphQlApiLambdaAuthorizerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: IResolvable | AppsyncGraphQlApiLogConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---

##### `mergedApiExecutionRoleArnInput`<sup>Optional</sup> <a name="mergedApiExecutionRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArnInput"></a>

```typescript
public readonly mergedApiExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openIdConnectConfigInput`<sup>Optional</sup> <a name="openIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.openIdConnectConfigInput"></a>

```typescript
public readonly openIdConnectConfigInput: IResolvable | AppsyncGraphQlApiOpenIdConnectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---

##### `ownerContactInput`<sup>Optional</sup> <a name="ownerContactInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContactInput"></a>

```typescript
public readonly ownerContactInput: string;
```

- *Type:* string

---

##### `queryDepthLimitInput`<sup>Optional</sup> <a name="queryDepthLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimitInput"></a>

```typescript
public readonly queryDepthLimitInput: number;
```

- *Type:* number

---

##### `resolverCountLimitInput`<sup>Optional</sup> <a name="resolverCountLimitInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimitInput"></a>

```typescript
public readonly resolverCountLimitInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppsyncGraphQlApiTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.userPoolConfigInput"></a>

```typescript
public readonly userPoolConfigInput: IResolvable | AppsyncGraphQlApiUserPoolConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `xrayEnabledInput`<sup>Optional</sup> <a name="xrayEnabledInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabledInput"></a>

```typescript
public readonly xrayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `introspectionConfig`<sup>Required</sup> <a name="introspectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.introspectionConfig"></a>

```typescript
public readonly introspectionConfig: string;
```

- *Type:* string

---

##### `mergedApiExecutionRoleArn`<sup>Required</sup> <a name="mergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```typescript
public readonly mergedApiExecutionRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerContact`<sup>Required</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.ownerContact"></a>

```typescript
public readonly ownerContact: string;
```

- *Type:* string

---

##### `queryDepthLimit`<sup>Required</sup> <a name="queryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.queryDepthLimit"></a>

```typescript
public readonly queryDepthLimit: number;
```

- *Type:* number

---

##### `resolverCountLimit`<sup>Required</sup> <a name="resolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.resolverCountLimit"></a>

```typescript
public readonly resolverCountLimit: number;
```

- *Type:* number

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `xrayEnabled`<sup>Required</sup> <a name="xrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.xrayEnabled"></a>

```typescript
public readonly xrayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProviders <a name="AppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiAdditionalAuthenticationProviders: appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType">authenticationType</a></code> | <code>string</code> | The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}.

---

##### `openIdConnectConfig`<sup>Optional</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.openIdConnectConfig"></a>

```typescript
public readonly openIdConnectConfig: AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}.

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}.

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig: appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig: appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl">authTtl</a></code> | <code>number</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId">clientId</a></code> | <code>string</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl">iatTtl</a></code> | <code>number</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>string</code> | The issuer for the OIDC configuration. |

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig: appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | The user pool ID. |

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `userPoolId`<sup>Optional</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

### AppsyncGraphQlApiConfig <a name="AppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiConfig: appsyncGraphQlApi.AppsyncGraphQlApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Security configuration for your GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name">name</a></code> | <code>string</code> | The API name. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders">additionalAuthenticationProviders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]</code> | A list of additional authentication providers for the GraphqlApi API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType">apiType</a></code> | <code>string</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | Enables and controls the enhanced metrics feature. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | A map containing the list of resources with their properties and environment variables. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig">introspectionConfig</a></code> | <code>string</code> | Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | The Amazon CloudWatch Logs configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>string</code> | The AWS Identity and Access Management service role ARN for a merged API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact">ownerContact</a></code> | <code>string</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit">queryDepthLimit</a></code> | <code>number</code> | The maximum depth a query can have in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit">resolverCountLimit</a></code> | <code>number</code> | The maximum number of resolvers that can be invoked in a single request. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this GraphQL API. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility">visibility</a></code> | <code>string</code> | Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled">xrayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Security configuration for your GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authentication_type AppsyncGraphQlApi#authentication_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The API name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#name AppsyncGraphQlApi#name}

---

##### `additionalAuthenticationProviders`<sup>Optional</sup> <a name="additionalAuthenticationProviders" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.additionalAuthenticationProviders"></a>

```typescript
public readonly additionalAuthenticationProviders: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

A list of additional authentication providers for the GraphqlApi API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#additional_authentication_providers AppsyncGraphQlApi#additional_authentication_providers}

---

##### `apiType`<sup>Optional</sup> <a name="apiType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#api_type AppsyncGraphQlApi#api_type}

---

##### `enhancedMetricsConfig`<sup>Optional</sup> <a name="enhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.enhancedMetricsConfig"></a>

```typescript
public readonly enhancedMetricsConfig: AppsyncGraphQlApiEnhancedMetricsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

Enables and controls the enhanced metrics feature.

Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#enhanced_metrics_config AppsyncGraphQlApi#enhanced_metrics_config}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map containing the list of resources with their properties and environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#environment_variables AppsyncGraphQlApi#environment_variables}

---

##### `introspectionConfig`<sup>Optional</sup> <a name="introspectionConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.introspectionConfig"></a>

```typescript
public readonly introspectionConfig: string;
```

- *Type:* string

Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection.

If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#introspection_config AppsyncGraphQlApi#introspection_config}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphQlApiLambdaAuthorizerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#lambda_authorizer_config AppsyncGraphQlApi#lambda_authorizer_config}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.logConfig"></a>

```typescript
public readonly logConfig: AppsyncGraphQlApiLogConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

The Amazon CloudWatch Logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#log_config AppsyncGraphQlApi#log_config}

---

##### `mergedApiExecutionRoleArn`<sup>Optional</sup> <a name="mergedApiExecutionRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.mergedApiExecutionRoleArn"></a>

```typescript
public readonly mergedApiExecutionRoleArn: string;
```

- *Type:* string

The AWS Identity and Access Management service role ARN for a merged API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn AppsyncGraphQlApi#merged_api_execution_role_arn}

---

##### `openIdConnectConfig`<sup>Optional</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.openIdConnectConfig"></a>

```typescript
public readonly openIdConnectConfig: AppsyncGraphQlApiOpenIdConnectConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#open_id_connect_config AppsyncGraphQlApi#open_id_connect_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.ownerContact"></a>

```typescript
public readonly ownerContact: string;
```

- *Type:* string

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#owner_contact AppsyncGraphQlApi#owner_contact}

---

##### `queryDepthLimit`<sup>Optional</sup> <a name="queryDepthLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.queryDepthLimit"></a>

```typescript
public readonly queryDepthLimit: number;
```

- *Type:* number

The maximum depth a query can have in a single request.

Depth refers to the amount of nested levels allowed in the body of query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#query_depth_limit AppsyncGraphQlApi#query_depth_limit}

---

##### `resolverCountLimit`<sup>Optional</sup> <a name="resolverCountLimit" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.resolverCountLimit"></a>

```typescript
public readonly resolverCountLimit: number;
```

- *Type:* number

The maximum number of resolvers that can be invoked in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_count_limit AppsyncGraphQlApi#resolver_count_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppsyncGraphQlApiTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

An arbitrary set of tags (key-value pairs) for this GraphQL API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#tags AppsyncGraphQlApi#tags}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphQlApiUserPoolConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_config AppsyncGraphQlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE).

By default, the scope is set to Global if no value is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#visibility AppsyncGraphQlApi#visibility}

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiConfig.property.xrayEnabled"></a>

```typescript
public readonly xrayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#xray_enabled AppsyncGraphQlApi#xray_enabled}

---

### AppsyncGraphQlApiEnhancedMetricsConfig <a name="AppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiEnhancedMetricsConfig: appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior">dataSourceLevelMetricsBehavior</a></code> | <code>string</code> | Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig">operationLevelMetricsConfig</a></code> | <code>string</code> | Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior">resolverLevelMetricsBehavior</a></code> | <code>string</code> | Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:. |

---

##### `dataSourceLevelMetricsBehavior`<sup>Optional</sup> <a name="dataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior"></a>

```typescript
public readonly dataSourceLevelMetricsBehavior: string;
```

- *Type:* string

Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior AppsyncGraphQlApi#data_source_level_metrics_behavior}

---

##### `operationLevelMetricsConfig`<sup>Optional</sup> <a name="operationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig"></a>

```typescript
public readonly operationLevelMetricsConfig: string;
```

- *Type:* string

Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#operation_level_metrics_config AppsyncGraphQlApi#operation_level_metrics_config}

---

##### `resolverLevelMetricsBehavior`<sup>Optional</sup> <a name="resolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior"></a>

```typescript
public readonly resolverLevelMetricsBehavior: string;
```

- *Type:* string

Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior AppsyncGraphQlApi#resolver_level_metrics_behavior}

---

### AppsyncGraphQlApiLambdaAuthorizerConfig <a name="AppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiLambdaAuthorizerConfig: appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | The number of seconds a response should be cached for. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | The ARN of the Lambda function to be called for authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | A regular expression for validation of tokens before the Lambda function is called. |

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

The number of seconds a response should be cached for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds AppsyncGraphQlApi#authorizer_result_ttl_in_seconds}

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

The ARN of the Lambda function to be called for authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#authorizer_uri AppsyncGraphQlApi#authorizer_uri}

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

A regular expression for validation of tokens before the Lambda function is called.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#identity_validation_expression AppsyncGraphQlApi#identity_validation_expression}

---

### AppsyncGraphQlApiLogConfig <a name="AppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiLogConfig: appsyncGraphQlApi.AppsyncGraphQlApiLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>string</code> | The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel">fieldLogLevel</a></code> | <code>string</code> | The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL. |

---

##### `cloudwatchLogsRoleArn`<sup>Optional</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```typescript
public readonly cloudwatchLogsRoleArn: string;
```

- *Type:* string

The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn AppsyncGraphQlApi#cloudwatch_logs_role_arn}

---

##### `excludeVerboseContent`<sup>Optional</sup> <a name="excludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.excludeVerboseContent"></a>

```typescript
public readonly excludeVerboseContent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#exclude_verbose_content AppsyncGraphQlApi#exclude_verbose_content}

---

##### `fieldLogLevel`<sup>Optional</sup> <a name="fieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig.property.fieldLogLevel"></a>

```typescript
public readonly fieldLogLevel: string;
```

- *Type:* string

The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#field_log_level AppsyncGraphQlApi#field_log_level}

---

### AppsyncGraphQlApiOpenIdConnectConfig <a name="AppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiOpenIdConnectConfig: appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl">authTtl</a></code> | <code>number</code> | The number of milliseconds that a token is valid after being authenticated. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId">clientId</a></code> | <code>string</code> | The client identifier of the Relying party at the OpenID identity provider. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl">iatTtl</a></code> | <code>number</code> | The number of milliseconds that a token is valid after it's issued to a user. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer">issuer</a></code> | <code>string</code> | The issuer for the OIDC configuration. |

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

The number of milliseconds that a token is valid after being authenticated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#auth_ttl AppsyncGraphQlApi#auth_ttl}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client identifier of the Relying party at the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#client_id AppsyncGraphQlApi#client_id}

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

The number of milliseconds that a token is valid after it's issued to a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#iat_ttl AppsyncGraphQlApi#iat_ttl}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The issuer for the OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#issuer AppsyncGraphQlApi#issuer}

---

### AppsyncGraphQlApiTags <a name="AppsyncGraphQlApiTags" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiTags: appsyncGraphQlApi.AppsyncGraphQlApiTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#key AppsyncGraphQlApi#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#value AppsyncGraphQlApi#value}.

---

### AppsyncGraphQlApiUserPoolConfig <a name="AppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

const appsyncGraphQlApiUserPoolConfig: appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | A regular expression for validating the incoming Amazon Cognito user pool app client ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region in which the user pool was created. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction">defaultAction</a></code> | <code>string</code> | The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | The user pool ID. |

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

A regular expression for validating the incoming Amazon Cognito user pool app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#app_id_client_regex AppsyncGraphQlApi#app_id_client_regex}

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region in which the user pool was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#aws_region AppsyncGraphQlApi#aws_region}

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#default_action AppsyncGraphQlApi#default_action}

---

##### `userPoolId`<sup>Optional</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The user pool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appsync_graph_ql_api#user_pool_id AppsyncGraphQlApi#user_pool_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```typescript
public resetAuthorizerResultTtlInSeconds(): void
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```typescript
public resetAuthorizerUri(): void
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```typescript
public resetIdentityValidationExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```typescript
public readonly authorizerResultTtlInSecondsInput: number;
```

- *Type:* number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```typescript
public readonly authorizerUriInput: string;
```

- *Type:* string

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```typescript
public readonly identityValidationExpressionInput: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```typescript
public get(index: number): AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>[]

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```typescript
public resetAuthTtl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```typescript
public resetIatTtl(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```typescript
public readonly authTtlInput: number;
```

- *Type:* number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```typescript
public readonly iatTtlInput: number;
```

- *Type:* number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig">putOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig">resetOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```typescript
public putLambdaAuthorizerConfig(value: AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `putOpenIdConnectConfig` <a name="putOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig"></a>

```typescript
public putOpenIdConnectConfig(value: AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig"></a>

```typescript
public putUserPoolConfig(value: AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```typescript
public resetLambdaAuthorizerConfig(): void
```

##### `resetOpenIdConnectConfig` <a name="resetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetOpenIdConnectConfig"></a>

```typescript
public resetOpenIdConnectConfig(): void
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resetUserPoolConfig"></a>

```typescript
public resetUserPoolConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">openIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput">openIdConnectConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```typescript
public readonly lambdaAuthorizerConfig: AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `openIdConnectConfig`<sup>Required</sup> <a name="openIdConnectConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```typescript
public readonly openIdConnectConfig: AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```typescript
public readonly userPoolConfig: AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```typescript
public readonly lambdaAuthorizerConfigInput: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---

##### `openIdConnectConfigInput`<sup>Optional</sup> <a name="openIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfigInput"></a>

```typescript
public readonly openIdConnectConfigInput: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfigInput"></a>

```typescript
public readonly userPoolConfigInput: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProviders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProviders">AppsyncGraphQlApiAdditionalAuthenticationProviders</a>

---


### AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId">resetUserPoolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```typescript
public resetAppIdClientRegex(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetUserPoolId` <a name="resetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resetUserPoolId"></a>

```typescript
public resetUserPoolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```typescript
public readonly appIdClientRegexInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">AppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---


### AppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="AppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior">resetDataSourceLevelMetricsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig">resetOperationLevelMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior">resetResolverLevelMetricsBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceLevelMetricsBehavior` <a name="resetDataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetDataSourceLevelMetricsBehavior"></a>

```typescript
public resetDataSourceLevelMetricsBehavior(): void
```

##### `resetOperationLevelMetricsConfig` <a name="resetOperationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetOperationLevelMetricsConfig"></a>

```typescript
public resetOperationLevelMetricsConfig(): void
```

##### `resetResolverLevelMetricsBehavior` <a name="resetResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resetResolverLevelMetricsBehavior"></a>

```typescript
public resetResolverLevelMetricsBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput">dataSourceLevelMetricsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput">operationLevelMetricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput">resolverLevelMetricsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">dataSourceLevelMetricsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">operationLevelMetricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">resolverLevelMetricsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="dataSourceLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput"></a>

```typescript
public readonly dataSourceLevelMetricsBehaviorInput: string;
```

- *Type:* string

---

##### `operationLevelMetricsConfigInput`<sup>Optional</sup> <a name="operationLevelMetricsConfigInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput"></a>

```typescript
public readonly operationLevelMetricsConfigInput: string;
```

- *Type:* string

---

##### `resolverLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="resolverLevelMetricsBehaviorInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput"></a>

```typescript
public readonly resolverLevelMetricsBehaviorInput: string;
```

- *Type:* string

---

##### `dataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="dataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```typescript
public readonly dataSourceLevelMetricsBehavior: string;
```

- *Type:* string

---

##### `operationLevelMetricsConfig`<sup>Required</sup> <a name="operationLevelMetricsConfig" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```typescript
public readonly operationLevelMetricsConfig: string;
```

- *Type:* string

---

##### `resolverLevelMetricsBehavior`<sup>Required</sup> <a name="resolverLevelMetricsBehavior" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```typescript
public readonly resolverLevelMetricsBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiEnhancedMetricsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiEnhancedMetricsConfig">AppsyncGraphQlApiEnhancedMetricsConfig</a>

---


### AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```typescript
public resetAuthorizerResultTtlInSeconds(): void
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```typescript
public resetAuthorizerUri(): void
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```typescript
public resetIdentityValidationExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```typescript
public readonly authorizerResultTtlInSecondsInput: number;
```

- *Type:* number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```typescript
public readonly authorizerUriInput: string;
```

- *Type:* string

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```typescript
public readonly identityValidationExpressionInput: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiLambdaAuthorizerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLambdaAuthorizerConfig">AppsyncGraphQlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphQlApiLogConfigOutputReference <a name="AppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn">resetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent">resetExcludeVerboseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel">resetFieldLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsRoleArn` <a name="resetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```typescript
public resetCloudwatchLogsRoleArn(): void
```

##### `resetExcludeVerboseContent` <a name="resetExcludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```typescript
public resetExcludeVerboseContent(): void
```

##### `resetFieldLogLevel` <a name="resetFieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.resetFieldLogLevel"></a>

```typescript
public resetFieldLogLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput">excludeVerboseContentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput">fieldLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">fieldLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```typescript
public readonly cloudwatchLogsRoleArnInput: string;
```

- *Type:* string

---

##### `excludeVerboseContentInput`<sup>Optional</sup> <a name="excludeVerboseContentInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```typescript
public readonly excludeVerboseContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fieldLogLevelInput`<sup>Optional</sup> <a name="fieldLogLevelInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```typescript
public readonly fieldLogLevelInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```typescript
public readonly cloudwatchLogsRoleArn: string;
```

- *Type:* string

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="excludeVerboseContent" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```typescript
public readonly excludeVerboseContent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fieldLogLevel`<sup>Required</sup> <a name="fieldLogLevel" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```typescript
public readonly fieldLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiLogConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiLogConfig">AppsyncGraphQlApiLogConfig</a>

---


### AppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="AppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```typescript
public resetAuthTtl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```typescript
public resetIatTtl(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```typescript
public readonly authTtlInput: number;
```

- *Type:* number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```typescript
public readonly iatTtlInput: number;
```

- *Type:* number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```typescript
public readonly authTtl: number;
```

- *Type:* number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```typescript
public readonly iatTtl: number;
```

- *Type:* number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiOpenIdConnectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiOpenIdConnectConfig">AppsyncGraphQlApiOpenIdConnectConfig</a>

---


### AppsyncGraphQlApiTagsList <a name="AppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get"></a>

```typescript
public get(index: number): AppsyncGraphQlApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>[]

---


### AppsyncGraphQlApiTagsOutputReference <a name="AppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiTags">AppsyncGraphQlApiTags</a>

---


### AppsyncGraphQlApiUserPoolConfigOutputReference <a name="AppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```typescript
import { appsyncGraphQlApi } from '@cdktn/provider-awscc'

new appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId">resetUserPoolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```typescript
public resetAppIdClientRegex(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetDefaultAction"></a>

```typescript
public resetDefaultAction(): void
```

##### `resetUserPoolId` <a name="resetUserPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.resetUserPoolId"></a>

```typescript
public resetUserPoolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```typescript
public readonly appIdClientRegexInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```typescript
public readonly appIdClientRegex: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsyncGraphQlApiUserPoolConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncGraphQlApi.AppsyncGraphQlApiUserPoolConfig">AppsyncGraphQlApiUserPoolConfig</a>

---



