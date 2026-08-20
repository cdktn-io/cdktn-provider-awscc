# `cognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`cognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRegionalConfigurationAttachment <a name="CognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment(scope: Construct, id: string, config: CognitoUserPoolRegionalConfigurationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig">CognitoUserPoolRegionalConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig">CognitoUserPoolRegionalConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration">putEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration">putSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration">resetEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration">resetSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags">resetUserPoolTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailConfiguration` <a name="putEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration"></a>

```typescript
public putEmailConfiguration(value: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig"></a>

```typescript
public putLambdaConfig(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `putSmsConfiguration` <a name="putSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration"></a>

```typescript
public putSmsConfiguration(value: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `resetEmailConfiguration` <a name="resetEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration"></a>

```typescript
public resetEmailConfiguration(): void
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig"></a>

```typescript
public resetLambdaConfig(): void
```

##### `resetSmsConfiguration` <a name="resetSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration"></a>

```typescript
public resetSmsConfiguration(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUserPoolTags` <a name="resetUserPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags"></a>

```typescript
public resetUserPoolTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput">emailConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput">smsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput">userPoolTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">userPoolTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `emailConfiguration`<sup>Required</sup> <a name="emailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```typescript
public readonly emailConfiguration: CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `smsConfiguration`<sup>Required</sup> <a name="smsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```typescript
public readonly smsConfiguration: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `emailConfigurationInput`<sup>Optional</sup> <a name="emailConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput"></a>

```typescript
public readonly emailConfigurationInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput"></a>

```typescript
public readonly lambdaConfigInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `smsConfigurationInput`<sup>Optional</sup> <a name="smsConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput"></a>

```typescript
public readonly smsConfigurationInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `userPoolTagsInput`<sup>Optional</sup> <a name="userPoolTagsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput"></a>

```typescript
public readonly userPoolTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `userPoolTags`<sup>Required</sup> <a name="userPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```typescript
public readonly userPoolTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRegionalConfigurationAttachmentConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentConfig: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status">status</a></code> | <code>string</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags">userPoolTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `emailConfiguration`<sup>Optional</sup> <a name="emailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration"></a>

```typescript
public readonly emailConfiguration: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `smsConfiguration`<sup>Optional</sup> <a name="smsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration"></a>

```typescript
public readonly smsConfiguration: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `userPoolTags`<sup>Optional</sup> <a name="userPoolTags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags"></a>

```typescript
public readonly userPoolTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet">configurationSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount">emailSendingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn">sourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}. |

---

##### `configurationSet`<sup>Optional</sup> <a name="configurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet"></a>

```typescript
public readonly configurationSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}.

---

##### `emailSendingAccount`<sup>Optional</sup> <a name="emailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount"></a>

```typescript
public readonly emailSendingAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}.

---

##### `replyToEmailAddress`<sup>Optional</sup> <a name="replyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress"></a>

```typescript
public readonly replyToEmailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentLambdaConfig: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge">createAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage">customMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation">inboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication">postAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation">postConfirmation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication">preAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp">preSignUp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration">preTokenGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig">preTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration">userMigration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}. |

---

##### `createAuthChallenge`<sup>Optional</sup> <a name="createAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge"></a>

```typescript
public readonly createAuthChallenge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}.

---

##### `customEmailSender`<sup>Optional</sup> <a name="customEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender"></a>

```typescript
public readonly customEmailSender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}.

---

##### `customMessage`<sup>Optional</sup> <a name="customMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage"></a>

```typescript
public readonly customMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}.

---

##### `customSmsSender`<sup>Optional</sup> <a name="customSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender"></a>

```typescript
public readonly customSmsSender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}.

---

##### `defineAuthChallenge`<sup>Optional</sup> <a name="defineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge"></a>

```typescript
public readonly defineAuthChallenge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}.

---

##### `inboundFederation`<sup>Optional</sup> <a name="inboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation"></a>

```typescript
public readonly inboundFederation: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}.

---

##### `postAuthentication`<sup>Optional</sup> <a name="postAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication"></a>

```typescript
public readonly postAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}.

---

##### `postConfirmation`<sup>Optional</sup> <a name="postConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation"></a>

```typescript
public readonly postConfirmation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}.

---

##### `preAuthentication`<sup>Optional</sup> <a name="preAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication"></a>

```typescript
public readonly preAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}.

---

##### `preSignUp`<sup>Optional</sup> <a name="preSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp"></a>

```typescript
public readonly preSignUp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}.

---

##### `preTokenGeneration`<sup>Optional</sup> <a name="preTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration"></a>

```typescript
public readonly preTokenGeneration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}.

---

##### `preTokenGenerationConfig`<sup>Optional</sup> <a name="preTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig"></a>

```typescript
public readonly preTokenGenerationConfig: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}.

---

##### `userMigration`<sup>Optional</sup> <a name="userMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration"></a>

```typescript
public readonly userMigration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}.

---

##### `verifyAuthChallengeResponse`<sup>Optional</sup> <a name="verifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse"></a>

```typescript
public readonly verifyAuthChallengeResponse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms">eumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn">snsCallerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion">snsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}. |

---

##### `eumsSms`<sup>Optional</sup> <a name="eumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms"></a>

```typescript
public readonly eumsSms: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `snsCallerArn`<sup>Optional</sup> <a name="snsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn"></a>

```typescript
public readonly snsCallerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}.

---

##### `snsRegion`<sup>Optional</sup> <a name="snsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion"></a>

```typescript
public readonly snsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms: cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn">callerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId">inEntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId">inTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity">originationIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}. |

---

##### `callerArn`<sup>Optional</sup> <a name="callerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn"></a>

```typescript
public readonly callerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}.

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `inEntityId`<sup>Optional</sup> <a name="inEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId"></a>

```typescript
public readonly inEntityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}.

---

##### `inTemplateId`<sup>Optional</sup> <a name="inTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId"></a>

```typescript
public readonly inTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}.

---

##### `originationIdentity`<sup>Optional</sup> <a name="originationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity"></a>

```typescript
public readonly originationIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet">resetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount">resetEmailSendingAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress">resetReplyToEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationSet` <a name="resetConfigurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet"></a>

```typescript
public resetConfigurationSet(): void
```

##### `resetEmailSendingAccount` <a name="resetEmailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```typescript
public resetEmailSendingAccount(): void
```

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetReplyToEmailAddress` <a name="resetReplyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```typescript
public resetReplyToEmailAddress(): void
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn"></a>

```typescript
public resetSourceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput">configurationSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput">emailSendingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput">replyToEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">configurationSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">emailSendingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationSetInput`<sup>Optional</sup> <a name="configurationSetInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput"></a>

```typescript
public readonly configurationSetInput: string;
```

- *Type:* string

---

##### `emailSendingAccountInput`<sup>Optional</sup> <a name="emailSendingAccountInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```typescript
public readonly emailSendingAccountInput: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `replyToEmailAddressInput`<sup>Optional</sup> <a name="replyToEmailAddressInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```typescript
public readonly replyToEmailAddressInput: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `configurationSet`<sup>Required</sup> <a name="configurationSet" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```typescript
public readonly configurationSet: string;
```

- *Type:* string

---

##### `emailSendingAccount`<sup>Required</sup> <a name="emailSendingAccount" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```typescript
public readonly emailSendingAccount: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `replyToEmailAddress`<sup>Required</sup> <a name="replyToEmailAddress" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```typescript
public readonly replyToEmailAddress: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion"></a>

```typescript
public resetLambdaVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```typescript
public readonly lambdaVersionInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion"></a>

```typescript
public resetLambdaVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```typescript
public readonly lambdaVersionInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion"></a>

```typescript
public resetLambdaVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput"></a>

```typescript
public readonly lambdaVersionInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender">putCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender">putCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation">putInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig">putPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge">resetCreateAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender">resetCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage">resetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender">resetCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge">resetDefineAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation">resetInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication">resetPostAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation">resetPostConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication">resetPreAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp">resetPreSignUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration">resetPreTokenGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig">resetPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration">resetUserMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">resetVerifyAuthChallengeResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomEmailSender` <a name="putCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender"></a>

```typescript
public putCustomEmailSender(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `putCustomSmsSender` <a name="putCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender"></a>

```typescript
public putCustomSmsSender(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `putInboundFederation` <a name="putInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation"></a>

```typescript
public putInboundFederation(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `putPreTokenGenerationConfig` <a name="putPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig"></a>

```typescript
public putPreTokenGenerationConfig(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `resetCreateAuthChallenge` <a name="resetCreateAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```typescript
public resetCreateAuthChallenge(): void
```

##### `resetCustomEmailSender` <a name="resetCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender"></a>

```typescript
public resetCustomEmailSender(): void
```

##### `resetCustomMessage` <a name="resetCustomMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage"></a>

```typescript
public resetCustomMessage(): void
```

##### `resetCustomSmsSender` <a name="resetCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender"></a>

```typescript
public resetCustomSmsSender(): void
```

##### `resetDefineAuthChallenge` <a name="resetDefineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```typescript
public resetDefineAuthChallenge(): void
```

##### `resetInboundFederation` <a name="resetInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation"></a>

```typescript
public resetInboundFederation(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPostAuthentication` <a name="resetPostAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication"></a>

```typescript
public resetPostAuthentication(): void
```

##### `resetPostConfirmation` <a name="resetPostConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation"></a>

```typescript
public resetPostConfirmation(): void
```

##### `resetPreAuthentication` <a name="resetPreAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication"></a>

```typescript
public resetPreAuthentication(): void
```

##### `resetPreSignUp` <a name="resetPreSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp"></a>

```typescript
public resetPreSignUp(): void
```

##### `resetPreTokenGeneration` <a name="resetPreTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```typescript
public resetPreTokenGeneration(): void
```

##### `resetPreTokenGenerationConfig` <a name="resetPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig"></a>

```typescript
public resetPreTokenGenerationConfig(): void
```

##### `resetUserMigration` <a name="resetUserMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration"></a>

```typescript
public resetUserMigration(): void
```

##### `resetVerifyAuthChallengeResponse` <a name="resetVerifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```typescript
public resetVerifyAuthChallengeResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">inboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">preTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput">createAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput">customEmailSenderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput">customMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput">customSmsSenderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput">defineAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput">inboundFederationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput">postAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput">postConfirmationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput">preAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput">preSignUpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput">preTokenGenerationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput">preTokenGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput">userMigrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">verifyAuthChallengeResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">createAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">customMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">postAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">postConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">preAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">preSignUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">preTokenGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">userMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEmailSender`<sup>Required</sup> <a name="customEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```typescript
public readonly customEmailSender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `customSmsSender`<sup>Required</sup> <a name="customSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```typescript
public readonly customSmsSender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `inboundFederation`<sup>Required</sup> <a name="inboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```typescript
public readonly inboundFederation: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `preTokenGenerationConfig`<sup>Required</sup> <a name="preTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```typescript
public readonly preTokenGenerationConfig: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `createAuthChallengeInput`<sup>Optional</sup> <a name="createAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```typescript
public readonly createAuthChallengeInput: string;
```

- *Type:* string

---

##### `customEmailSenderInput`<sup>Optional</sup> <a name="customEmailSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```typescript
public readonly customEmailSenderInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `customMessageInput`<sup>Optional</sup> <a name="customMessageInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput"></a>

```typescript
public readonly customMessageInput: string;
```

- *Type:* string

---

##### `customSmsSenderInput`<sup>Optional</sup> <a name="customSmsSenderInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```typescript
public readonly customSmsSenderInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `defineAuthChallengeInput`<sup>Optional</sup> <a name="defineAuthChallengeInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```typescript
public readonly defineAuthChallengeInput: string;
```

- *Type:* string

---

##### `inboundFederationInput`<sup>Optional</sup> <a name="inboundFederationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput"></a>

```typescript
public readonly inboundFederationInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `postAuthenticationInput`<sup>Optional</sup> <a name="postAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```typescript
public readonly postAuthenticationInput: string;
```

- *Type:* string

---

##### `postConfirmationInput`<sup>Optional</sup> <a name="postConfirmationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput"></a>

```typescript
public readonly postConfirmationInput: string;
```

- *Type:* string

---

##### `preAuthenticationInput`<sup>Optional</sup> <a name="preAuthenticationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```typescript
public readonly preAuthenticationInput: string;
```

- *Type:* string

---

##### `preSignUpInput`<sup>Optional</sup> <a name="preSignUpInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput"></a>

```typescript
public readonly preSignUpInput: string;
```

- *Type:* string

---

##### `preTokenGenerationConfigInput`<sup>Optional</sup> <a name="preTokenGenerationConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput"></a>

```typescript
public readonly preTokenGenerationConfigInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `preTokenGenerationInput`<sup>Optional</sup> <a name="preTokenGenerationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```typescript
public readonly preTokenGenerationInput: string;
```

- *Type:* string

---

##### `userMigrationInput`<sup>Optional</sup> <a name="userMigrationInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput"></a>

```typescript
public readonly userMigrationInput: string;
```

- *Type:* string

---

##### `verifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="verifyAuthChallengeResponseInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```typescript
public readonly verifyAuthChallengeResponseInput: string;
```

- *Type:* string

---

##### `createAuthChallenge`<sup>Required</sup> <a name="createAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```typescript
public readonly createAuthChallenge: string;
```

- *Type:* string

---

##### `customMessage`<sup>Required</sup> <a name="customMessage" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```typescript
public readonly customMessage: string;
```

- *Type:* string

---

##### `defineAuthChallenge`<sup>Required</sup> <a name="defineAuthChallenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```typescript
public readonly defineAuthChallenge: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `postAuthentication`<sup>Required</sup> <a name="postAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```typescript
public readonly postAuthentication: string;
```

- *Type:* string

---

##### `postConfirmation`<sup>Required</sup> <a name="postConfirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```typescript
public readonly postConfirmation: string;
```

- *Type:* string

---

##### `preAuthentication`<sup>Required</sup> <a name="preAuthentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```typescript
public readonly preAuthentication: string;
```

- *Type:* string

---

##### `preSignUp`<sup>Required</sup> <a name="preSignUp" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```typescript
public readonly preSignUp: string;
```

- *Type:* string

---

##### `preTokenGeneration`<sup>Required</sup> <a name="preTokenGeneration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```typescript
public readonly preTokenGeneration: string;
```

- *Type:* string

---

##### `userMigration`<sup>Required</sup> <a name="userMigration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```typescript
public readonly userMigration: string;
```

- *Type:* string

---

##### `verifyAuthChallengeResponse`<sup>Required</sup> <a name="verifyAuthChallengeResponse" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```typescript
public readonly verifyAuthChallengeResponse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion">resetLambdaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```

##### `resetLambdaVersion` <a name="resetLambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion"></a>

```typescript
public resetLambdaVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput"></a>

```typescript
public readonly lambdaVersionInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn">resetCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId">resetInEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId">resetInTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity">resetOriginationIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCallerArn` <a name="resetCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn"></a>

```typescript
public resetCallerArn(): void
```

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName"></a>

```typescript
public resetConfigurationSetName(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetInEntityId` <a name="resetInEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId"></a>

```typescript
public resetInEntityId(): void
```

##### `resetInTemplateId` <a name="resetInTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId"></a>

```typescript
public resetInTemplateId(): void
```

##### `resetOriginationIdentity` <a name="resetOriginationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity"></a>

```typescript
public resetOriginationIdentity(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput">callerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput">inEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput">inTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput">originationIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">callerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">inEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">inTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">originationIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callerArnInput`<sup>Optional</sup> <a name="callerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput"></a>

```typescript
public readonly callerArnInput: string;
```

- *Type:* string

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `inEntityIdInput`<sup>Optional</sup> <a name="inEntityIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput"></a>

```typescript
public readonly inEntityIdInput: string;
```

- *Type:* string

---

##### `inTemplateIdInput`<sup>Optional</sup> <a name="inTemplateIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput"></a>

```typescript
public readonly inTemplateIdInput: string;
```

- *Type:* string

---

##### `originationIdentityInput`<sup>Optional</sup> <a name="originationIdentityInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput"></a>

```typescript
public readonly originationIdentityInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `callerArn`<sup>Required</sup> <a name="callerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```typescript
public readonly callerArn: string;
```

- *Type:* string

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `inEntityId`<sup>Required</sup> <a name="inEntityId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```typescript
public readonly inEntityId: string;
```

- *Type:* string

---

##### `inTemplateId`<sup>Required</sup> <a name="inTemplateId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```typescript
public readonly inTemplateId: string;
```

- *Type:* string

---

##### `originationIdentity`<sup>Required</sup> <a name="originationIdentity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```typescript
public readonly originationIdentity: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRegionalConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms">putEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms">resetEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn">resetSnsCallerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion">resetSnsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEumsSms` <a name="putEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms"></a>

```typescript
public putEumsSms(value: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `resetEumsSms` <a name="resetEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms"></a>

```typescript
public resetEumsSms(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetSnsCallerArn` <a name="resetSnsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn"></a>

```typescript
public resetSnsCallerArn(): void
```

##### `resetSnsRegion` <a name="resetSnsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion"></a>

```typescript
public resetSnsRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">eumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput">eumsSmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput">snsCallerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput">snsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">snsCallerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">snsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eumsSms`<sup>Required</sup> <a name="eumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```typescript
public readonly eumsSms: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `eumsSmsInput`<sup>Optional</sup> <a name="eumsSmsInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput"></a>

```typescript
public readonly eumsSmsInput: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `snsCallerArnInput`<sup>Optional</sup> <a name="snsCallerArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```typescript
public readonly snsCallerArnInput: string;
```

- *Type:* string

---

##### `snsRegionInput`<sup>Optional</sup> <a name="snsRegionInput" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput"></a>

```typescript
public readonly snsRegionInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `snsCallerArn`<sup>Required</sup> <a name="snsCallerArn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```typescript
public readonly snsCallerArn: string;
```

- *Type:* string

---

##### `snsRegion`<sup>Required</sup> <a name="snsRegion" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```typescript
public readonly snsRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---



