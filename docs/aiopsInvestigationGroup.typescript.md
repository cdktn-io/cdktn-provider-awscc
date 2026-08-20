# `aiopsInvestigationGroup` Submodule <a name="`aiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.aiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiopsInvestigationGroup <a name="AiopsInvestigationGroup" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroup(scope: Construct, id: string, config: AiopsInvestigationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig">AiopsInvestigationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig">AiopsInvestigationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels">putChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations">putCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels">resetChatbotNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations">resetCrossAccountConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy">resetInvestigationGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled">resetIsCloudTrailEventHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries">resetTagKeyBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChatbotNotificationChannels` <a name="putChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels"></a>

```typescript
public putChatbotNotificationChannels(value: IResolvable | AiopsInvestigationGroupChatbotNotificationChannels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putChatbotNotificationChannels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

---

##### `putCrossAccountConfigurations` <a name="putCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations"></a>

```typescript
public putCrossAccountConfigurations(value: IResolvable | AiopsInvestigationGroupCrossAccountConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putCrossAccountConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: AiopsInvestigationGroupEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | AiopsInvestigationGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

---

##### `resetChatbotNotificationChannels` <a name="resetChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetChatbotNotificationChannels"></a>

```typescript
public resetChatbotNotificationChannels(): void
```

##### `resetCrossAccountConfigurations` <a name="resetCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetCrossAccountConfigurations"></a>

```typescript
public resetCrossAccountConfigurations(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetInvestigationGroupPolicy` <a name="resetInvestigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetInvestigationGroupPolicy"></a>

```typescript
public resetInvestigationGroupPolicy(): void
```

##### `resetIsCloudTrailEventHistoryEnabled` <a name="resetIsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetIsCloudTrailEventHistoryEnabled"></a>

```typescript
public resetIsCloudTrailEventHistoryEnabled(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTagKeyBoundaries` <a name="resetTagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTagKeyBoundaries"></a>

```typescript
public resetTagKeyBoundaries(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiopsInvestigationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels">chatbotNotificationChannels</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations">crossAccountConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy">lastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput">chatbotNotificationChannelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput">crossAccountConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput">investigationGroupPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput">isCloudTrailEventHistoryEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput">tagKeyBoundariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy">investigationGroupPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">isCloudTrailEventHistoryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries">tagKeyBoundaries</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `chatbotNotificationChannels`<sup>Required</sup> <a name="chatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```typescript
public readonly chatbotNotificationChannels: AiopsInvestigationGroupChatbotNotificationChannelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList">AiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `crossAccountConfigurations`<sup>Required</sup> <a name="crossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```typescript
public readonly crossAccountConfigurations: AiopsInvestigationGroupCrossAccountConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList">AiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: AiopsInvestigationGroupEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference">AiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.lastModifiedBy"></a>

```typescript
public readonly lastModifiedBy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tags"></a>

```typescript
public readonly tags: AiopsInvestigationGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList">AiopsInvestigationGroupTagsList</a>

---

##### `chatbotNotificationChannelsInput`<sup>Optional</sup> <a name="chatbotNotificationChannelsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.chatbotNotificationChannelsInput"></a>

```typescript
public readonly chatbotNotificationChannelsInput: IResolvable | AiopsInvestigationGroupChatbotNotificationChannels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

---

##### `crossAccountConfigurationsInput`<sup>Optional</sup> <a name="crossAccountConfigurationsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.crossAccountConfigurationsInput"></a>

```typescript
public readonly crossAccountConfigurationsInput: IResolvable | AiopsInvestigationGroupCrossAccountConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: IResolvable | AiopsInvestigationGroupEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---

##### `investigationGroupPolicyInput`<sup>Optional</sup> <a name="investigationGroupPolicyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicyInput"></a>

```typescript
public readonly investigationGroupPolicyInput: string;
```

- *Type:* string

---

##### `isCloudTrailEventHistoryEnabledInput`<sup>Optional</sup> <a name="isCloudTrailEventHistoryEnabledInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabledInput"></a>

```typescript
public readonly isCloudTrailEventHistoryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagKeyBoundariesInput`<sup>Optional</sup> <a name="tagKeyBoundariesInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundariesInput"></a>

```typescript
public readonly tagKeyBoundariesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AiopsInvestigationGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

---

##### `investigationGroupPolicy`<sup>Required</sup> <a name="investigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```typescript
public readonly investigationGroupPolicy: string;
```

- *Type:* string

---

##### `isCloudTrailEventHistoryEnabled`<sup>Required</sup> <a name="isCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```typescript
public readonly isCloudTrailEventHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tagKeyBoundaries`<sup>Required</sup> <a name="tagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```typescript
public readonly tagKeyBoundaries: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiopsInvestigationGroupChatbotNotificationChannels <a name="AiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

const aiopsInvestigationGroupChatbotNotificationChannels: aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns">chatConfigurationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}. |

---

##### `chatConfigurationArns`<sup>Optional</sup> <a name="chatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.chatConfigurationArns"></a>

```typescript
public readonly chatConfigurationArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}.

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}.

---

### AiopsInvestigationGroupConfig <a name="AiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

const aiopsInvestigationGroupConfig: aiopsInvestigationGroup.AiopsInvestigationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name">name</a></code> | <code>string</code> | User friendly name for resources. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels">chatbotNotificationChannels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]</code> | An array of key-value pairs of notification channels to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations">crossAccountConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]</code> | An array of cross account configurations. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy">investigationGroupPolicy</a></code> | <code>string</code> | Investigation Group policy. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled">isCloudTrailEventHistoryEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to enable cloud trail history. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | The number of days to retain the investigation group. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Investigation Role's ARN. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries">tagKeyBoundaries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User friendly name for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}

---

##### `chatbotNotificationChannels`<sup>Optional</sup> <a name="chatbotNotificationChannels" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.chatbotNotificationChannels"></a>

```typescript
public readonly chatbotNotificationChannels: IResolvable | AiopsInvestigationGroupChatbotNotificationChannels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

An array of key-value pairs of notification channels to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}

---

##### `crossAccountConfigurations`<sup>Optional</sup> <a name="crossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.crossAccountConfigurations"></a>

```typescript
public readonly crossAccountConfigurations: IResolvable | AiopsInvestigationGroupCrossAccountConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

An array of cross account configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: AiopsInvestigationGroupEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}.

---

##### `investigationGroupPolicy`<sup>Optional</sup> <a name="investigationGroupPolicy" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.investigationGroupPolicy"></a>

```typescript
public readonly investigationGroupPolicy: string;
```

- *Type:* string

Investigation Group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}

---

##### `isCloudTrailEventHistoryEnabled`<sup>Optional</sup> <a name="isCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.isCloudTrailEventHistoryEnabled"></a>

```typescript
public readonly isCloudTrailEventHistoryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to enable cloud trail history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

The number of days to retain the investigation group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}

---

##### `tagKeyBoundaries`<sup>Optional</sup> <a name="tagKeyBoundaries" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tagKeyBoundaries"></a>

```typescript
public readonly tagKeyBoundaries: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AiopsInvestigationGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}

---

### AiopsInvestigationGroupCrossAccountConfigurations <a name="AiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

const aiopsInvestigationGroupCrossAccountConfigurations: aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn">sourceRoleArn</a></code> | <code>string</code> | The Investigation Role's ARN. |

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations.property.sourceRoleArn"></a>

```typescript
public readonly sourceRoleArn: string;
```

- *Type:* string

The Investigation Role's ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#source_role_arn AiopsInvestigationGroup#source_role_arn}

---

### AiopsInvestigationGroupEncryptionConfig <a name="AiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

const aiopsInvestigationGroupEncryptionConfig: aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType">encryptionConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}. |

---

##### `encryptionConfigurationType`<sup>Optional</sup> <a name="encryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.encryptionConfigurationType"></a>

```typescript
public readonly encryptionConfigurationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}.

---

### AiopsInvestigationGroupTags <a name="AiopsInvestigationGroupTags" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

const aiopsInvestigationGroupTags: aiopsInvestigationGroup.AiopsInvestigationGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiopsInvestigationGroupChatbotNotificationChannelsList <a name="AiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```typescript
public get(index: number): AiopsInvestigationGroupChatbotNotificationChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupChatbotNotificationChannels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>[]

---


### AiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="AiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns">resetChatConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChatConfigurationArns` <a name="resetChatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetChatConfigurationArns"></a>

```typescript
public resetChatConfigurationArns(): void
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resetSnsTopicArn"></a>

```typescript
public resetSnsTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput">chatConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">chatConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chatConfigurationArnsInput`<sup>Optional</sup> <a name="chatConfigurationArnsInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArnsInput"></a>

```typescript
public readonly chatConfigurationArnsInput: string[];
```

- *Type:* string[]

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `chatConfigurationArns`<sup>Required</sup> <a name="chatConfigurationArns" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```typescript
public readonly chatConfigurationArns: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupChatbotNotificationChannels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupChatbotNotificationChannels">AiopsInvestigationGroupChatbotNotificationChannels</a>

---


### AiopsInvestigationGroupCrossAccountConfigurationsList <a name="AiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```typescript
public get(index: number): AiopsInvestigationGroupCrossAccountConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupCrossAccountConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>[]

---


### AiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="AiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn">resetSourceRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceRoleArn` <a name="resetSourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resetSourceRoleArn"></a>

```typescript
public resetSourceRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput">sourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">sourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceRoleArnInput`<sup>Optional</sup> <a name="sourceRoleArnInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArnInput"></a>

```typescript
public readonly sourceRoleArnInput: string;
```

- *Type:* string

---

##### `sourceRoleArn`<sup>Required</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```typescript
public readonly sourceRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupCrossAccountConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupCrossAccountConfigurations">AiopsInvestigationGroupCrossAccountConfigurations</a>

---


### AiopsInvestigationGroupEncryptionConfigOutputReference <a name="AiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType">resetEncryptionConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionConfigurationType` <a name="resetEncryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetEncryptionConfigurationType"></a>

```typescript
public resetEncryptionConfigurationType(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput">encryptionConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">encryptionConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfigurationTypeInput`<sup>Optional</sup> <a name="encryptionConfigurationTypeInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationTypeInput"></a>

```typescript
public readonly encryptionConfigurationTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationType`<sup>Required</sup> <a name="encryptionConfigurationType" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```typescript
public readonly encryptionConfigurationType: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupEncryptionConfig">AiopsInvestigationGroupEncryptionConfig</a>

---


### AiopsInvestigationGroupTagsList <a name="AiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get"></a>

```typescript
public get(index: number): AiopsInvestigationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>[]

---


### AiopsInvestigationGroupTagsOutputReference <a name="AiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```typescript
import { aiopsInvestigationGroup } from '@cdktn/provider-awscc'

new aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiopsInvestigationGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.aiopsInvestigationGroup.AiopsInvestigationGroupTags">AiopsInvestigationGroupTags</a>

---



