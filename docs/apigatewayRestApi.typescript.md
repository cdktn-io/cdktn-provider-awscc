# `apigatewayRestApi` Submodule <a name="`apigatewayRestApi` Submodule" id="@cdktn/provider-awscc.apigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRestApi <a name="ApigatewayRestApi" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

new apigatewayRestApi.ApigatewayRestApi(scope: Construct, id: string, config?: ApigatewayRestApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig">ApigatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig">ApigatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location">putBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType">resetApiKeySourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes">resetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location">resetBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom">resetCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint">resetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode">resetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings">resetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize">resetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBodyS3Location` <a name="putBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location"></a>

```typescript
public putBodyS3Location(value: ApigatewayRestApiBodyS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: ApigatewayRestApiEndpointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags"></a>

```typescript
public putTags(value: IResolvable | ApigatewayRestApiTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

---

##### `resetApiKeySourceType` <a name="resetApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType"></a>

```typescript
public resetApiKeySourceType(): void
```

##### `resetBinaryMediaTypes` <a name="resetBinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes"></a>

```typescript
public resetBinaryMediaTypes(): void
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetBodyS3Location` <a name="resetBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location"></a>

```typescript
public resetBodyS3Location(): void
```

##### `resetCloneFrom` <a name="resetCloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom"></a>

```typescript
public resetCloneFrom(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableExecuteApiEndpoint` <a name="resetDisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```typescript
public resetDisableExecuteApiEndpoint(): void
```

##### `resetEndpointAccessMode` <a name="resetEndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode"></a>

```typescript
public resetEndpointAccessMode(): void
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration"></a>

```typescript
public resetEndpointConfiguration(): void
```

##### `resetFailOnWarnings` <a name="resetFailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings"></a>

```typescript
public resetFailOnWarnings(): void
```

##### `resetMinimumCompressionSize` <a name="resetMinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize"></a>

```typescript
public resetMinimumCompressionSize(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

apigatewayRestApi.ApigatewayRestApi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

apigatewayRestApi.ApigatewayRestApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

apigatewayRestApi.ApigatewayRestApi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

apigatewayRestApi.ApigatewayRestApi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayRestApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId">rootResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput">apiKeySourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput">binaryMediaTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput">bodyS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput">cloneFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput">disableExecuteApiEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput">endpointAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput">failOnWarningsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput">minimumCompressionSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType">apiKeySourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom">cloneFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode">endpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings">failOnWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bodyS3Location`<sup>Required</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location"></a>

```typescript
public readonly bodyS3Location: ApigatewayRestApiBodyS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApigatewayRestApiEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `rootResourceId`<sup>Required</sup> <a name="rootResourceId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId"></a>

```typescript
public readonly rootResourceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags"></a>

```typescript
public readonly tags: ApigatewayRestApiTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a>

---

##### `apiKeySourceTypeInput`<sup>Optional</sup> <a name="apiKeySourceTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput"></a>

```typescript
public readonly apiKeySourceTypeInput: string;
```

- *Type:* string

---

##### `binaryMediaTypesInput`<sup>Optional</sup> <a name="binaryMediaTypesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput"></a>

```typescript
public readonly binaryMediaTypesInput: string[];
```

- *Type:* string[]

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `bodyS3LocationInput`<sup>Optional</sup> <a name="bodyS3LocationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput"></a>

```typescript
public readonly bodyS3LocationInput: IResolvable | ApigatewayRestApiBodyS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `cloneFromInput`<sup>Optional</sup> <a name="cloneFromInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput"></a>

```typescript
public readonly cloneFromInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpointInput`<sup>Optional</sup> <a name="disableExecuteApiEndpointInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```typescript
public readonly disableExecuteApiEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointAccessModeInput`<sup>Optional</sup> <a name="endpointAccessModeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput"></a>

```typescript
public readonly endpointAccessModeInput: string;
```

- *Type:* string

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: IResolvable | ApigatewayRestApiEndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `failOnWarningsInput`<sup>Optional</sup> <a name="failOnWarningsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput"></a>

```typescript
public readonly failOnWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `minimumCompressionSizeInput`<sup>Optional</sup> <a name="minimumCompressionSizeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput"></a>

```typescript
public readonly minimumCompressionSizeInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApigatewayRestApiTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

---

##### `apiKeySourceType`<sup>Required</sup> <a name="apiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType"></a>

```typescript
public readonly apiKeySourceType: string;
```

- *Type:* string

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="binaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes"></a>

```typescript
public readonly binaryMediaTypes: string[];
```

- *Type:* string[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `cloneFrom`<sup>Required</sup> <a name="cloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom"></a>

```typescript
public readonly cloneFrom: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointAccessMode`<sup>Required</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode"></a>

```typescript
public readonly endpointAccessMode: string;
```

- *Type:* string

---

##### `failOnWarnings`<sup>Required</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings"></a>

```typescript
public readonly failOnWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="minimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize"></a>

```typescript
public readonly minimumCompressionSize: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRestApiBodyS3Location <a name="ApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

const apigatewayRestApiBodyS3Location: apigatewayRestApi.ApigatewayRestApiBodyS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket">bucket</a></code> | <code>string</code> | The name of the S3 bucket where the OpenAPI file is stored. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag">eTag</a></code> | <code>string</code> | The Amazon S3 ETag (a file checksum) of the OpenAPI file. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key">key</a></code> | <code>string</code> | The file name of the OpenAPI file (Amazon S3 object name). |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version">version</a></code> | <code>string</code> | For versioning-enabled buckets, a specific version of the OpenAPI file. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the S3 bucket where the OpenAPI file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#bucket ApigatewayRestApi#bucket}

---

##### `eTag`<sup>Optional</sup> <a name="eTag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

The Amazon S3 ETag (a file checksum) of the OpenAPI file.

If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#e_tag ApigatewayRestApi#e_tag}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The file name of the OpenAPI file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

For versioning-enabled buckets, a specific version of the OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#version ApigatewayRestApi#version}

---

### ApigatewayRestApiConfig <a name="ApigatewayRestApiConfig" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

const apigatewayRestApiConfig: apigatewayRestApi.ApigatewayRestApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType">apiKeySourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body">body</a></code> | <code>string</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom">cloneFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode">endpointAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings">failOnWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode">mode</a></code> | <code>string</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name">name</a></code> | <code>string</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy">policy</a></code> | <code>string</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiKeySourceType`<sup>Optional</sup> <a name="apiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType"></a>

```typescript
public readonly apiKeySourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="binaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes"></a>

```typescript
public readonly binaryMediaTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `bodyS3Location`<sup>Optional</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location"></a>

```typescript
public readonly bodyS3Location: ApigatewayRestApiBodyS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `cloneFrom`<sup>Optional</sup> <a name="cloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom"></a>

```typescript
public readonly cloneFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpointAccessMode`<sup>Optional</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode"></a>

```typescript
public readonly endpointAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApigatewayRestApiEndpointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the ``Parameters`` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings"></a>

```typescript
public readonly failOnWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="minimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize"></a>

```typescript
public readonly minimumCompressionSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

This property applies only when you use OpenAPI to define your REST API.

The ``Mode`` determines how API Gateway handles resource updates.
 Valid values are ``overwrite`` or ``merge``. 
 For ``overwrite``, the new API definition replaces the existing one. The existing API identifier remains unchanged.
  For ``merge``, the new API definition is merged with the existing API.
 If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is ``overwrite``. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API. 
 Use the default mode to define top-level ``RestApi`` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#mode ApigatewayRestApi#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the ``!Join`` intrinsic function with ``""`` as delimiter and values of ``"execute-api:/"`` and ``"*"``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApigatewayRestApiTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

### ApigatewayRestApiEndpointConfiguration <a name="ApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

const apigatewayRestApiEndpointConfiguration: apigatewayRestApi.ApigatewayRestApiEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types">types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}.

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}.

---

##### `vpcEndpointIds`<sup>Optional</sup> <a name="vpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```typescript
public readonly vpcEndpointIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}.

---

### ApigatewayRestApiTags <a name="ApigatewayRestApiTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

const apigatewayRestApiTags: apigatewayRestApi.ApigatewayRestApiTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key">key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#value ApigatewayRestApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRestApiBodyS3LocationOutputReference <a name="ApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

new apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag">resetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetETag` <a name="resetETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag"></a>

```typescript
public resetETag(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput">eTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag">eTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `eTagInput`<sup>Optional</sup> <a name="eTagInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput"></a>

```typescript
public readonly eTagInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRestApiBodyS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---


### ApigatewayRestApiEndpointConfigurationOutputReference <a name="ApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

new apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">resetVpcEndpointIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```

##### `resetVpcEndpointIds` <a name="resetVpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```typescript
public resetVpcEndpointIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">vpcEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIdsInput`<sup>Optional</sup> <a name="vpcEndpointIdsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```typescript
public readonly vpcEndpointIdsInput: string[];
```

- *Type:* string[]

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="vpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```typescript
public readonly vpcEndpointIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRestApiEndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---


### ApigatewayRestApiTagsList <a name="ApigatewayRestApiTagsList" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

new apigatewayRestApi.ApigatewayRestApiTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get"></a>

```typescript
public get(index: number): ApigatewayRestApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRestApiTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>[]

---


### ApigatewayRestApiTagsOutputReference <a name="ApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer"></a>

```typescript
import { apigatewayRestApi } from '@cdktn/provider-awscc'

new apigatewayRestApi.ApigatewayRestApiTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRestApiTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags">ApigatewayRestApiTags</a>

---



