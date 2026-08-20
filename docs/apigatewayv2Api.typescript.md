# `apigatewayv2Api` Submodule <a name="`apigatewayv2Api` Submodule" id="@cdktn/provider-awscc.apigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Api <a name="Apigatewayv2Api" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api awscc_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

new apigatewayv2Api.Apigatewayv2Api(scope: Construct, id: string, config?: Apigatewayv2ApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig">Apigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig">Apigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putBodyS3Location">putBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration">putCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression">resetApiKeySelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBodyS3Location">resetBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration">resetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn">resetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint">resetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableSchemaValidation">resetDisableSchemaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings">resetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteKey">resetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression">resetRouteSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBodyS3Location` <a name="putBodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putBodyS3Location"></a>

```typescript
public putBodyS3Location(value: Apigatewayv2ApiBodyS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putBodyS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

---

##### `putCorsConfiguration` <a name="putCorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration"></a>

```typescript
public putCorsConfiguration(value: Apigatewayv2ApiCorsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `resetApiKeySelectionExpression` <a name="resetApiKeySelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression"></a>

```typescript
public resetApiKeySelectionExpression(): void
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBasePath"></a>

```typescript
public resetBasePath(): void
```

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetBodyS3Location` <a name="resetBodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetBodyS3Location"></a>

```typescript
public resetBodyS3Location(): void
```

##### `resetCorsConfiguration` <a name="resetCorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration"></a>

```typescript
public resetCorsConfiguration(): void
```

##### `resetCredentialsArn` <a name="resetCredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn"></a>

```typescript
public resetCredentialsArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableExecuteApiEndpoint` <a name="resetDisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint"></a>

```typescript
public resetDisableExecuteApiEndpoint(): void
```

##### `resetDisableSchemaValidation` <a name="resetDisableSchemaValidation" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetDisableSchemaValidation"></a>

```typescript
public resetDisableSchemaValidation(): void
```

##### `resetFailOnWarnings` <a name="resetFailOnWarnings" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings"></a>

```typescript
public resetFailOnWarnings(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetRouteKey` <a name="resetRouteKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteKey"></a>

```typescript
public resetRouteKey(): void
```

##### `resetRouteSelectionExpression` <a name="resetRouteSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression"></a>

```typescript
public resetRouteSelectionExpression(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Api resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isConstruct"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

apigatewayv2Api.Apigatewayv2Api.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformElement"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

apigatewayv2Api.Apigatewayv2Api.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformResource"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

apigatewayv2Api.Apigatewayv2Api.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

apigatewayv2Api.Apigatewayv2Api.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Apigatewayv2Api resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2Api to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2Api that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Api to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference">Apigatewayv2ApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput">apiKeySelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePathInput">basePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3LocationInput">bodyS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput">corsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput">credentialsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput">disableExecuteApiEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidationInput">disableSchemaValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput">failOnWarningsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput">routeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput">routeSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidation">disableSchemaValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings">failOnWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKey">routeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression">routeSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `bodyS3Location`<sup>Required</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3Location"></a>

```typescript
public readonly bodyS3Location: Apigatewayv2ApiBodyS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference">Apigatewayv2ApiBodyS3LocationOutputReference</a>

---

##### `corsConfiguration`<sup>Required</sup> <a name="corsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration"></a>

```typescript
public readonly corsConfiguration: Apigatewayv2ApiCorsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `apiKeySelectionExpressionInput`<sup>Optional</sup> <a name="apiKeySelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput"></a>

```typescript
public readonly apiKeySelectionExpressionInput: string;
```

- *Type:* string

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePathInput"></a>

```typescript
public readonly basePathInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `bodyS3LocationInput`<sup>Optional</sup> <a name="bodyS3LocationInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.bodyS3LocationInput"></a>

```typescript
public readonly bodyS3LocationInput: IResolvable | Apigatewayv2ApiBodyS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

---

##### `corsConfigurationInput`<sup>Optional</sup> <a name="corsConfigurationInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput"></a>

```typescript
public readonly corsConfigurationInput: IResolvable | Apigatewayv2ApiCorsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `credentialsArnInput`<sup>Optional</sup> <a name="credentialsArnInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput"></a>

```typescript
public readonly credentialsArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpointInput`<sup>Optional</sup> <a name="disableExecuteApiEndpointInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput"></a>

```typescript
public readonly disableExecuteApiEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableSchemaValidationInput`<sup>Optional</sup> <a name="disableSchemaValidationInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidationInput"></a>

```typescript
public readonly disableSchemaValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOnWarningsInput`<sup>Optional</sup> <a name="failOnWarningsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput"></a>

```typescript
public readonly failOnWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput"></a>

```typescript
public readonly routeKeyInput: string;
```

- *Type:* string

---

##### `routeSelectionExpressionInput`<sup>Optional</sup> <a name="routeSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput"></a>

```typescript
public readonly routeSelectionExpressionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="apiKeySelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression"></a>

```typescript
public readonly apiKeySelectionExpression: string;
```

- *Type:* string

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `credentialsArn`<sup>Required</sup> <a name="credentialsArn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableSchemaValidation`<sup>Required</sup> <a name="disableSchemaValidation" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.disableSchemaValidation"></a>

```typescript
public readonly disableSchemaValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failOnWarnings`<sup>Required</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings"></a>

```typescript
public readonly failOnWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="routeSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression"></a>

```typescript
public readonly routeSelectionExpression: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2ApiBodyS3Location <a name="Apigatewayv2ApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.Initializer"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

const apigatewayv2ApiBodyS3Location: apigatewayv2Api.Apigatewayv2ApiBodyS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.etag">etag</a></code> | <code>string</code> | The Etag of the S3 object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.key">key</a></code> | <code>string</code> | The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.version">version</a></code> | <code>string</code> | The version of the S3 object. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#bucket Apigatewayv2Api#bucket}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

The Etag of the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#etag Apigatewayv2Api#etag}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#key Apigatewayv2Api#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#version Apigatewayv2Api#version}

---

### Apigatewayv2ApiConfig <a name="Apigatewayv2ApiConfig" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.Initializer"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

const apigatewayv2ApiConfig: apigatewayv2Api.Apigatewayv2ApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>string</code> | An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions). |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.basePath">basePath</a></code> | <code>string</code> | Specifies how to interpret the base path of the API during import. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.body">body</a></code> | <code>string</code> | The OpenAPI definition. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.bodyS3Location">bodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a></code> | The S3 location of an OpenAPI definition. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | This property is part of quick create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.description">description</a></code> | <code>string</code> | The description of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableSchemaValidation">disableSchemaValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Avoid validating models when creating a deployment. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings">failOnWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to rollback the API creation when a warning is encountered. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The IP address types that can invoke the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.name">name</a></code> | <code>string</code> | The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType">protocolType</a></code> | <code>string</code> | The API protocol. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey">routeKey</a></code> | <code>string</code> | This property is part of quick create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression">routeSelectionExpression</a></code> | <code>string</code> | The route selection expression for the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The collection of tags. Each tag element is associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.target">target</a></code> | <code>string</code> | This property is part of quick create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.version">version</a></code> | <code>string</code> | A version identifier for the API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="apiKeySelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression"></a>

```typescript
public readonly apiKeySelectionExpression: string;
```

- *Type:* string

An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

Specifies how to interpret the base path of the API during import.

Valid values are ``ignore``, ``prepend``, and ``split``. The default value is ``ignore``. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#base_path Apigatewayv2Api#base_path}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The OpenAPI definition.

Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#body Apigatewayv2Api#body}

---

##### `bodyS3Location`<sup>Optional</sup> <a name="bodyS3Location" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.bodyS3Location"></a>

```typescript
public readonly bodyS3Location: Apigatewayv2ApiBodyS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

The S3 location of an OpenAPI definition.

Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#body_s3_location Apigatewayv2Api#body_s3_location}

---

##### `corsConfiguration`<sup>Optional</sup> <a name="corsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration"></a>

```typescript
public readonly corsConfiguration: Apigatewayv2ApiCorsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

This property is part of quick create.

It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify ``arn:aws:iam::*:user/*``. To use resource-based permissions on supported AWS services, specify ``null``. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#description Apigatewayv2Api#description}

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint.

By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}

---

##### `disableSchemaValidation`<sup>Optional</sup> <a name="disableSchemaValidation" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableSchemaValidation"></a>

```typescript
public readonly disableSchemaValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Avoid validating models when creating a deployment. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#disable_schema_validation Apigatewayv2Api#disable_schema_validation}

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings"></a>

```typescript
public readonly failOnWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to rollback the API creation when a warning is encountered.

By default, API creation continues if a warning is encountered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The IP address types that can invoke the API.

Use ``ipv4`` to allow only IPv4 addresses to invoke your API, or use ``dualstack`` to allow both IPv4 and IPv6 addresses to invoke your API.
 Don?t use IP address type for an HTTP API based on an OpenAPI specification. Instead, specify the IP address type in the OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#ip_address_type Apigatewayv2Api#ip_address_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#name Apigatewayv2Api#name}

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

The API protocol.

Valid values are ``WEBSOCKET`` or ``HTTP``. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}

---

##### `routeKey`<sup>Optional</sup> <a name="routeKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

This property is part of quick create.

If you don't specify a ``routeKey``, a default route of ``$default`` is created. The ``$default`` route acts as a catch-all for any request made to your API, for a particular stage. The ``$default`` route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#route_key Apigatewayv2Api#route_key}

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="routeSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression"></a>

```typescript
public readonly routeSelectionExpression: string;
```

- *Type:* string

The route selection expression for the API.

For HTTP APIs, the ``routeSelectionExpression`` must be ``${request.method} ${request.path}``. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#tags Apigatewayv2Api#tags}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

This property is part of quick create.

Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#target Apigatewayv2Api#target}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

A version identifier for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#version Apigatewayv2Api#version}

---

### Apigatewayv2ApiCorsConfiguration <a name="Apigatewayv2ApiCorsConfiguration" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.Initializer"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

const apigatewayv2ApiCorsConfiguration: apigatewayv2Api.Apigatewayv2ApiCorsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | Represents a collection of allowed headers. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | Represents a collection of allowed HTTP methods. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | Represents a collection of allowed origins. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Represents a collection of exposed headers. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge">maxAge</a></code> | <code>number</code> | The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

Represents a collection of allowed headers. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

Represents a collection of allowed origins. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Represents a collection of exposed headers. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_api#max_age Apigatewayv2Api#max_age}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2ApiBodyS3LocationOutputReference <a name="Apigatewayv2ApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

new apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2ApiBodyS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiBodyS3Location">Apigatewayv2ApiBodyS3Location</a>

---


### Apigatewayv2ApiCorsConfigurationOutputReference <a name="Apigatewayv2ApiCorsConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Api } from '@cdktn/provider-awscc'

new apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders"></a>

```typescript
public resetAllowHeaders(): void
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods"></a>

```typescript
public resetAllowMethods(): void
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins"></a>

```typescript
public resetAllowOrigins(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput"></a>

```typescript
public readonly allowHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput"></a>

```typescript
public readonly allowMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput"></a>

```typescript
public readonly allowOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2ApiCorsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---



