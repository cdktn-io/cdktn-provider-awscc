# `chatbotMicrosoftTeamsChannelConfiguration` Submodule <a name="`chatbotMicrosoftTeamsChannelConfiguration` Submodule" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotMicrosoftTeamsChannelConfiguration <a name="ChatbotMicrosoftTeamsChannelConfiguration" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration awscc_chatbot_microsoft_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

new chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration(scope: Construct, id: string, config: ChatbotMicrosoftTeamsChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig">ChatbotMicrosoftTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig">ChatbotMicrosoftTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetCustomizationResourceArns">resetCustomizationResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetGuardrailPolicies">resetGuardrailPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetSnsTopicArns">resetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTeamsChannelName">resetTeamsChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetUserRoleRequired">resetUserRoleRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | ChatbotMicrosoftTeamsChannelConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]

---

##### `resetCustomizationResourceArns` <a name="resetCustomizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetCustomizationResourceArns"></a>

```typescript
public resetCustomizationResourceArns(): void
```

##### `resetGuardrailPolicies` <a name="resetGuardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetGuardrailPolicies"></a>

```typescript
public resetGuardrailPolicies(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetSnsTopicArns` <a name="resetSnsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetSnsTopicArns"></a>

```typescript
public resetSnsTopicArns(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTeamsChannelName` <a name="resetTeamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetTeamsChannelName"></a>

```typescript
public resetTeamsChannelName(): void
```

##### `resetUserRoleRequired` <a name="resetUserRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.resetUserRoleRequired"></a>

```typescript
public resetUserRoleRequired(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChatbotMicrosoftTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChatbotMicrosoftTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChatbotMicrosoftTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotMicrosoftTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList">ChatbotMicrosoftTeamsChannelConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationNameInput">configurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArnsInput">customizationResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPoliciesInput">guardrailPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArnsInput">snsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelIdInput">teamsChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelNameInput">teamsChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantIdInput">teamsTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequiredInput">userRoleRequiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationName">configurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns">customizationResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies">guardrailPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId">teamsChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName">teamsChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId">teamsTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired">userRoleRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tags"></a>

```typescript
public readonly tags: ChatbotMicrosoftTeamsChannelConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList">ChatbotMicrosoftTeamsChannelConfigurationTagsList</a>

---

##### `configurationNameInput`<sup>Optional</sup> <a name="configurationNameInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationNameInput"></a>

```typescript
public readonly configurationNameInput: string;
```

- *Type:* string

---

##### `customizationResourceArnsInput`<sup>Optional</sup> <a name="customizationResourceArnsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArnsInput"></a>

```typescript
public readonly customizationResourceArnsInput: string[];
```

- *Type:* string[]

---

##### `guardrailPoliciesInput`<sup>Optional</sup> <a name="guardrailPoliciesInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPoliciesInput"></a>

```typescript
public readonly guardrailPoliciesInput: string[];
```

- *Type:* string[]

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `snsTopicArnsInput`<sup>Optional</sup> <a name="snsTopicArnsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```typescript
public readonly snsTopicArnsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChatbotMicrosoftTeamsChannelConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `teamsChannelIdInput`<sup>Optional</sup> <a name="teamsChannelIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelIdInput"></a>

```typescript
public readonly teamsChannelIdInput: string;
```

- *Type:* string

---

##### `teamsChannelNameInput`<sup>Optional</sup> <a name="teamsChannelNameInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelNameInput"></a>

```typescript
public readonly teamsChannelNameInput: string;
```

- *Type:* string

---

##### `teamsTenantIdInput`<sup>Optional</sup> <a name="teamsTenantIdInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantIdInput"></a>

```typescript
public readonly teamsTenantIdInput: string;
```

- *Type:* string

---

##### `userRoleRequiredInput`<sup>Optional</sup> <a name="userRoleRequiredInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequiredInput"></a>

```typescript
public readonly userRoleRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

---

##### `customizationResourceArns`<sup>Required</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.customizationResourceArns"></a>

```typescript
public readonly customizationResourceArns: string[];
```

- *Type:* string[]

---

##### `guardrailPolicies`<sup>Required</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.guardrailPolicies"></a>

```typescript
public readonly guardrailPolicies: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `teamsChannelId`<sup>Required</sup> <a name="teamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelId"></a>

```typescript
public readonly teamsChannelId: string;
```

- *Type:* string

---

##### `teamsChannelName`<sup>Required</sup> <a name="teamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsChannelName"></a>

```typescript
public readonly teamsChannelName: string;
```

- *Type:* string

---

##### `teamsTenantId`<sup>Required</sup> <a name="teamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.teamsTenantId"></a>

```typescript
public readonly teamsTenantId: string;
```

- *Type:* string

---

##### `userRoleRequired`<sup>Required</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.userRoleRequired"></a>

```typescript
public readonly userRoleRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotMicrosoftTeamsChannelConfigurationConfig <a name="ChatbotMicrosoftTeamsChannelConfigurationConfig" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.Initializer"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

const chatbotMicrosoftTeamsChannelConfigurationConfig: chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.configurationName">configurationName</a></code> | <code>string</code> | The name of the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that defines the permissions for AWS Chatbot. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamId">teamId</a></code> | <code>string</code> | The id of the Microsoft Teams team. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelId">teamsChannelId</a></code> | <code>string</code> | The id of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsTenantId">teamsTenantId</a></code> | <code>string</code> | The id of the Microsoft Teams tenant. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.customizationResourceArns">customizationResourceArns</a></code> | <code>string[]</code> | ARNs of Custom Actions to associate with notifications in the provided chat channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.guardrailPolicies">guardrailPolicies</a></code> | <code>string[]</code> | The list of IAM policy ARNs that are applied as channel guardrails. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Specifies the logging level for this configuration:ERROR,INFO or NONE. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]</code> | The tags to add to the configuration. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelName">teamsChannelName</a></code> | <code>string</code> | The name of the Microsoft Teams channel. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.userRoleRequired">userRoleRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables use of a user role requirement in your chat configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The name of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#configuration_name ChatbotMicrosoftTeamsChannelConfiguration#configuration_name}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that defines the permissions for AWS Chatbot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#iam_role_arn ChatbotMicrosoftTeamsChannelConfiguration#iam_role_arn}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The id of the Microsoft Teams team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#team_id ChatbotMicrosoftTeamsChannelConfiguration#team_id}

---

##### `teamsChannelId`<sup>Required</sup> <a name="teamsChannelId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelId"></a>

```typescript
public readonly teamsChannelId: string;
```

- *Type:* string

The id of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_id ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_id}

---

##### `teamsTenantId`<sup>Required</sup> <a name="teamsTenantId" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsTenantId"></a>

```typescript
public readonly teamsTenantId: string;
```

- *Type:* string

The id of the Microsoft Teams tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_tenant_id ChatbotMicrosoftTeamsChannelConfiguration#teams_tenant_id}

---

##### `customizationResourceArns`<sup>Optional</sup> <a name="customizationResourceArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.customizationResourceArns"></a>

```typescript
public readonly customizationResourceArns: string[];
```

- *Type:* string[]

ARNs of Custom Actions to associate with notifications in the provided chat channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#customization_resource_arns ChatbotMicrosoftTeamsChannelConfiguration#customization_resource_arns}

---

##### `guardrailPolicies`<sup>Optional</sup> <a name="guardrailPolicies" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.guardrailPolicies"></a>

```typescript
public readonly guardrailPolicies: string[];
```

- *Type:* string[]

The list of IAM policy ARNs that are applied as channel guardrails.

The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#guardrail_policies ChatbotMicrosoftTeamsChannelConfiguration#guardrail_policies}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Specifies the logging level for this configuration:ERROR,INFO or NONE.

This property affects the log entries pushed to Amazon CloudWatch logs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#logging_level ChatbotMicrosoftTeamsChannelConfiguration#logging_level}

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#sns_topic_arns ChatbotMicrosoftTeamsChannelConfiguration#sns_topic_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChatbotMicrosoftTeamsChannelConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]

The tags to add to the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#tags ChatbotMicrosoftTeamsChannelConfiguration#tags}

---

##### `teamsChannelName`<sup>Optional</sup> <a name="teamsChannelName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.teamsChannelName"></a>

```typescript
public readonly teamsChannelName: string;
```

- *Type:* string

The name of the Microsoft Teams channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#teams_channel_name ChatbotMicrosoftTeamsChannelConfiguration#teams_channel_name}

---

##### `userRoleRequired`<sup>Optional</sup> <a name="userRoleRequired" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationConfig.property.userRoleRequired"></a>

```typescript
public readonly userRoleRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables use of a user role requirement in your chat configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#user_role_required ChatbotMicrosoftTeamsChannelConfiguration#user_role_required}

---

### ChatbotMicrosoftTeamsChannelConfigurationTags <a name="ChatbotMicrosoftTeamsChannelConfigurationTags" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.Initializer"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

const chatbotMicrosoftTeamsChannelConfigurationTags: chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#key ChatbotMicrosoftTeamsChannelConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#value ChatbotMicrosoftTeamsChannelConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#key ChatbotMicrosoftTeamsChannelConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chatbot_microsoft_teams_channel_configuration#value ChatbotMicrosoftTeamsChannelConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotMicrosoftTeamsChannelConfigurationTagsList <a name="ChatbotMicrosoftTeamsChannelConfigurationTagsList" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

new chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get"></a>

```typescript
public get(index: number): ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotMicrosoftTeamsChannelConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>[]

---


### ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference <a name="ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { chatbotMicrosoftTeamsChannelConfiguration } from '@cdktn/provider-awscc'

new chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotMicrosoftTeamsChannelConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotMicrosoftTeamsChannelConfiguration.ChatbotMicrosoftTeamsChannelConfigurationTags">ChatbotMicrosoftTeamsChannelConfigurationTags</a>

---



