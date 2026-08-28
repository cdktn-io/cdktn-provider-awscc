# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktn/provider-awscc.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktn/provider-awscc.connectUser.ConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUser(scope: Construct, id: string, config: ConnectUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig">ConnectUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig">ConnectUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs">putAfterContactWorkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs">putAutoAcceptConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo">putIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs">putPersistentConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig">putPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs">putPhoneNumberConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies">putUserProficiencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs">putVoiceEnhancementConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs">resetAfterContactWorkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs">resetAutoAcceptConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId">resetDirectoryUserId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn">resetHierarchyGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo">resetIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs">resetPersistentConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig">resetPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs">resetPhoneNumberConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies">resetUserProficiencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs">resetVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUser.ConnectUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUser.ConnectUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterContactWorkConfigs` <a name="putAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs"></a>

```typescript
public putAfterContactWorkConfigs(value: IResolvable | ConnectUserAfterContactWorkConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

---

##### `putAutoAcceptConfigs` <a name="putAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs"></a>

```typescript
public putAutoAcceptConfigs(value: IResolvable | ConnectUserAutoAcceptConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

---

##### `putIdentityInfo` <a name="putIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo"></a>

```typescript
public putIdentityInfo(value: ConnectUserIdentityInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `putPersistentConnectionConfigs` <a name="putPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs"></a>

```typescript
public putPersistentConnectionConfigs(value: IResolvable | ConnectUserPersistentConnectionConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

---

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig"></a>

```typescript
public putPhoneConfig(value: ConnectUserPhoneConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `putPhoneNumberConfigs` <a name="putPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs"></a>

```typescript
public putPhoneNumberConfigs(value: IResolvable | ConnectUserPhoneNumberConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectUserTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

---

##### `putUserProficiencies` <a name="putUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies"></a>

```typescript
public putUserProficiencies(value: IResolvable | ConnectUserUserProficiencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

---

##### `putVoiceEnhancementConfigs` <a name="putVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs"></a>

```typescript
public putVoiceEnhancementConfigs(value: IResolvable | ConnectUserVoiceEnhancementConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

---

##### `resetAfterContactWorkConfigs` <a name="resetAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs"></a>

```typescript
public resetAfterContactWorkConfigs(): void
```

##### `resetAutoAcceptConfigs` <a name="resetAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs"></a>

```typescript
public resetAutoAcceptConfigs(): void
```

##### `resetDirectoryUserId` <a name="resetDirectoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId"></a>

```typescript
public resetDirectoryUserId(): void
```

##### `resetHierarchyGroupArn` <a name="resetHierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn"></a>

```typescript
public resetHierarchyGroupArn(): void
```

##### `resetIdentityInfo` <a name="resetIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo"></a>

```typescript
public resetIdentityInfo(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPersistentConnectionConfigs` <a name="resetPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs"></a>

```typescript
public resetPersistentConnectionConfigs(): void
```

##### `resetPhoneConfig` <a name="resetPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig"></a>

```typescript
public resetPhoneConfig(): void
```

##### `resetPhoneNumberConfigs` <a name="resetPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs"></a>

```typescript
public resetPhoneNumberConfigs(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserProficiencies` <a name="resetUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies"></a>

```typescript
public resetUserProficiencies(): void
```

##### `resetVoiceEnhancementConfigs` <a name="resetVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs"></a>

```typescript
public resetVoiceEnhancementConfigs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

connectUser.ConnectUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

connectUser.ConnectUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

connectUser.ConnectUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

connectUser.ConnectUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs">afterContactWorkConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs">autoAcceptConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs">persistentConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs">phoneNumberConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn">userArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies">userProficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs">voiceEnhancementConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput">afterContactWorkConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput">autoAcceptConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput">directoryUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput">hierarchyGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput">identityInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput">persistentConnectionConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput">phoneConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput">phoneNumberConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput">routingProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput">securityProfileArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput">userProficienciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput">voiceEnhancementConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId">directoryUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns">securityProfileArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `afterContactWorkConfigs`<sup>Required</sup> <a name="afterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs"></a>

```typescript
public readonly afterContactWorkConfigs: ConnectUserAfterContactWorkConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a>

---

##### `autoAcceptConfigs`<sup>Required</sup> <a name="autoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs"></a>

```typescript
public readonly autoAcceptConfigs: ConnectUserAutoAcceptConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityInfo`<sup>Required</sup> <a name="identityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo"></a>

```typescript
public readonly identityInfo: ConnectUserIdentityInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `persistentConnectionConfigs`<sup>Required</sup> <a name="persistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs"></a>

```typescript
public readonly persistentConnectionConfigs: ConnectUserPersistentConnectionConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectUserPhoneConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `phoneNumberConfigs`<sup>Required</sup> <a name="phoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs"></a>

```typescript
public readonly phoneNumberConfigs: ConnectUserPhoneNumberConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tags"></a>

```typescript
public readonly tags: ConnectUserTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a>

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

---

##### `userProficiencies`<sup>Required</sup> <a name="userProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies"></a>

```typescript
public readonly userProficiencies: ConnectUserUserProficienciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a>

---

##### `voiceEnhancementConfigs`<sup>Required</sup> <a name="voiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs"></a>

```typescript
public readonly voiceEnhancementConfigs: ConnectUserVoiceEnhancementConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a>

---

##### `afterContactWorkConfigsInput`<sup>Optional</sup> <a name="afterContactWorkConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput"></a>

```typescript
public readonly afterContactWorkConfigsInput: IResolvable | ConnectUserAfterContactWorkConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

---

##### `autoAcceptConfigsInput`<sup>Optional</sup> <a name="autoAcceptConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput"></a>

```typescript
public readonly autoAcceptConfigsInput: IResolvable | ConnectUserAutoAcceptConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

---

##### `directoryUserIdInput`<sup>Optional</sup> <a name="directoryUserIdInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```typescript
public readonly directoryUserIdInput: string;
```

- *Type:* string

---

##### `hierarchyGroupArnInput`<sup>Optional</sup> <a name="hierarchyGroupArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput"></a>

```typescript
public readonly hierarchyGroupArnInput: string;
```

- *Type:* string

---

##### `identityInfoInput`<sup>Optional</sup> <a name="identityInfoInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput"></a>

```typescript
public readonly identityInfoInput: IResolvable | ConnectUserIdentityInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `persistentConnectionConfigsInput`<sup>Optional</sup> <a name="persistentConnectionConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput"></a>

```typescript
public readonly persistentConnectionConfigsInput: IResolvable | ConnectUserPersistentConnectionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput"></a>

```typescript
public readonly phoneConfigInput: IResolvable | ConnectUserPhoneConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `phoneNumberConfigsInput`<sup>Optional</sup> <a name="phoneNumberConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput"></a>

```typescript
public readonly phoneNumberConfigsInput: IResolvable | ConnectUserPhoneNumberConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

---

##### `routingProfileArnInput`<sup>Optional</sup> <a name="routingProfileArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput"></a>

```typescript
public readonly routingProfileArnInput: string;
```

- *Type:* string

---

##### `securityProfileArnsInput`<sup>Optional</sup> <a name="securityProfileArnsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput"></a>

```typescript
public readonly securityProfileArnsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectUserTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `userProficienciesInput`<sup>Optional</sup> <a name="userProficienciesInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput"></a>

```typescript
public readonly userProficienciesInput: IResolvable | ConnectUserUserProficiencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

---

##### `voiceEnhancementConfigsInput`<sup>Optional</sup> <a name="voiceEnhancementConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput"></a>

```typescript
public readonly voiceEnhancementConfigsInput: IResolvable | ConnectUserVoiceEnhancementConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

---

##### `directoryUserId`<sup>Required</sup> <a name="directoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId"></a>

```typescript
public readonly directoryUserId: string;
```

- *Type:* string

---

##### `hierarchyGroupArn`<sup>Required</sup> <a name="hierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn"></a>

```typescript
public readonly hierarchyGroupArn: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

---

##### `securityProfileArns`<sup>Required</sup> <a name="securityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns"></a>

```typescript
public readonly securityProfileArns: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserAfterContactWorkConfigs <a name="ConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserAfterContactWorkConfigs: connectUser.ConnectUserAfterContactWorkConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig">afterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig">agentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `afterContactWorkConfig`<sup>Optional</sup> <a name="afterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig"></a>

```typescript
public readonly afterContactWorkConfig: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_config ConnectUser#after_contact_work_config}

---

##### `agentFirstCallbackAfterContactWorkConfig`<sup>Optional</sup> <a name="agentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig"></a>

```typescript
public readonly agentFirstCallbackAfterContactWorkConfig: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#agent_first_callback_after_contact_work_config ConnectUser#agent_first_callback_after_contact_work_config}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserAfterContactWorkConfigsAfterContactWorkConfig: connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>string</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `afterContactWorkMode`<sup>Optional</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode"></a>

```typescript
public readonly afterContactWorkMode: string;
```

- *Type:* string

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig: connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>string</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `afterContactWorkMode`<sup>Optional</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode"></a>

```typescript
public readonly afterContactWorkMode: string;
```

- *Type:* string

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAutoAcceptConfigs <a name="ConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserAutoAcceptConfigs: connectUser.ConnectUserAutoAcceptConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept">agentFirstCallbackAutoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | The agent first callback auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `agentFirstCallbackAutoAccept`<sup>Optional</sup> <a name="agentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept"></a>

```typescript
public readonly agentFirstCallbackAutoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The agent first callback auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#agent_first_callback_auto_accept ConnectUser#agent_first_callback_auto_accept}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserConfig: connectUser.ConnectUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | The identifier of the routing profile for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns">securityProfileArns</a></code> | <code>string[]</code> | One or more security profile arns for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username">username</a></code> | <code>string</code> | The user name for the account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs">afterContactWorkConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]</code> | After Contact Work configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs">autoAcceptConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]</code> | Auto-accept configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId">directoryUserId</a></code> | <code>string</code> | The identifier of the user account in the directory used for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>string</code> | The identifier of the hierarchy group for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | The information about the identity of the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password">password</a></code> | <code>string</code> | The password for the user account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs">persistentConnectionConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]</code> | Persistent Connection configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | The phone settings for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs">phoneNumberConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]</code> | Phone Number configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies">userProficiencies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]</code> | One or more predefined attributes assigned to a user, with a level that indicates how skilled they are. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs">voiceEnhancementConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]</code> | Voice Enhancement configurations of a user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

The identifier of the routing profile for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}

---

##### `securityProfileArns`<sup>Required</sup> <a name="securityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns"></a>

```typescript
public readonly securityProfileArns: string[];
```

- *Type:* string[]

One or more security profile arns for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#username ConnectUser#username}

---

##### `afterContactWorkConfigs`<sup>Optional</sup> <a name="afterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs"></a>

```typescript
public readonly afterContactWorkConfigs: IResolvable | ConnectUserAfterContactWorkConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

After Contact Work configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}

---

##### `autoAcceptConfigs`<sup>Optional</sup> <a name="autoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs"></a>

```typescript
public readonly autoAcceptConfigs: IResolvable | ConnectUserAutoAcceptConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

Auto-accept configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}

---

##### `directoryUserId`<sup>Optional</sup> <a name="directoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```typescript
public readonly directoryUserId: string;
```

- *Type:* string

The identifier of the user account in the directory used for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}

---

##### `hierarchyGroupArn`<sup>Optional</sup> <a name="hierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn"></a>

```typescript
public readonly hierarchyGroupArn: string;
```

- *Type:* string

The identifier of the hierarchy group for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}

---

##### `identityInfo`<sup>Optional</sup> <a name="identityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo"></a>

```typescript
public readonly identityInfo: ConnectUserIdentityInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

The information about the identity of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the user account.

A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#password ConnectUser#password}

---

##### `persistentConnectionConfigs`<sup>Optional</sup> <a name="persistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs"></a>

```typescript
public readonly persistentConnectionConfigs: IResolvable | ConnectUserPersistentConnectionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

Persistent Connection configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectUserPhoneConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

The phone settings for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}

---

##### `phoneNumberConfigs`<sup>Optional</sup> <a name="phoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs"></a>

```typescript
public readonly phoneNumberConfigs: IResolvable | ConnectUserPhoneNumberConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

Phone Number configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectUserTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#tags ConnectUser#tags}

---

##### `userProficiencies`<sup>Optional</sup> <a name="userProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies"></a>

```typescript
public readonly userProficiencies: IResolvable | ConnectUserUserProficiencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}

---

##### `voiceEnhancementConfigs`<sup>Optional</sup> <a name="voiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs"></a>

```typescript
public readonly voiceEnhancementConfigs: IResolvable | ConnectUserVoiceEnhancementConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

Voice Enhancement configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserIdentityInfo: connectUser.ConnectUserIdentityInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email">email</a></code> | <code>string</code> | The email address. If you are using SAML for identity management and include this parameter, an error is returned. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName">firstName</a></code> | <code>string</code> | The first name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName">lastName</a></code> | <code>string</code> | The last name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile">mobile</a></code> | <code>string</code> | The mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail">secondaryEmail</a></code> | <code>string</code> | The secondary email address. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address. If you are using SAML for identity management and include this parameter, an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#email ConnectUser#email}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

The first name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#first_name ConnectUser#first_name}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

The last name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#last_name ConnectUser#last_name}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile"></a>

```typescript
public readonly mobile: string;
```

- *Type:* string

The mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#mobile ConnectUser#mobile}

---

##### `secondaryEmail`<sup>Optional</sup> <a name="secondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail"></a>

```typescript
public readonly secondaryEmail: string;
```

- *Type:* string

The secondary email address.

If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#secondary_email ConnectUser#secondary_email}

---

### ConnectUserPersistentConnectionConfigs <a name="ConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserPersistentConnectionConfigs: connectUser.ConnectUserPersistentConnectionConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection">persistentConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | The Persistent Connection setting. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `persistentConnection`<sup>Optional</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserPhoneConfig: connectUser.ConnectUserPhoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | The After Call Work (ACW) timeout setting, in seconds. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection">persistentConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | The Persistent Connection setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType">phoneType</a></code> | <code>string</code> | The phone type. |

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `deskPhoneNumber`<sup>Optional</sup> <a name="deskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}

---

##### `persistentConnection`<sup>Optional</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

##### `phoneType`<sup>Optional</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserPhoneNumberConfigs <a name="ConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserPhoneNumberConfigs: connectUser.ConnectUserPhoneNumberConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType">phoneType</a></code> | <code>string</code> | The phone type. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#phone_number ConnectUser#phone_number}

---

##### `phoneType`<sup>Optional</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserTags <a name="ConnectUserTags" id="@cdktn/provider-awscc.connectUser.ConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserTags: connectUser.ConnectUserTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#key ConnectUser#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#value ConnectUser#value}

---

### ConnectUserUserProficiencies <a name="ConnectUserUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserUserProficiencies: connectUser.ConnectUserUserProficiencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName">attributeName</a></code> | <code>string</code> | The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue">attributeValue</a></code> | <code>string</code> | The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level">level</a></code> | <code>number</code> | The level of the proficiency. The valid values are 0 to 10. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#attribute_name ConnectUser#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#attribute_value ConnectUser#attribute_value}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

The level of the proficiency. The valid values are 0 to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#level ConnectUser#level}

---

### ConnectUserVoiceEnhancementConfigs <a name="ConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

const connectUserVoiceEnhancementConfigs: connectUser.ConnectUserVoiceEnhancementConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode">voiceEnhancementMode</a></code> | <code>string</code> | The Voice Enhancement Mode setting. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `voiceEnhancementMode`<sup>Optional</sup> <a name="voiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode"></a>

```typescript
public readonly voiceEnhancementMode: string;
```

- *Type:* string

The Voice Enhancement Mode setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_user#voice_enhancement_mode ConnectUser#voice_enhancement_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode">resetAfterContactWorkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit">resetAfterContactWorkTimeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkMode` <a name="resetAfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```typescript
public resetAfterContactWorkMode(): void
```

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```typescript
public resetAfterContactWorkTimeLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">afterContactWorkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkModeInput`<sup>Optional</sup> <a name="afterContactWorkModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```typescript
public readonly afterContactWorkModeInput: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```typescript
public readonly afterContactWorkTimeLimitInput: number;
```

- *Type:* number

---

##### `afterContactWorkMode`<sup>Required</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```typescript
public readonly afterContactWorkMode: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserAfterContactWorkConfigsAfterContactWorkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode">resetAfterContactWorkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit">resetAfterContactWorkTimeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkMode` <a name="resetAfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```typescript
public resetAfterContactWorkMode(): void
```

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```typescript
public resetAfterContactWorkTimeLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">afterContactWorkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkModeInput`<sup>Optional</sup> <a name="afterContactWorkModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```typescript
public readonly afterContactWorkModeInput: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```typescript
public readonly afterContactWorkTimeLimitInput: number;
```

- *Type:* number

---

##### `afterContactWorkMode`<sup>Required</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```typescript
public readonly afterContactWorkMode: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsList <a name="ConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserAfterContactWorkConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get"></a>

```typescript
public get(index: number): ConnectUserAfterContactWorkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserAfterContactWorkConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>[]

---


### ConnectUserAfterContactWorkConfigsOutputReference <a name="ConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserAfterContactWorkConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig">putAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig">putAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig">resetAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig">resetAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel">resetChannel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAfterContactWorkConfig` <a name="putAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig"></a>

```typescript
public putAfterContactWorkConfig(value: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `putAgentFirstCallbackAfterContactWorkConfig` <a name="putAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig"></a>

```typescript
public putAgentFirstCallbackAfterContactWorkConfig(value: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `resetAfterContactWorkConfig` <a name="resetAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig"></a>

```typescript
public resetAfterContactWorkConfig(): void
```

##### `resetAgentFirstCallbackAfterContactWorkConfig` <a name="resetAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig"></a>

```typescript
public resetAgentFirstCallbackAfterContactWorkConfig(): void
```

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">afterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">agentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput">afterContactWorkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput">agentFirstCallbackAfterContactWorkConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkConfig`<sup>Required</sup> <a name="afterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```typescript
public readonly afterContactWorkConfig: ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `agentFirstCallbackAfterContactWorkConfig`<sup>Required</sup> <a name="agentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```typescript
public readonly agentFirstCallbackAfterContactWorkConfig: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `afterContactWorkConfigInput`<sup>Optional</sup> <a name="afterContactWorkConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput"></a>

```typescript
public readonly afterContactWorkConfigInput: IResolvable | ConnectUserAfterContactWorkConfigsAfterContactWorkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `agentFirstCallbackAfterContactWorkConfigInput`<sup>Optional</sup> <a name="agentFirstCallbackAfterContactWorkConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput"></a>

```typescript
public readonly agentFirstCallbackAfterContactWorkConfigInput: IResolvable | ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserAfterContactWorkConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>

---


### ConnectUserAutoAcceptConfigsList <a name="ConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserAutoAcceptConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get"></a>

```typescript
public get(index: number): ConnectUserAutoAcceptConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserAutoAcceptConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>[]

---


### ConnectUserAutoAcceptConfigsOutputReference <a name="ConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserAutoAcceptConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept">resetAgentFirstCallbackAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel">resetChannel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentFirstCallbackAutoAccept` <a name="resetAgentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept"></a>

```typescript
public resetAgentFirstCallbackAutoAccept(): void
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept"></a>

```typescript
public resetAutoAccept(): void
```

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput">agentFirstCallbackAutoAcceptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput">autoAcceptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">agentFirstCallbackAutoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentFirstCallbackAutoAcceptInput`<sup>Optional</sup> <a name="agentFirstCallbackAutoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput"></a>

```typescript
public readonly agentFirstCallbackAutoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput"></a>

```typescript
public readonly autoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `agentFirstCallbackAutoAccept`<sup>Required</sup> <a name="agentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```typescript
public readonly agentFirstCallbackAutoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserAutoAcceptConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>

---


### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserIdentityInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile">resetMobile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail">resetSecondaryEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetMobile` <a name="resetMobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile"></a>

```typescript
public resetMobile(): void
```

##### `resetSecondaryEmail` <a name="resetSecondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail"></a>

```typescript
public resetSecondaryEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput">mobileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput">secondaryEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile">mobile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail">secondaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `mobileInput`<sup>Optional</sup> <a name="mobileInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput"></a>

```typescript
public readonly mobileInput: string;
```

- *Type:* string

---

##### `secondaryEmailInput`<sup>Optional</sup> <a name="secondaryEmailInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput"></a>

```typescript
public readonly secondaryEmailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile"></a>

```typescript
public readonly mobile: string;
```

- *Type:* string

---

##### `secondaryEmail`<sup>Required</sup> <a name="secondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```typescript
public readonly secondaryEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserIdentityInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPersistentConnectionConfigsList <a name="ConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserPersistentConnectionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get"></a>

```typescript
public get(index: number): ConnectUserPersistentConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserPersistentConnectionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>[]

---


### ConnectUserPersistentConnectionConfigsOutputReference <a name="ConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserPersistentConnectionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection">resetPersistentConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetPersistentConnection` <a name="resetPersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection"></a>

```typescript
public resetPersistentConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput">persistentConnectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">persistentConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `persistentConnectionInput`<sup>Optional</sup> <a name="persistentConnectionInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput"></a>

```typescript
public readonly persistentConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `persistentConnection`<sup>Required</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserPersistentConnectionConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserPhoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit">resetAfterContactWorkTimeLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber">resetDeskPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection">resetPersistentConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType">resetPhoneType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```typescript
public resetAfterContactWorkTimeLimit(): void
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```typescript
public resetAutoAccept(): void
```

##### `resetDeskPhoneNumber` <a name="resetDeskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```typescript
public resetDeskPhoneNumber(): void
```

##### `resetPersistentConnection` <a name="resetPersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection"></a>

```typescript
public resetPersistentConnection(): void
```

##### `resetPhoneType` <a name="resetPhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType"></a>

```typescript
public resetPhoneType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">autoAcceptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">deskPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput">persistentConnectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">phoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection">persistentConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">phoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```typescript
public readonly afterContactWorkTimeLimitInput: number;
```

- *Type:* number

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```typescript
public readonly autoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deskPhoneNumberInput`<sup>Optional</sup> <a name="deskPhoneNumberInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```typescript
public readonly deskPhoneNumberInput: string;
```

- *Type:* string

---

##### `persistentConnectionInput`<sup>Optional</sup> <a name="persistentConnectionInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput"></a>

```typescript
public readonly persistentConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `phoneTypeInput`<sup>Optional</sup> <a name="phoneTypeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```typescript
public readonly phoneTypeInput: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deskPhoneNumber`<sup>Required</sup> <a name="deskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

---

##### `persistentConnection`<sup>Required</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserPhoneConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---


### ConnectUserPhoneNumberConfigsList <a name="ConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserPhoneNumberConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get"></a>

```typescript
public get(index: number): ConnectUserPhoneNumberConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserPhoneNumberConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>[]

---


### ConnectUserPhoneNumberConfigsOutputReference <a name="ConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserPhoneNumberConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType">resetPhoneType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPhoneType` <a name="resetPhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType"></a>

```typescript
public resetPhoneType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput">phoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType">phoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `phoneTypeInput`<sup>Optional</sup> <a name="phoneTypeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput"></a>

```typescript
public readonly phoneTypeInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserPhoneNumberConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>

---


### ConnectUserTagsList <a name="ConnectUserTagsList" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get"></a>

```typescript
public get(index: number): ConnectUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>[]

---


### ConnectUserTagsOutputReference <a name="ConnectUserTagsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>

---


### ConnectUserUserProficienciesList <a name="ConnectUserUserProficienciesList" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserUserProficienciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get"></a>

```typescript
public get(index: number): ConnectUserUserProficienciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserUserProficiencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>[]

---


### ConnectUserUserProficienciesOutputReference <a name="ConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserUserProficienciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue"></a>

```typescript
public resetAttributeValue(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput">levelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: number;
```

- *Type:* number

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserUserProficiencies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>

---


### ConnectUserVoiceEnhancementConfigsList <a name="ConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserVoiceEnhancementConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get"></a>

```typescript
public get(index: number): ConnectUserVoiceEnhancementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserVoiceEnhancementConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>[]

---


### ConnectUserVoiceEnhancementConfigsOutputReference <a name="ConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktn/provider-awscc'

new connectUser.ConnectUserVoiceEnhancementConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode">resetVoiceEnhancementMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetVoiceEnhancementMode` <a name="resetVoiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode"></a>

```typescript
public resetVoiceEnhancementMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput">voiceEnhancementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">voiceEnhancementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `voiceEnhancementModeInput`<sup>Optional</sup> <a name="voiceEnhancementModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput"></a>

```typescript
public readonly voiceEnhancementModeInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `voiceEnhancementMode`<sup>Required</sup> <a name="voiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```typescript
public readonly voiceEnhancementMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectUserVoiceEnhancementConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>

---



