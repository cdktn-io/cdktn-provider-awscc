# `apigatewayv2Authorizer` Submodule <a name="`apigatewayv2Authorizer` Submodule" id="@cdktn/provider-awscc.apigatewayv2Authorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Authorizer <a name="Apigatewayv2Authorizer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer awscc_apigatewayv2_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

new apigatewayv2Authorizer.Apigatewayv2Authorizer(scope: Construct, id: string, config: Apigatewayv2AuthorizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig">Apigatewayv2AuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig">Apigatewayv2AuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration">putJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn">resetAuthorizerCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion">resetAuthorizerPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses">resetEnableSimpleResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySource">resetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration">resetJwtConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJwtConfiguration` <a name="putJwtConfiguration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration"></a>

```typescript
public putJwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `resetAuthorizerCredentialsArn` <a name="resetAuthorizerCredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn"></a>

```typescript
public resetAuthorizerCredentialsArn(): void
```

##### `resetAuthorizerPayloadFormatVersion` <a name="resetAuthorizerPayloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion"></a>

```typescript
public resetAuthorizerPayloadFormatVersion(): void
```

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds"></a>

```typescript
public resetAuthorizerResultTtlInSeconds(): void
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri"></a>

```typescript
public resetAuthorizerUri(): void
```

##### `resetEnableSimpleResponses` <a name="resetEnableSimpleResponses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses"></a>

```typescript
public resetEnableSimpleResponses(): void
```

##### `resetIdentitySource` <a name="resetIdentitySource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySource"></a>

```typescript
public resetIdentitySource(): void
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentityValidationExpression"></a>

```typescript
public resetIdentityValidationExpression(): void
```

##### `resetJwtConfiguration` <a name="resetJwtConfiguration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration"></a>

```typescript
public resetJwtConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Authorizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Apigatewayv2Authorizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2Authorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2Authorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Authorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration">jwtConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput">authorizerCredentialsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput">authorizerPayloadFormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput">authorizerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput">authorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput">enableSimpleResponsesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourceInput">identitySourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput">jwtConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn">authorizerCredentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion">authorizerPayloadFormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType">authorizerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses">enableSimpleResponses</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySource">identitySource</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jwtConfiguration`<sup>Required</sup> <a name="jwtConfiguration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration"></a>

```typescript
public readonly jwtConfiguration: Apigatewayv2AuthorizerJwtConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `authorizerCredentialsArnInput`<sup>Optional</sup> <a name="authorizerCredentialsArnInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput"></a>

```typescript
public readonly authorizerCredentialsArnInput: string;
```

- *Type:* string

---

##### `authorizerPayloadFormatVersionInput`<sup>Optional</sup> <a name="authorizerPayloadFormatVersionInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput"></a>

```typescript
public readonly authorizerPayloadFormatVersionInput: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput"></a>

```typescript
public readonly authorizerResultTtlInSecondsInput: number;
```

- *Type:* number

---

##### `authorizerTypeInput`<sup>Optional</sup> <a name="authorizerTypeInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput"></a>

```typescript
public readonly authorizerTypeInput: string;
```

- *Type:* string

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput"></a>

```typescript
public readonly authorizerUriInput: string;
```

- *Type:* string

---

##### `enableSimpleResponsesInput`<sup>Optional</sup> <a name="enableSimpleResponsesInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput"></a>

```typescript
public readonly enableSimpleResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identitySourceInput`<sup>Optional</sup> <a name="identitySourceInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourceInput"></a>

```typescript
public readonly identitySourceInput: string[];
```

- *Type:* string[]

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpressionInput"></a>

```typescript
public readonly identityValidationExpressionInput: string;
```

- *Type:* string

---

##### `jwtConfigurationInput`<sup>Optional</sup> <a name="jwtConfigurationInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput"></a>

```typescript
public readonly jwtConfigurationInput: IResolvable | Apigatewayv2AuthorizerJwtConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `authorizerCredentialsArn`<sup>Required</sup> <a name="authorizerCredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn"></a>

```typescript
public readonly authorizerCredentialsArn: string;
```

- *Type:* string

---

##### `authorizerPayloadFormatVersion`<sup>Required</sup> <a name="authorizerPayloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion"></a>

```typescript
public readonly authorizerPayloadFormatVersion: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType"></a>

```typescript
public readonly authorizerType: string;
```

- *Type:* string

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `enableSimpleResponses`<sup>Required</sup> <a name="enableSimpleResponses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses"></a>

```typescript
public readonly enableSimpleResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySource"></a>

```typescript
public readonly identitySource: string[];
```

- *Type:* string[]

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2AuthorizerConfig <a name="Apigatewayv2AuthorizerConfig" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.Initializer"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

const apigatewayv2AuthorizerConfig: apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId">apiId</a></code> | <code>string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType">authorizerType</a></code> | <code>string</code> | The authorizer type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name">name</a></code> | <code>string</code> | The name of the authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn">authorizerCredentialsArn</a></code> | <code>string</code> | Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion">authorizerPayloadFormatVersion</a></code> | <code>string</code> | Specifies the format of the payload sent to an HTTP API Lambda authorizer. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | The time to live (TTL) for cached authorizer results, in seconds. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | The authorizer's Uniform Resource Identifier (URI). |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses">enableSimpleResponses</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether a Lambda authorizer returns a response in a simple format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySource">identitySource</a></code> | <code>string[]</code> | The identity source for which authorization is requested. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | This parameter is not used. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration">jwtConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType"></a>

```typescript
public readonly authorizerType: string;
```

- *Type:* string

The authorizer type.

Specify ``REQUEST`` for a Lambda function using incoming request parameters. Specify ``JWT`` to use JSON Web Tokens (supported only for HTTP APIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}

---

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="authorizerCredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn"></a>

```typescript
public readonly authorizerCredentialsArn: string;
```

- *Type:* string

Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.

To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for ``REQUEST`` authorizers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="authorizerPayloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion"></a>

```typescript
public readonly authorizerPayloadFormatVersion: string;
```

- *Type:* string

Specifies the format of the payload sent to an HTTP API Lambda authorizer.

Required for HTTP API Lambda authorizers. Supported values are ``1.0`` and ``2.0``. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

The time to live (TTL) for cached authorizer results, in seconds.

If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

The authorizer's Uniform Resource Identifier (URI).

For ``REQUEST`` authorizers, this must be a well-formed Lambda function URI, for example, ``arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations``. In general, the URI has this form: ``arn:aws:apigateway:{region}:lambda:path/{service_api}``, where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial ``/``. For Lambda functions, this is usually of the form ``/2015-03-31/functions/[FunctionARN]/invocations``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="enableSimpleResponses" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses"></a>

```typescript
public readonly enableSimpleResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether a Lambda authorizer returns a response in a simple format.

By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySource"></a>

```typescript
public readonly identitySource: string[];
```

- *Type:* string[]

The identity source for which authorization is requested.

For a ``REQUEST`` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with ``$``, for example, ``$request.header.Auth``, ``$request.querystring.Name``. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
 For ``JWT``, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example ``$request.header.Authorization``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#identity_source Apigatewayv2Authorizer#identity_source}

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

This parameter is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#identity_validation_expression Apigatewayv2Authorizer#identity_validation_expression}

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="jwtConfiguration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration"></a>

```typescript
public readonly jwtConfiguration: Apigatewayv2AuthorizerJwtConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer.

Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

### Apigatewayv2AuthorizerJwtConfiguration <a name="Apigatewayv2AuthorizerJwtConfiguration" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.Initializer"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

const apigatewayv2AuthorizerJwtConfiguration: apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience">audience</a></code> | <code>string[]</code> | A list of the intended recipients of the JWT. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer">issuer</a></code> | <code>string</code> | The base domain of the identity provider that issues JSON Web Tokens. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

A list of the intended recipients of the JWT.

A valid JWT must provide an ``aud`` that matches at least one entry in this list. See [RFC 7519](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3). Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The base domain of the identity provider that issues JSON Web Tokens.

For example, an Amazon Cognito user pool has the following format: ``https://cognito-idp.{region}.amazonaws.com/{userPoolId}``. Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2AuthorizerJwtConfigurationOutputReference <a name="Apigatewayv2AuthorizerJwtConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Authorizer } from '@cdktn/provider-awscc'

new apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput">audienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience">audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string[];
```

- *Type:* string[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2AuthorizerJwtConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---



