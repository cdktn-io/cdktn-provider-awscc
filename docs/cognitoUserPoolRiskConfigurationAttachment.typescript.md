# `cognitoUserPoolRiskConfigurationAttachment` Submodule <a name="`cognitoUserPoolRiskConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRiskConfigurationAttachment <a name="CognitoUserPoolRiskConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment(scope: Construct, id: string, config: CognitoUserPoolRiskConfigurationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig">CognitoUserPoolRiskConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig">CognitoUserPoolRiskConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putAccountTakeoverRiskConfiguration">putAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putCompromisedCredentialsRiskConfiguration">putCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putRiskExceptionConfiguration">putRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetAccountTakeoverRiskConfiguration">resetAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetCompromisedCredentialsRiskConfiguration">resetCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetRiskExceptionConfiguration">resetRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountTakeoverRiskConfiguration` <a name="putAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putAccountTakeoverRiskConfiguration"></a>

```typescript
public putAccountTakeoverRiskConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putAccountTakeoverRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---

##### `putCompromisedCredentialsRiskConfiguration` <a name="putCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putCompromisedCredentialsRiskConfiguration"></a>

```typescript
public putCompromisedCredentialsRiskConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putCompromisedCredentialsRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---

##### `putRiskExceptionConfiguration` <a name="putRiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putRiskExceptionConfiguration"></a>

```typescript
public putRiskExceptionConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.putRiskExceptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---

##### `resetAccountTakeoverRiskConfiguration` <a name="resetAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetAccountTakeoverRiskConfiguration"></a>

```typescript
public resetAccountTakeoverRiskConfiguration(): void
```

##### `resetCompromisedCredentialsRiskConfiguration` <a name="resetCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetCompromisedCredentialsRiskConfiguration"></a>

```typescript
public resetCompromisedCredentialsRiskConfiguration(): void
```

##### `resetRiskExceptionConfiguration` <a name="resetRiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.resetRiskExceptionConfiguration"></a>

```typescript
public resetRiskExceptionConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolRiskConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolRiskConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRiskConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfiguration">accountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfiguration">compromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfiguration">riskExceptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfigurationInput">accountTakeoverRiskConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfigurationInput">compromisedCredentialsRiskConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfigurationInput">riskExceptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountTakeoverRiskConfiguration`<sup>Required</sup> <a name="accountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfiguration"></a>

```typescript
public readonly accountTakeoverRiskConfiguration: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference</a>

---

##### `compromisedCredentialsRiskConfiguration`<sup>Required</sup> <a name="compromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfiguration"></a>

```typescript
public readonly compromisedCredentialsRiskConfiguration: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `riskExceptionConfiguration`<sup>Required</sup> <a name="riskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfiguration"></a>

```typescript
public readonly riskExceptionConfiguration: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference</a>

---

##### `accountTakeoverRiskConfigurationInput`<sup>Optional</sup> <a name="accountTakeoverRiskConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfigurationInput"></a>

```typescript
public readonly accountTakeoverRiskConfigurationInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `compromisedCredentialsRiskConfigurationInput`<sup>Optional</sup> <a name="compromisedCredentialsRiskConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfigurationInput"></a>

```typescript
public readonly compromisedCredentialsRiskConfigurationInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---

##### `riskExceptionConfigurationInput`<sup>Optional</sup> <a name="riskExceptionConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfigurationInput"></a>

```typescript
public readonly riskExceptionConfigurationInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.notifyConfiguration">notifyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify_configuration CognitoUserPoolRiskConfigurationAttachment#notify_configuration}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.actions"></a>

```typescript
public readonly actions: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}.

---

##### `notifyConfiguration`<sup>Optional</sup> <a name="notifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.property.notifyConfiguration"></a>

```typescript
public readonly notifyConfiguration: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify_configuration CognitoUserPoolRiskConfigurationAttachment#notify_configuration}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.highAction">highAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#high_action CognitoUserPoolRiskConfigurationAttachment#high_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.lowAction">lowAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#low_action CognitoUserPoolRiskConfigurationAttachment#low_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.mediumAction">mediumAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#medium_action CognitoUserPoolRiskConfigurationAttachment#medium_action}. |

---

##### `highAction`<sup>Optional</sup> <a name="highAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.highAction"></a>

```typescript
public readonly highAction: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#high_action CognitoUserPoolRiskConfigurationAttachment#high_action}.

---

##### `lowAction`<sup>Optional</sup> <a name="lowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.lowAction"></a>

```typescript
public readonly lowAction: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#low_action CognitoUserPoolRiskConfigurationAttachment#low_action}.

---

##### `mediumAction`<sup>Optional</sup> <a name="mediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.property.mediumAction"></a>

```typescript
public readonly mediumAction: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#medium_action CognitoUserPoolRiskConfigurationAttachment#medium_action}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction">eventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.notify">notify</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}. |

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction">eventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.notify">notify</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}. |

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction">eventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.notify">notify</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}. |

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail">blockEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#block_email CognitoUserPoolRiskConfigurationAttachment#block_email}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#from CognitoUserPoolRiskConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail">mfaEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#mfa_email CognitoUserPoolRiskConfigurationAttachment#mfa_email}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail">noActionEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#no_action_email CognitoUserPoolRiskConfigurationAttachment#no_action_email}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo">replyTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#reply_to CognitoUserPoolRiskConfigurationAttachment#reply_to}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn">sourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#source_arn CognitoUserPoolRiskConfigurationAttachment#source_arn}. |

---

##### `blockEmail`<sup>Optional</sup> <a name="blockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail"></a>

```typescript
public readonly blockEmail: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#block_email CognitoUserPoolRiskConfigurationAttachment#block_email}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#from CognitoUserPoolRiskConfigurationAttachment#from}.

---

##### `mfaEmail`<sup>Optional</sup> <a name="mfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail"></a>

```typescript
public readonly mfaEmail: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#mfa_email CognitoUserPoolRiskConfigurationAttachment#mfa_email}.

---

##### `noActionEmail`<sup>Optional</sup> <a name="noActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail"></a>

```typescript
public readonly noActionEmail: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#no_action_email CognitoUserPoolRiskConfigurationAttachment#no_action_email}.

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#reply_to CognitoUserPoolRiskConfigurationAttachment#reply_to}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#source_arn CognitoUserPoolRiskConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody">htmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody">textBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}. |

---

##### `htmlBody`<sup>Optional</sup> <a name="htmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}.

---

##### `textBody`<sup>Optional</sup> <a name="textBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody">htmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody">textBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}. |

---

##### `htmlBody`<sup>Optional</sup> <a name="htmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}.

---

##### `textBody`<sup>Optional</sup> <a name="textBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}.

---

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody">htmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody">textBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}. |

---

##### `htmlBody`<sup>Optional</sup> <a name="htmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}.

---

##### `textBody`<sup>Optional</sup> <a name="textBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}.

---

### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.eventFilter">eventFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_filter CognitoUserPoolRiskConfigurationAttachment#event_filter}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.actions"></a>

```typescript
public readonly actions: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}.

---

##### `eventFilter`<sup>Optional</sup> <a name="eventFilter" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.property.eventFilter"></a>

```typescript
public readonly eventFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_filter CognitoUserPoolRiskConfigurationAttachment#event_filter}.

---

### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.property.eventAction">eventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}. |

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}.

---

### CognitoUserPoolRiskConfigurationAttachmentConfig <a name="CognitoUserPoolRiskConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentConfig: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#client_id CognitoUserPoolRiskConfigurationAttachment#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#user_pool_id CognitoUserPoolRiskConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.accountTakeoverRiskConfiguration">accountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#account_takeover_risk_configuration CognitoUserPoolRiskConfigurationAttachment#account_takeover_risk_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.compromisedCredentialsRiskConfiguration">compromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#compromised_credentials_risk_configuration CognitoUserPoolRiskConfigurationAttachment#compromised_credentials_risk_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.riskExceptionConfiguration">riskExceptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#risk_exception_configuration CognitoUserPoolRiskConfigurationAttachment#risk_exception_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#client_id CognitoUserPoolRiskConfigurationAttachment#client_id}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#user_pool_id CognitoUserPoolRiskConfigurationAttachment#user_pool_id}.

---

##### `accountTakeoverRiskConfiguration`<sup>Optional</sup> <a name="accountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.accountTakeoverRiskConfiguration"></a>

```typescript
public readonly accountTakeoverRiskConfiguration: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#account_takeover_risk_configuration CognitoUserPoolRiskConfigurationAttachment#account_takeover_risk_configuration}.

---

##### `compromisedCredentialsRiskConfiguration`<sup>Optional</sup> <a name="compromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.compromisedCredentialsRiskConfiguration"></a>

```typescript
public readonly compromisedCredentialsRiskConfiguration: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#compromised_credentials_risk_configuration CognitoUserPoolRiskConfigurationAttachment#compromised_credentials_risk_configuration}.

---

##### `riskExceptionConfiguration`<sup>Optional</sup> <a name="riskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentConfig.property.riskExceptionConfiguration"></a>

```typescript
public readonly riskExceptionConfiguration: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#risk_exception_configuration CognitoUserPoolRiskConfigurationAttachment#risk_exception_configuration}.

---

### CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration <a name="CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const cognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration: cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.blockedIpRangeList">blockedIpRangeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#blocked_ip_range_list CognitoUserPoolRiskConfigurationAttachment#blocked_ip_range_list}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.skippedIpRangeList">skippedIpRangeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#skipped_ip_range_list CognitoUserPoolRiskConfigurationAttachment#skipped_ip_range_list}. |

---

##### `blockedIpRangeList`<sup>Optional</sup> <a name="blockedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.blockedIpRangeList"></a>

```typescript
public readonly blockedIpRangeList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#blocked_ip_range_list CognitoUserPoolRiskConfigurationAttachment#blocked_ip_range_list}.

---

##### `skippedIpRangeList`<sup>Optional</sup> <a name="skippedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.property.skippedIpRangeList"></a>

```typescript
public readonly skippedIpRangeList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_risk_configuration_attachment#skipped_ip_range_list CognitoUserPoolRiskConfigurationAttachment#skipped_ip_range_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetNotify">resetNotify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventAction` <a name="resetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```

##### `resetNotify` <a name="resetNotify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resetNotify"></a>

```typescript
public resetNotify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput">notifyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify">notify</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: string;
```

- *Type:* string

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput"></a>

```typescript
public readonly notifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetNotify">resetNotify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventAction` <a name="resetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```

##### `resetNotify` <a name="resetNotify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resetNotify"></a>

```typescript
public resetNotify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput">notifyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify">notify</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: string;
```

- *Type:* string

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput"></a>

```typescript
public readonly notifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetNotify">resetNotify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventAction` <a name="resetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```

##### `resetNotify` <a name="resetNotify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resetNotify"></a>

```typescript
public resetNotify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput">notifyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify">notify</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: string;
```

- *Type:* string

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput"></a>

```typescript
public readonly notifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction">putHighAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction">putLowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction">putMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction">resetHighAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction">resetLowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction">resetMediumAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHighAction` <a name="putHighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction"></a>

```typescript
public putHighAction(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `putLowAction` <a name="putLowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction"></a>

```typescript
public putLowAction(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `putMediumAction` <a name="putMediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction"></a>

```typescript
public putMediumAction(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `resetHighAction` <a name="resetHighAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction"></a>

```typescript
public resetHighAction(): void
```

##### `resetLowAction` <a name="resetLowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction"></a>

```typescript
public resetLowAction(): void
```

##### `resetMediumAction` <a name="resetMediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction"></a>

```typescript
public resetMediumAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction">highAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction">lowAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction">mediumAction</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput">highActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput">lowActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput">mediumActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `highAction`<sup>Required</sup> <a name="highAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction"></a>

```typescript
public readonly highAction: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a>

---

##### `lowAction`<sup>Required</sup> <a name="lowAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction"></a>

```typescript
public readonly lowAction: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a>

---

##### `mediumAction`<sup>Required</sup> <a name="mediumAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction"></a>

```typescript
public readonly mediumAction: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a>

---

##### `highActionInput`<sup>Optional</sup> <a name="highActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput"></a>

```typescript
public readonly highActionInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `lowActionInput`<sup>Optional</sup> <a name="lowActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput"></a>

```typescript
public readonly lowActionInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `mediumActionInput`<sup>Optional</sup> <a name="mediumActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput"></a>

```typescript
public readonly mediumActionInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetHtmlBody">resetHtmlBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetTextBody">resetTextBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHtmlBody` <a name="resetHtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetHtmlBody"></a>

```typescript
public resetHtmlBody(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetTextBody` <a name="resetTextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resetTextBody"></a>

```typescript
public resetTextBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput">htmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput">textBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody">textBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlBodyInput`<sup>Optional</sup> <a name="htmlBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput"></a>

```typescript
public readonly htmlBodyInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `textBodyInput`<sup>Optional</sup> <a name="textBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput"></a>

```typescript
public readonly textBodyInput: string;
```

- *Type:* string

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetHtmlBody">resetHtmlBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetTextBody">resetTextBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHtmlBody` <a name="resetHtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetHtmlBody"></a>

```typescript
public resetHtmlBody(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetTextBody` <a name="resetTextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resetTextBody"></a>

```typescript
public resetTextBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput">htmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput">textBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody">textBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlBodyInput`<sup>Optional</sup> <a name="htmlBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput"></a>

```typescript
public readonly htmlBodyInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `textBodyInput`<sup>Optional</sup> <a name="textBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput"></a>

```typescript
public readonly textBodyInput: string;
```

- *Type:* string

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetHtmlBody">resetHtmlBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetTextBody">resetTextBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHtmlBody` <a name="resetHtmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetHtmlBody"></a>

```typescript
public resetHtmlBody(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetTextBody` <a name="resetTextBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resetTextBody"></a>

```typescript
public resetTextBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput">htmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput">textBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody">textBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlBodyInput`<sup>Optional</sup> <a name="htmlBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput"></a>

```typescript
public readonly htmlBodyInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `textBodyInput`<sup>Optional</sup> <a name="textBodyInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput"></a>

```typescript
public readonly textBodyInput: string;
```

- *Type:* string

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail">putBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail">putMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail">putNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail">resetBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail">resetMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail">resetNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo">resetReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockEmail` <a name="putBlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail"></a>

```typescript
public putBlockEmail(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `putMfaEmail` <a name="putMfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail"></a>

```typescript
public putMfaEmail(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `putNoActionEmail` <a name="putNoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail"></a>

```typescript
public putNoActionEmail(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `resetBlockEmail` <a name="resetBlockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail"></a>

```typescript
public resetBlockEmail(): void
```

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetMfaEmail` <a name="resetMfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail"></a>

```typescript
public resetMfaEmail(): void
```

##### `resetNoActionEmail` <a name="resetNoActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail"></a>

```typescript
public resetNoActionEmail(): void
```

##### `resetReplyTo` <a name="resetReplyTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo"></a>

```typescript
public resetReplyTo(): void
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetSourceArn"></a>

```typescript
public resetSourceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail">blockEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail">mfaEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail">noActionEmail</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput">blockEmailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput">mfaEmailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput">noActionEmailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput">replyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo">replyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockEmail`<sup>Required</sup> <a name="blockEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail"></a>

```typescript
public readonly blockEmail: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a>

---

##### `mfaEmail`<sup>Required</sup> <a name="mfaEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail"></a>

```typescript
public readonly mfaEmail: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a>

---

##### `noActionEmail`<sup>Required</sup> <a name="noActionEmail" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail"></a>

```typescript
public readonly noActionEmail: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a>

---

##### `blockEmailInput`<sup>Optional</sup> <a name="blockEmailInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput"></a>

```typescript
public readonly blockEmailInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `mfaEmailInput`<sup>Optional</sup> <a name="mfaEmailInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput"></a>

```typescript
public readonly mfaEmailInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `noActionEmailInput`<sup>Optional</sup> <a name="noActionEmailInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput"></a>

```typescript
public readonly noActionEmailInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput"></a>

```typescript
public readonly replyToInput: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


### CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration">putNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetNotifyConfiguration">resetNotifyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putActions"></a>

```typescript
public putActions(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---

##### `putNotifyConfiguration` <a name="putNotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration"></a>

```typescript
public putNotifyConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetNotifyConfiguration` <a name="resetNotifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resetNotifyConfiguration"></a>

```typescript
public resetNotifyConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration">notifyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput">notifyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actions"></a>

```typescript
public readonly actions: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference</a>

---

##### `notifyConfiguration`<sup>Required</sup> <a name="notifyConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration"></a>

```typescript
public readonly notifyConfiguration: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---

##### `notifyConfigurationInput`<sup>Optional</sup> <a name="notifyConfigurationInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput"></a>

```typescript
public readonly notifyConfigurationInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---


### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventAction` <a name="resetEventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resetEventAction"></a>

```typescript
public resetEventAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---


### CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter">resetEventFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.putActions"></a>

```typescript
public putActions(value: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetEventFilter` <a name="resetEventFilter" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter"></a>

```typescript
public resetEventFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput">eventFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter">eventFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actions"></a>

```typescript
public readonly actions: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---

##### `eventFilterInput`<sup>Optional</sup> <a name="eventFilterInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput"></a>

```typescript
public readonly eventFilterInput: string[];
```

- *Type:* string[]

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter"></a>

```typescript
public readonly eventFilter: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---


### CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference <a name="CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList">resetBlockedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList">resetSkippedIpRangeList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockedIpRangeList` <a name="resetBlockedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList"></a>

```typescript
public resetBlockedIpRangeList(): void
```

##### `resetSkippedIpRangeList` <a name="resetSkippedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList"></a>

```typescript
public resetSkippedIpRangeList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput">blockedIpRangeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput">skippedIpRangeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeList">blockedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeList">skippedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockedIpRangeListInput`<sup>Optional</sup> <a name="blockedIpRangeListInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput"></a>

```typescript
public readonly blockedIpRangeListInput: string[];
```

- *Type:* string[]

---

##### `skippedIpRangeListInput`<sup>Optional</sup> <a name="skippedIpRangeListInput" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput"></a>

```typescript
public readonly skippedIpRangeListInput: string[];
```

- *Type:* string[]

---

##### `blockedIpRangeList`<sup>Required</sup> <a name="blockedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeList"></a>

```typescript
public readonly blockedIpRangeList: string[];
```

- *Type:* string[]

---

##### `skippedIpRangeList`<sup>Required</sup> <a name="skippedIpRangeList" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeList"></a>

```typescript
public readonly skippedIpRangeList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRiskConfigurationAttachment.CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---



