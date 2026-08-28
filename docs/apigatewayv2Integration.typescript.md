# `apigatewayv2Integration` Submodule <a name="`apigatewayv2Integration` Submodule" id="@cdktn/provider-awscc.apigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Integration <a name="Apigatewayv2Integration" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration awscc_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

new apigatewayv2Integration.Apigatewayv2Integration(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig">Apigatewayv2IntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig">Apigatewayv2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters">putResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy">resetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn">resetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod">resetIntegrationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype">resetIntegrationSubtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri">resetIntegrationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion">resetPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression">resetTemplateSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResponseParameters` <a name="putResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters"></a>

```typescript
public putResponseParameters(value: IResolvable | {[ key: string ]: Apigatewayv2IntegrationResponseParameters}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig"></a>

```typescript
public putTlsConfig(value: Apigatewayv2IntegrationTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetContentHandlingStrategy` <a name="resetContentHandlingStrategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy"></a>

```typescript
public resetContentHandlingStrategy(): void
```

##### `resetCredentialsArn` <a name="resetCredentialsArn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn"></a>

```typescript
public resetCredentialsArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIntegrationMethod` <a name="resetIntegrationMethod" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod"></a>

```typescript
public resetIntegrationMethod(): void
```

##### `resetIntegrationSubtype` <a name="resetIntegrationSubtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype"></a>

```typescript
public resetIntegrationSubtype(): void
```

##### `resetIntegrationUri` <a name="resetIntegrationUri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri"></a>

```typescript
public resetIntegrationUri(): void
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior"></a>

```typescript
public resetPassthroughBehavior(): void
```

##### `resetPayloadFormatVersion` <a name="resetPayloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion"></a>

```typescript
public resetPayloadFormatVersion(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates"></a>

```typescript
public resetRequestTemplates(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

##### `resetTemplateSelectionExpression` <a name="resetTemplateSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression"></a>

```typescript
public resetTemplateSelectionExpression(): void
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutInMillis"></a>

```typescript
public resetTimeoutInMillis(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Integration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isConstruct"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

apigatewayv2Integration.Apigatewayv2Integration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Apigatewayv2Integration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2Integration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters">responseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap">Apigatewayv2IntegrationResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput">contentHandlingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput">credentialsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput">integrationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput">integrationSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput">integrationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput">payloadFormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput">responseParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput">templateSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput">tlsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod">integrationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype">integrationSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri">integrationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters"></a>

```typescript
public readonly responseParameters: Apigatewayv2IntegrationResponseParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap">Apigatewayv2IntegrationResponseParametersMap</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: Apigatewayv2IntegrationTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `contentHandlingStrategyInput`<sup>Optional</sup> <a name="contentHandlingStrategyInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput"></a>

```typescript
public readonly contentHandlingStrategyInput: string;
```

- *Type:* string

---

##### `credentialsArnInput`<sup>Optional</sup> <a name="credentialsArnInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput"></a>

```typescript
public readonly credentialsArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `integrationMethodInput`<sup>Optional</sup> <a name="integrationMethodInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput"></a>

```typescript
public readonly integrationMethodInput: string;
```

- *Type:* string

---

##### `integrationSubtypeInput`<sup>Optional</sup> <a name="integrationSubtypeInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput"></a>

```typescript
public readonly integrationSubtypeInput: string;
```

- *Type:* string

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `integrationUriInput`<sup>Optional</sup> <a name="integrationUriInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput"></a>

```typescript
public readonly integrationUriInput: string;
```

- *Type:* string

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput"></a>

```typescript
public readonly passthroughBehaviorInput: string;
```

- *Type:* string

---

##### `payloadFormatVersionInput`<sup>Optional</sup> <a name="payloadFormatVersionInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput"></a>

```typescript
public readonly payloadFormatVersionInput: string;
```

- *Type:* string

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput"></a>

```typescript
public readonly requestTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: IResolvable | {[ key: string ]: Apigatewayv2IntegrationResponseParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}

---

##### `templateSelectionExpressionInput`<sup>Optional</sup> <a name="templateSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput"></a>

```typescript
public readonly templateSelectionExpressionInput: string;
```

- *Type:* string

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillisInput"></a>

```typescript
public readonly timeoutInMillisInput: number;
```

- *Type:* number

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: IResolvable | Apigatewayv2IntegrationTlsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="contentHandlingStrategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy"></a>

```typescript
public readonly contentHandlingStrategy: string;
```

- *Type:* string

---

##### `credentialsArn`<sup>Required</sup> <a name="credentialsArn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `integrationMethod`<sup>Required</sup> <a name="integrationMethod" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod"></a>

```typescript
public readonly integrationMethod: string;
```

- *Type:* string

---

##### `integrationSubtype`<sup>Required</sup> <a name="integrationSubtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype"></a>

```typescript
public readonly integrationSubtype: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `integrationUri`<sup>Required</sup> <a name="integrationUri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri"></a>

```typescript
public readonly integrationUri: string;
```

- *Type:* string

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="payloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion"></a>

```typescript
public readonly payloadFormatVersion: string;
```

- *Type:* string

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="templateSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression"></a>

```typescript
public readonly templateSelectionExpression: string;
```

- *Type:* string

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationConfig <a name="Apigatewayv2IntegrationConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

const apigatewayv2IntegrationConfig: apigatewayv2Integration.Apigatewayv2IntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId">apiId</a></code> | <code>string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType">integrationType</a></code> | <code>string</code> | The integration type of an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId">connectionId</a></code> | <code>string</code> | The ID of the VPC link for a private integration. Supported only for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType">connectionType</a></code> | <code>string</code> | The type of the network connection to the integration endpoint. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>string</code> | Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn">credentialsArn</a></code> | <code>string</code> | Specifies the credentials required for the integration, if any. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description">description</a></code> | <code>string</code> | The description of the integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod">integrationMethod</a></code> | <code>string</code> | Specifies the integration's HTTP method type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype">integrationSubtype</a></code> | <code>string</code> | Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri">integrationUri</a></code> | <code>string</code> | For a Lambda integration, specify the URI of a Lambda function. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>string</code> | Specifies the format of the payload sent to an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | A key-value map specifying parameters. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters">responseParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}</code> | Parameters that transform the HTTP response from a backend integration before returning the response to clients. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>string</code> | The template selection expression for the integration. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | The TLS configuration for a private integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

The integration type of an integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ID of the VPC link for a private integration. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

The type of the network connection to the integration endpoint.

Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy"></a>

```typescript
public readonly contentHandlingStrategy: string;
```

- *Type:* string

Supported only for WebSocket APIs.

Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn"></a>

```typescript
public readonly credentialsArn: string;
```

- *Type:* string

Specifies the credentials required for the integration, if any.

For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#description Apigatewayv2Integration#description}

---

##### `integrationMethod`<sup>Optional</sup> <a name="integrationMethod" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod"></a>

```typescript
public readonly integrationMethod: string;
```

- *Type:* string

Specifies the integration's HTTP method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}

---

##### `integrationSubtype`<sup>Optional</sup> <a name="integrationSubtype" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype"></a>

```typescript
public readonly integrationSubtype: string;
```

- *Type:* string

Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}

---

##### `integrationUri`<sup>Optional</sup> <a name="integrationUri" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri"></a>

```typescript
public readonly integrationUri: string;
```

- *Type:* string

For a Lambda integration, specify the URI of a Lambda function.

For an HTTP integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource.

There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="payloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion"></a>

```typescript
public readonly payloadFormatVersion: string;
```

- *Type:* string

Specifies the format of the payload sent to an integration.

Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0 For all other integrations, 1.0 is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value map specifying parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters"></a>

```typescript
public readonly responseParameters: IResolvable | {[ key: string ]: Apigatewayv2IntegrationResponseParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}

Parameters that transform the HTTP response from a backend integration before returning the response to clients.

Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression"></a>

```typescript
public readonly templateSelectionExpression: string;
```

- *Type:* string

The template selection expression for the integration. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs.

The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#timeout_in_millis Apigatewayv2Integration#timeout_in_millis}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: Apigatewayv2IntegrationTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

The TLS configuration for a private integration.

If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

### Apigatewayv2IntegrationResponseParameters <a name="Apigatewayv2IntegrationResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

const apigatewayv2IntegrationResponseParameters: apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.responseParameters">responseParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]</code> | list of response parameters. |

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.responseParameters"></a>

```typescript
public readonly responseParameters: IResolvable | Apigatewayv2IntegrationResponseParametersResponseParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]

list of response parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

### Apigatewayv2IntegrationResponseParametersResponseParameters <a name="Apigatewayv2IntegrationResponseParametersResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

const apigatewayv2IntegrationResponseParametersResponseParameters: apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#destination Apigatewayv2Integration#destination}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#source Apigatewayv2Integration#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#destination Apigatewayv2Integration#destination}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#source Apigatewayv2Integration#source}.

---

### Apigatewayv2IntegrationTlsConfig <a name="Apigatewayv2IntegrationTlsConfig" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

const apigatewayv2IntegrationTlsConfig: apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify">serverNameToVerify</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}. |

---

##### `serverNameToVerify`<sup>Optional</sup> <a name="serverNameToVerify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify"></a>

```typescript
public readonly serverNameToVerify: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2IntegrationResponseParametersMap <a name="Apigatewayv2IntegrationResponseParametersMap" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

new apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.get"></a>

```typescript
public get(key: string): Apigatewayv2IntegrationResponseParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: Apigatewayv2IntegrationResponseParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>}

---


### Apigatewayv2IntegrationResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersOutputReference" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

new apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.putResponseParameters">putResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponseParameters` <a name="putResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.putResponseParameters"></a>

```typescript
public putResponseParameters(value: IResolvable | Apigatewayv2IntegrationResponseParametersResponseParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.putResponseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]

---

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParameters">responseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList">Apigatewayv2IntegrationResponseParametersResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParametersInput">responseParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParameters"></a>

```typescript
public readonly responseParameters: Apigatewayv2IntegrationResponseParametersResponseParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList">Apigatewayv2IntegrationResponseParametersResponseParametersList</a>

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: IResolvable | Apigatewayv2IntegrationResponseParametersResponseParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2IntegrationResponseParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>

---


### Apigatewayv2IntegrationResponseParametersResponseParametersList <a name="Apigatewayv2IntegrationResponseParametersResponseParametersList" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

new apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.get"></a>

```typescript
public get(index: number): Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2IntegrationResponseParametersResponseParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>[]

---


### Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

new apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2IntegrationResponseParametersResponseParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersResponseParameters">Apigatewayv2IntegrationResponseParametersResponseParameters</a>

---


### Apigatewayv2IntegrationTlsConfigOutputReference <a name="Apigatewayv2IntegrationTlsConfigOutputReference" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Integration } from '@cdktn/provider-awscc'

new apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify">resetServerNameToVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerNameToVerify` <a name="resetServerNameToVerify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify"></a>

```typescript
public resetServerNameToVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput">serverNameToVerifyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">serverNameToVerify</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverNameToVerifyInput`<sup>Optional</sup> <a name="serverNameToVerifyInput" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput"></a>

```typescript
public readonly serverNameToVerifyInput: string;
```

- *Type:* string

---

##### `serverNameToVerify`<sup>Required</sup> <a name="serverNameToVerify" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```typescript
public readonly serverNameToVerify: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2IntegrationTlsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---



