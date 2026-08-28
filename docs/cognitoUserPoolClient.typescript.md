# `cognitoUserPoolClient` Submodule <a name="`cognitoUserPoolClient` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClient <a name="CognitoUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client awscc_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

new cognitoUserPoolClient.CognitoUserPoolClient(scope: Construct, id: string, config: CognitoUserPoolClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration">putAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation">putRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits">putTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity">resetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlows">resetAllowedOAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlowsUserPoolClient">resetAllowedOAuthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthScopes">resetAllowedOAuthScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration">resetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity">resetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrLs">resetCallbackUrLs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri">resetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData">resetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation">resetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows">resetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret">resetGenerateSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity">resetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrLs">resetLogoutUrLs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors">resetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes">resetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenRotation">resetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity">resetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders">resetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits">resetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes">resetWriteAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticsConfiguration` <a name="putAnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration"></a>

```typescript
public putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `putRefreshTokenRotation` <a name="putRefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation"></a>

```typescript
public putRefreshTokenRotation(value: CognitoUserPoolClientRefreshTokenRotation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

---

##### `putTokenValidityUnits` <a name="putTokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits"></a>

```typescript
public putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `resetAccessTokenValidity` <a name="resetAccessTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity"></a>

```typescript
public resetAccessTokenValidity(): void
```

##### `resetAllowedOAuthFlows` <a name="resetAllowedOAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlows"></a>

```typescript
public resetAllowedOAuthFlows(): void
```

##### `resetAllowedOAuthFlowsUserPoolClient` <a name="resetAllowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthFlowsUserPoolClient"></a>

```typescript
public resetAllowedOAuthFlowsUserPoolClient(): void
```

##### `resetAllowedOAuthScopes` <a name="resetAllowedOAuthScopes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOAuthScopes"></a>

```typescript
public resetAllowedOAuthScopes(): void
```

##### `resetAnalyticsConfiguration` <a name="resetAnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration"></a>

```typescript
public resetAnalyticsConfiguration(): void
```

##### `resetAuthSessionValidity` <a name="resetAuthSessionValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity"></a>

```typescript
public resetAuthSessionValidity(): void
```

##### `resetCallbackUrLs` <a name="resetCallbackUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrLs"></a>

```typescript
public resetCallbackUrLs(): void
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetClientName"></a>

```typescript
public resetClientName(): void
```

##### `resetDefaultRedirectUri` <a name="resetDefaultRedirectUri" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri"></a>

```typescript
public resetDefaultRedirectUri(): void
```

##### `resetEnablePropagateAdditionalUserContextData` <a name="resetEnablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```typescript
public resetEnablePropagateAdditionalUserContextData(): void
```

##### `resetEnableTokenRevocation` <a name="resetEnableTokenRevocation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation"></a>

```typescript
public resetEnableTokenRevocation(): void
```

##### `resetExplicitAuthFlows` <a name="resetExplicitAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows"></a>

```typescript
public resetExplicitAuthFlows(): void
```

##### `resetGenerateSecret` <a name="resetGenerateSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret"></a>

```typescript
public resetGenerateSecret(): void
```

##### `resetIdTokenValidity` <a name="resetIdTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity"></a>

```typescript
public resetIdTokenValidity(): void
```

##### `resetLogoutUrLs` <a name="resetLogoutUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrLs"></a>

```typescript
public resetLogoutUrLs(): void
```

##### `resetPreventUserExistenceErrors` <a name="resetPreventUserExistenceErrors" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors"></a>

```typescript
public resetPreventUserExistenceErrors(): void
```

##### `resetReadAttributes` <a name="resetReadAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes"></a>

```typescript
public resetReadAttributes(): void
```

##### `resetRefreshTokenRotation` <a name="resetRefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenRotation"></a>

```typescript
public resetRefreshTokenRotation(): void
```

##### `resetRefreshTokenValidity` <a name="resetRefreshTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity"></a>

```typescript
public resetRefreshTokenValidity(): void
```

##### `resetSupportedIdentityProviders` <a name="resetSupportedIdentityProviders" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders"></a>

```typescript
public resetSupportedIdentityProviders(): void
```

##### `resetTokenValidityUnits` <a name="resetTokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits"></a>

```typescript
public resetTokenValidityUnits(): void
```

##### `resetWriteAttributes` <a name="resetWriteAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes"></a>

```typescript
public resetWriteAttributes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

cognitoUserPoolClient.CognitoUserPoolClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoUserPoolClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference">CognitoUserPoolClientRefreshTokenRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput">accessTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsInput">allowedOAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClientInput">allowedOAuthFlowsUserPoolClientInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopesInput">allowedOAuthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput">analyticsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput">authSessionValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLsInput">callbackUrLsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientNameInput">clientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput">defaultRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">enablePropagateAdditionalUserContextDataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput">enableTokenRevocationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput">explicitAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput">generateSecretInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput">idTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLsInput">logoutUrLsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput">preventUserExistenceErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput">readAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotationInput">refreshTokenRotationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput">refreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput">supportedIdentityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput">tokenValidityUnitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput">writeAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlows">allowedOAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient">allowedOAuthFlowsUserPoolClient</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopes">allowedOAuthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity">authSessionValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLs">callbackUrLs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret">generateSecret</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLs">logoutUrLs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: CognitoUserPoolClientAnalyticsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `refreshTokenRotation`<sup>Required</sup> <a name="refreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: CognitoUserPoolClientRefreshTokenRotationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference">CognitoUserPoolClientRefreshTokenRotationOutputReference</a>

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: CognitoUserPoolClientTokenValidityUnitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `accessTokenValidityInput`<sup>Optional</sup> <a name="accessTokenValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput"></a>

```typescript
public readonly accessTokenValidityInput: number;
```

- *Type:* number

---

##### `allowedOAuthFlowsInput`<sup>Optional</sup> <a name="allowedOAuthFlowsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsInput"></a>

```typescript
public readonly allowedOAuthFlowsInput: string[];
```

- *Type:* string[]

---

##### `allowedOAuthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="allowedOAuthFlowsUserPoolClientInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClientInput"></a>

```typescript
public readonly allowedOAuthFlowsUserPoolClientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedOAuthScopesInput`<sup>Optional</sup> <a name="allowedOAuthScopesInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopesInput"></a>

```typescript
public readonly allowedOAuthScopesInput: string[];
```

- *Type:* string[]

---

##### `analyticsConfigurationInput`<sup>Optional</sup> <a name="analyticsConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput"></a>

```typescript
public readonly analyticsConfigurationInput: IResolvable | CognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `authSessionValidityInput`<sup>Optional</sup> <a name="authSessionValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput"></a>

```typescript
public readonly authSessionValidityInput: number;
```

- *Type:* number

---

##### `callbackUrLsInput`<sup>Optional</sup> <a name="callbackUrLsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLsInput"></a>

```typescript
public readonly callbackUrLsInput: string[];
```

- *Type:* string[]

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientNameInput"></a>

```typescript
public readonly clientNameInput: string;
```

- *Type:* string

---

##### `defaultRedirectUriInput`<sup>Optional</sup> <a name="defaultRedirectUriInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput"></a>

```typescript
public readonly defaultRedirectUriInput: string;
```

- *Type:* string

---

##### `enablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextDataInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```typescript
public readonly enablePropagateAdditionalUserContextDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableTokenRevocationInput`<sup>Optional</sup> <a name="enableTokenRevocationInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput"></a>

```typescript
public readonly enableTokenRevocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `explicitAuthFlowsInput`<sup>Optional</sup> <a name="explicitAuthFlowsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput"></a>

```typescript
public readonly explicitAuthFlowsInput: string[];
```

- *Type:* string[]

---

##### `generateSecretInput`<sup>Optional</sup> <a name="generateSecretInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput"></a>

```typescript
public readonly generateSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idTokenValidityInput`<sup>Optional</sup> <a name="idTokenValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput"></a>

```typescript
public readonly idTokenValidityInput: number;
```

- *Type:* number

---

##### `logoutUrLsInput`<sup>Optional</sup> <a name="logoutUrLsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLsInput"></a>

```typescript
public readonly logoutUrLsInput: string[];
```

- *Type:* string[]

---

##### `preventUserExistenceErrorsInput`<sup>Optional</sup> <a name="preventUserExistenceErrorsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```typescript
public readonly preventUserExistenceErrorsInput: string;
```

- *Type:* string

---

##### `readAttributesInput`<sup>Optional</sup> <a name="readAttributesInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput"></a>

```typescript
public readonly readAttributesInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenRotationInput`<sup>Optional</sup> <a name="refreshTokenRotationInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotationInput"></a>

```typescript
public readonly refreshTokenRotationInput: IResolvable | CognitoUserPoolClientRefreshTokenRotation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

---

##### `refreshTokenValidityInput`<sup>Optional</sup> <a name="refreshTokenValidityInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput"></a>

```typescript
public readonly refreshTokenValidityInput: number;
```

- *Type:* number

---

##### `supportedIdentityProvidersInput`<sup>Optional</sup> <a name="supportedIdentityProvidersInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput"></a>

```typescript
public readonly supportedIdentityProvidersInput: string[];
```

- *Type:* string[]

---

##### `tokenValidityUnitsInput`<sup>Optional</sup> <a name="tokenValidityUnitsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput"></a>

```typescript
public readonly tokenValidityUnitsInput: IResolvable | CognitoUserPoolClientTokenValidityUnits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `writeAttributesInput`<sup>Optional</sup> <a name="writeAttributesInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput"></a>

```typescript
public readonly writeAttributesInput: string[];
```

- *Type:* string[]

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

---

##### `allowedOAuthFlows`<sup>Required</sup> <a name="allowedOAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlows"></a>

```typescript
public readonly allowedOAuthFlows: string[];
```

- *Type:* string[]

---

##### `allowedOAuthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOAuthFlowsUserPoolClient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedOAuthScopes`<sup>Required</sup> <a name="allowedOAuthScopes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOAuthScopes"></a>

```typescript
public readonly allowedOAuthScopes: string[];
```

- *Type:* string[]

---

##### `authSessionValidity`<sup>Required</sup> <a name="authSessionValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity"></a>

```typescript
public readonly authSessionValidity: number;
```

- *Type:* number

---

##### `callbackUrLs`<sup>Required</sup> <a name="callbackUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrLs"></a>

```typescript
public readonly callbackUrLs: string[];
```

- *Type:* string[]

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

---

##### `enablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```typescript
public readonly enablePropagateAdditionalUserContextData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

---

##### `generateSecret`<sup>Required</sup> <a name="generateSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret"></a>

```typescript
public readonly generateSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

---

##### `logoutUrLs`<sup>Required</sup> <a name="logoutUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrLs"></a>

```typescript
public readonly logoutUrLs: string[];
```

- *Type:* string[]

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientAnalyticsConfiguration <a name="CognitoUserPoolClientAnalyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

const cognitoUserPoolClientAnalyticsConfiguration: cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared">userDataShared</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}.

---

##### `userDataShared`<sup>Optional</sup> <a name="userDataShared" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```typescript
public readonly userDataShared: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}.

---

### CognitoUserPoolClientConfig <a name="CognitoUserPoolClientConfig" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

const cognitoUserPoolClientConfig: cognitoUserPoolClient.CognitoUserPoolClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlows">allowedOAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows CognitoUserPoolClient#allowed_o_auth_flows}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlowsUserPoolClient">allowedOAuthFlowsUserPoolClient</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows_user_pool_client CognitoUserPoolClient#allowed_o_auth_flows_user_pool_client}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthScopes">allowedOAuthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_scopes CognitoUserPoolClient#allowed_o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity">authSessionValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrLs">callbackUrLs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#callback_ur_ls CognitoUserPoolClient#callback_ur_ls}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.clientName">clientName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#client_name CognitoUserPoolClient#client_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret">generateSecret</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrLs">logoutUrLs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#logout_ur_ls CognitoUserPoolClient#logout_ur_ls}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CognitoUserPoolClient#refresh_token_rotation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `allowedOAuthFlows`<sup>Optional</sup> <a name="allowedOAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlows"></a>

```typescript
public readonly allowedOAuthFlows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows CognitoUserPoolClient#allowed_o_auth_flows}.

---

##### `allowedOAuthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOAuthFlowsUserPoolClient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows_user_pool_client CognitoUserPoolClient#allowed_o_auth_flows_user_pool_client}.

---

##### `allowedOAuthScopes`<sup>Optional</sup> <a name="allowedOAuthScopes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOAuthScopes"></a>

```typescript
public readonly allowedOAuthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_scopes CognitoUserPoolClient#allowed_o_auth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: CognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}.

---

##### `authSessionValidity`<sup>Optional</sup> <a name="authSessionValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity"></a>

```typescript
public readonly authSessionValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}.

---

##### `callbackUrLs`<sup>Optional</sup> <a name="callbackUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrLs"></a>

```typescript
public readonly callbackUrLs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#callback_ur_ls CognitoUserPoolClient#callback_ur_ls}.

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#client_name CognitoUserPoolClient#client_name}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `enablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```typescript
public readonly enablePropagateAdditionalUserContextData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `generateSecret`<sup>Optional</sup> <a name="generateSecret" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret"></a>

```typescript
public readonly generateSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `logoutUrLs`<sup>Optional</sup> <a name="logoutUrLs" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrLs"></a>

```typescript
public readonly logoutUrLs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#logout_ur_ls CognitoUserPoolClient#logout_ur_ls}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: CognitoUserPoolClientRefreshTokenRotation;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CognitoUserPoolClient#refresh_token_rotation}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: CognitoUserPoolClientTokenValidityUnits;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}.

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

### CognitoUserPoolClientRefreshTokenRotation <a name="CognitoUserPoolClientRefreshTokenRotation" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

const cognitoUserPoolClientRefreshTokenRotation: cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.feature">feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.retryGracePeriodSeconds">retryGracePeriodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}. |

---

##### `feature`<sup>Optional</sup> <a name="feature" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}.

---

##### `retryGracePeriodSeconds`<sup>Optional</sup> <a name="retryGracePeriodSeconds" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.retryGracePeriodSeconds"></a>

```typescript
public readonly retryGracePeriodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}.

---

### CognitoUserPoolClientTokenValidityUnits <a name="CognitoUserPoolClientTokenValidityUnits" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

const cognitoUserPoolClientTokenValidityUnits: cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken">idToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken">refreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

new cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">resetUserDataShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```typescript
public resetApplicationArn(): void
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetUserDataShared` <a name="resetUserDataShared" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```typescript
public resetUserDataShared(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">userDataSharedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `userDataSharedInput`<sup>Optional</sup> <a name="userDataSharedInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```typescript
public readonly userDataSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```typescript
public readonly userDataShared: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---


### CognitoUserPoolClientRefreshTokenRotationOutputReference <a name="CognitoUserPoolClientRefreshTokenRotationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

new cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetFeature">resetFeature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetRetryGracePeriodSeconds">resetRetryGracePeriodSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeature` <a name="resetFeature" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetFeature"></a>

```typescript
public resetFeature(): void
```

##### `resetRetryGracePeriodSeconds` <a name="resetRetryGracePeriodSeconds" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetRetryGracePeriodSeconds"></a>

```typescript
public resetRetryGracePeriodSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.featureInput">featureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSecondsInput">retryGracePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature">feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds">retryGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.featureInput"></a>

```typescript
public readonly featureInput: string;
```

- *Type:* string

---

##### `retryGracePeriodSecondsInput`<sup>Optional</sup> <a name="retryGracePeriodSecondsInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSecondsInput"></a>

```typescript
public readonly retryGracePeriodSecondsInput: number;
```

- *Type:* number

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

---

##### `retryGracePeriodSeconds`<sup>Required</sup> <a name="retryGracePeriodSeconds" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds"></a>

```typescript
public readonly retryGracePeriodSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolClientRefreshTokenRotation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation">CognitoUserPoolClientRefreshTokenRotation</a>

---


### CognitoUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktn/provider-awscc'

new cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```typescript
public resetIdToken(): void
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```typescript
public resetRefreshToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```typescript
public readonly idTokenInput: string;
```

- *Type:* string

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```typescript
public readonly refreshTokenInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolClientTokenValidityUnits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---



