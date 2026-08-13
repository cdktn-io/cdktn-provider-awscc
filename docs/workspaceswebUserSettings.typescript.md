# `workspaceswebUserSettings` Submodule <a name="`workspaceswebUserSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebUserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserSettings <a name="WorkspaceswebUserSettings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings awscc_workspacesweb_user_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettings(scope: Construct, id: string, config: WorkspaceswebUserSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig">WorkspaceswebUserSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig">WorkspaceswebUserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration">putBrandingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration">putCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration">putToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetBrandingConfiguration">resetBrandingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration">resetCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed">resetDeepLinkAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes">resetDisconnectTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes">resetIdleDisconnectTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration">resetToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetWebAuthnAllowed">resetWebAuthnAllowed</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBrandingConfiguration` <a name="putBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration"></a>

```typescript
public putBrandingConfiguration(value: WorkspaceswebUserSettingsBrandingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putBrandingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

---

##### `putCookieSynchronizationConfiguration` <a name="putCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration"></a>

```typescript
public putCookieSynchronizationConfiguration(value: WorkspaceswebUserSettingsCookieSynchronizationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putCookieSynchronizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspaceswebUserSettingsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]

---

##### `putToolbarConfiguration` <a name="putToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration"></a>

```typescript
public putToolbarConfiguration(value: WorkspaceswebUserSettingsToolbarConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.putToolbarConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetAdditionalEncryptionContext"></a>

```typescript
public resetAdditionalEncryptionContext(): void
```

##### `resetBrandingConfiguration` <a name="resetBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetBrandingConfiguration"></a>

```typescript
public resetBrandingConfiguration(): void
```

##### `resetCookieSynchronizationConfiguration` <a name="resetCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCookieSynchronizationConfiguration"></a>

```typescript
public resetCookieSynchronizationConfiguration(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDeepLinkAllowed` <a name="resetDeepLinkAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDeepLinkAllowed"></a>

```typescript
public resetDeepLinkAllowed(): void
```

##### `resetDisconnectTimeoutInMinutes` <a name="resetDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetDisconnectTimeoutInMinutes"></a>

```typescript
public resetDisconnectTimeoutInMinutes(): void
```

##### `resetIdleDisconnectTimeoutInMinutes` <a name="resetIdleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetIdleDisconnectTimeoutInMinutes"></a>

```typescript
public resetIdleDisconnectTimeoutInMinutes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetToolbarConfiguration` <a name="resetToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetToolbarConfiguration"></a>

```typescript
public resetToolbarConfiguration(): void
```

##### `resetWebAuthnAllowed` <a name="resetWebAuthnAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.resetWebAuthnAllowed"></a>

```typescript
public resetWebAuthnAllowed(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebUserSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebUserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfiguration">brandingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference">WorkspaceswebUserSettingsBrandingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration">cookieSynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList">WorkspaceswebUserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration">toolbarConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference">WorkspaceswebUserSettingsToolbarConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn">userSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfigurationInput">brandingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput">cookieSynchronizationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput">copyAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput">deepLinkAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput">disconnectTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput">downloadAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput">idleDisconnectTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput">pasteAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput">printAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput">toolbarConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput">uploadAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowedInput">webAuthnAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed">copyAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed">deepLinkAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes">disconnectTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed">downloadAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes">idleDisconnectTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed">pasteAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed">printAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed">uploadAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowed">webAuthnAllowed</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.associatedPortalArns"></a>

```typescript
public readonly associatedPortalArns: string[];
```

- *Type:* string[]

---

##### `brandingConfiguration`<sup>Required</sup> <a name="brandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfiguration"></a>

```typescript
public readonly brandingConfiguration: WorkspaceswebUserSettingsBrandingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference">WorkspaceswebUserSettingsBrandingConfigurationOutputReference</a>

---

##### `cookieSynchronizationConfiguration`<sup>Required</sup> <a name="cookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfiguration"></a>

```typescript
public readonly cookieSynchronizationConfiguration: WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tags"></a>

```typescript
public readonly tags: WorkspaceswebUserSettingsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList">WorkspaceswebUserSettingsTagsList</a>

---

##### `toolbarConfiguration`<sup>Required</sup> <a name="toolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfiguration"></a>

```typescript
public readonly toolbarConfiguration: WorkspaceswebUserSettingsToolbarConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference">WorkspaceswebUserSettingsToolbarConfigurationOutputReference</a>

---

##### `userSettingsArn`<sup>Required</sup> <a name="userSettingsArn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.userSettingsArn"></a>

```typescript
public readonly userSettingsArn: string;
```

- *Type:* string

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContextInput"></a>

```typescript
public readonly additionalEncryptionContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `brandingConfigurationInput`<sup>Optional</sup> <a name="brandingConfigurationInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.brandingConfigurationInput"></a>

```typescript
public readonly brandingConfigurationInput: IResolvable | WorkspaceswebUserSettingsBrandingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

---

##### `cookieSynchronizationConfigurationInput`<sup>Optional</sup> <a name="cookieSynchronizationConfigurationInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.cookieSynchronizationConfigurationInput"></a>

```typescript
public readonly cookieSynchronizationConfigurationInput: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---

##### `copyAllowedInput`<sup>Optional</sup> <a name="copyAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowedInput"></a>

```typescript
public readonly copyAllowedInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `deepLinkAllowedInput`<sup>Optional</sup> <a name="deepLinkAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowedInput"></a>

```typescript
public readonly deepLinkAllowedInput: string;
```

- *Type:* string

---

##### `disconnectTimeoutInMinutesInput`<sup>Optional</sup> <a name="disconnectTimeoutInMinutesInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutesInput"></a>

```typescript
public readonly disconnectTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `downloadAllowedInput`<sup>Optional</sup> <a name="downloadAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowedInput"></a>

```typescript
public readonly downloadAllowedInput: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInMinutesInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutesInput"></a>

```typescript
public readonly idleDisconnectTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `pasteAllowedInput`<sup>Optional</sup> <a name="pasteAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowedInput"></a>

```typescript
public readonly pasteAllowedInput: string;
```

- *Type:* string

---

##### `printAllowedInput`<sup>Optional</sup> <a name="printAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowedInput"></a>

```typescript
public readonly printAllowedInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspaceswebUserSettingsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]

---

##### `toolbarConfigurationInput`<sup>Optional</sup> <a name="toolbarConfigurationInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.toolbarConfigurationInput"></a>

```typescript
public readonly toolbarConfigurationInput: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---

##### `uploadAllowedInput`<sup>Optional</sup> <a name="uploadAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowedInput"></a>

```typescript
public readonly uploadAllowedInput: string;
```

- *Type:* string

---

##### `webAuthnAllowedInput`<sup>Optional</sup> <a name="webAuthnAllowedInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowedInput"></a>

```typescript
public readonly webAuthnAllowedInput: string;
```

- *Type:* string

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `copyAllowed`<sup>Required</sup> <a name="copyAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.copyAllowed"></a>

```typescript
public readonly copyAllowed: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `deepLinkAllowed`<sup>Required</sup> <a name="deepLinkAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.deepLinkAllowed"></a>

```typescript
public readonly deepLinkAllowed: string;
```

- *Type:* string

---

##### `disconnectTimeoutInMinutes`<sup>Required</sup> <a name="disconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.disconnectTimeoutInMinutes"></a>

```typescript
public readonly disconnectTimeoutInMinutes: number;
```

- *Type:* number

---

##### `downloadAllowed`<sup>Required</sup> <a name="downloadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.downloadAllowed"></a>

```typescript
public readonly downloadAllowed: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInMinutes`<sup>Required</sup> <a name="idleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes"></a>

```typescript
public readonly idleDisconnectTimeoutInMinutes: number;
```

- *Type:* number

---

##### `pasteAllowed`<sup>Required</sup> <a name="pasteAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.pasteAllowed"></a>

```typescript
public readonly pasteAllowed: string;
```

- *Type:* string

---

##### `printAllowed`<sup>Required</sup> <a name="printAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.printAllowed"></a>

```typescript
public readonly printAllowed: string;
```

- *Type:* string

---

##### `uploadAllowed`<sup>Required</sup> <a name="uploadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.uploadAllowed"></a>

```typescript
public readonly uploadAllowed: string;
```

- *Type:* string

---

##### `webAuthnAllowed`<sup>Required</sup> <a name="webAuthnAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.webAuthnAllowed"></a>

```typescript
public readonly webAuthnAllowed: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserSettingsBrandingConfiguration <a name="WorkspaceswebUserSettingsBrandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsBrandingConfiguration: workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.colorTheme">colorTheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.favicon">favicon</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.localizedStrings">localizedStrings</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.logo">logo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.termsOfService">termsOfService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.wallpaper">wallpaper</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}. |

---

##### `colorTheme`<sup>Optional</sup> <a name="colorTheme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.colorTheme"></a>

```typescript
public readonly colorTheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#color_theme WorkspaceswebUserSettings#color_theme}.

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.favicon"></a>

```typescript
public readonly favicon: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#favicon WorkspaceswebUserSettings#favicon}.

---

##### `localizedStrings`<sup>Optional</sup> <a name="localizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.localizedStrings"></a>

```typescript
public readonly localizedStrings: IResolvable | {[ key: string ]: WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#localized_strings WorkspaceswebUserSettings#localized_strings}.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#logo WorkspaceswebUserSettings#logo}.

---

##### `termsOfService`<sup>Optional</sup> <a name="termsOfService" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.termsOfService"></a>

```typescript
public readonly termsOfService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#terms_of_service WorkspaceswebUserSettings#terms_of_service}.

---

##### `wallpaper`<sup>Optional</sup> <a name="wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration.property.wallpaper"></a>

```typescript
public readonly wallpaper: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#wallpaper WorkspaceswebUserSettings#wallpaper}.

---

### WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsBrandingConfigurationFaviconMetadata: workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata = { ... }
```


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsBrandingConfigurationLocalizedStrings: workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.browserTabTitle">browserTabTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#browser_tab_title WorkspaceswebUserSettings#browser_tab_title}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactButtonText">contactButtonText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_button_text WorkspaceswebUserSettings#contact_button_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactLink">contactLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_link WorkspaceswebUserSettings#contact_link}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loadingText">loadingText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#loading_text WorkspaceswebUserSettings#loading_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginButtonText">loginButtonText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_button_text WorkspaceswebUserSettings#login_button_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginDescription">loginDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_description WorkspaceswebUserSettings#login_description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginTitle">loginTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_title WorkspaceswebUserSettings#login_title}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.welcomeText">welcomeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#welcome_text WorkspaceswebUserSettings#welcome_text}. |

---

##### `browserTabTitle`<sup>Optional</sup> <a name="browserTabTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.browserTabTitle"></a>

```typescript
public readonly browserTabTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#browser_tab_title WorkspaceswebUserSettings#browser_tab_title}.

---

##### `contactButtonText`<sup>Optional</sup> <a name="contactButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactButtonText"></a>

```typescript
public readonly contactButtonText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_button_text WorkspaceswebUserSettings#contact_button_text}.

---

##### `contactLink`<sup>Optional</sup> <a name="contactLink" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.contactLink"></a>

```typescript
public readonly contactLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#contact_link WorkspaceswebUserSettings#contact_link}.

---

##### `loadingText`<sup>Optional</sup> <a name="loadingText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loadingText"></a>

```typescript
public readonly loadingText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#loading_text WorkspaceswebUserSettings#loading_text}.

---

##### `loginButtonText`<sup>Optional</sup> <a name="loginButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginButtonText"></a>

```typescript
public readonly loginButtonText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_button_text WorkspaceswebUserSettings#login_button_text}.

---

##### `loginDescription`<sup>Optional</sup> <a name="loginDescription" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginDescription"></a>

```typescript
public readonly loginDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_description WorkspaceswebUserSettings#login_description}.

---

##### `loginTitle`<sup>Optional</sup> <a name="loginTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.loginTitle"></a>

```typescript
public readonly loginTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#login_title WorkspaceswebUserSettings#login_title}.

---

##### `welcomeText`<sup>Optional</sup> <a name="welcomeText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.property.welcomeText"></a>

```typescript
public readonly welcomeText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#welcome_text WorkspaceswebUserSettings#welcome_text}.

---

### WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsBrandingConfigurationLogoMetadata: workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata = { ... }
```


### WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata <a name="WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsBrandingConfigurationWallpaperMetadata: workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata = { ... }
```


### WorkspaceswebUserSettingsConfig <a name="WorkspaceswebUserSettingsConfig" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsConfig: workspaceswebUserSettings.WorkspaceswebUserSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed">copyAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed">downloadAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed">pasteAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed">printAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed">uploadAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.brandingConfiguration">brandingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration">cookieSynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed">deepLinkAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes">disconnectTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes">idleDisconnectTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration">toolbarConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.webAuthnAllowed">webAuthnAllowed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `copyAllowed`<sup>Required</sup> <a name="copyAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.copyAllowed"></a>

```typescript
public readonly copyAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}.

---

##### `downloadAllowed`<sup>Required</sup> <a name="downloadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.downloadAllowed"></a>

```typescript
public readonly downloadAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}.

---

##### `pasteAllowed`<sup>Required</sup> <a name="pasteAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.pasteAllowed"></a>

```typescript
public readonly pasteAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}.

---

##### `printAllowed`<sup>Required</sup> <a name="printAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.printAllowed"></a>

```typescript
public readonly printAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}.

---

##### `uploadAllowed`<sup>Required</sup> <a name="uploadAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.uploadAllowed"></a>

```typescript
public readonly uploadAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}.

---

##### `brandingConfiguration`<sup>Optional</sup> <a name="brandingConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.brandingConfiguration"></a>

```typescript
public readonly brandingConfiguration: WorkspaceswebUserSettingsBrandingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#branding_configuration WorkspaceswebUserSettings#branding_configuration}.

---

##### `cookieSynchronizationConfiguration`<sup>Optional</sup> <a name="cookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.cookieSynchronizationConfiguration"></a>

```typescript
public readonly cookieSynchronizationConfiguration: WorkspaceswebUserSettingsCookieSynchronizationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}.

---

##### `deepLinkAllowed`<sup>Optional</sup> <a name="deepLinkAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.deepLinkAllowed"></a>

```typescript
public readonly deepLinkAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}.

---

##### `disconnectTimeoutInMinutes`<sup>Optional</sup> <a name="disconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.disconnectTimeoutInMinutes"></a>

```typescript
public readonly disconnectTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}.

---

##### `idleDisconnectTimeoutInMinutes`<sup>Optional</sup> <a name="idleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.idleDisconnectTimeoutInMinutes"></a>

```typescript
public readonly idleDisconnectTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspaceswebUserSettingsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}.

---

##### `toolbarConfiguration`<sup>Optional</sup> <a name="toolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.toolbarConfiguration"></a>

```typescript
public readonly toolbarConfiguration: WorkspaceswebUserSettingsToolbarConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}.

---

##### `webAuthnAllowed`<sup>Optional</sup> <a name="webAuthnAllowed" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsConfig.property.webAuthnAllowed"></a>

```typescript
public readonly webAuthnAllowed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#web_authn_allowed WorkspaceswebUserSettings#web_authn_allowed}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfiguration <a name="WorkspaceswebUserSettingsCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsCookieSynchronizationConfiguration: workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist">allowlist</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist">blocklist</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}. |

---

##### `allowlist`<sup>Optional</sup> <a name="allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.allowlist"></a>

```typescript
public readonly allowlist: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}.

---

##### `blocklist`<sup>Optional</sup> <a name="blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration.property.blocklist"></a>

```typescript
public readonly blocklist: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct: workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct: workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}.

---

### WorkspaceswebUserSettingsTags <a name="WorkspaceswebUserSettingsTags" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsTags: workspaceswebUserSettings.WorkspaceswebUserSettingsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#key WorkspaceswebUserSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#value WorkspaceswebUserSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#key WorkspaceswebUserSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#value WorkspaceswebUserSettings#value}.

---

### WorkspaceswebUserSettingsToolbarConfiguration <a name="WorkspaceswebUserSettingsToolbarConfiguration" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

const workspaceswebUserSettingsToolbarConfiguration: workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems">hiddenToolbarItems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution">maxDisplayResolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType">toolbarType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode">visualMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}. |

---

##### `hiddenToolbarItems`<sup>Optional</sup> <a name="hiddenToolbarItems" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.hiddenToolbarItems"></a>

```typescript
public readonly hiddenToolbarItems: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}.

---

##### `maxDisplayResolution`<sup>Optional</sup> <a name="maxDisplayResolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.maxDisplayResolution"></a>

```typescript
public readonly maxDisplayResolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}.

---

##### `toolbarType`<sup>Optional</sup> <a name="toolbarType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.toolbarType"></a>

```typescript
public readonly toolbarType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}.

---

##### `visualMode`<sup>Optional</sup> <a name="visualMode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration.property.visualMode"></a>

```typescript
public readonly visualMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp">lastUploadTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `lastUploadTimestamp`<sup>Required</sup> <a name="lastUploadTimestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp"></a>

```typescript
public readonly lastUploadTimestamp: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get"></a>

```typescript
public get(key: string): WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}

---


### WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetBrowserTabTitle">resetBrowserTabTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactButtonText">resetContactButtonText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactLink">resetContactLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoadingText">resetLoadingText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginButtonText">resetLoginButtonText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginDescription">resetLoginDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginTitle">resetLoginTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetWelcomeText">resetWelcomeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBrowserTabTitle` <a name="resetBrowserTabTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetBrowserTabTitle"></a>

```typescript
public resetBrowserTabTitle(): void
```

##### `resetContactButtonText` <a name="resetContactButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactButtonText"></a>

```typescript
public resetContactButtonText(): void
```

##### `resetContactLink` <a name="resetContactLink" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetContactLink"></a>

```typescript
public resetContactLink(): void
```

##### `resetLoadingText` <a name="resetLoadingText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoadingText"></a>

```typescript
public resetLoadingText(): void
```

##### `resetLoginButtonText` <a name="resetLoginButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginButtonText"></a>

```typescript
public resetLoginButtonText(): void
```

##### `resetLoginDescription` <a name="resetLoginDescription" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginDescription"></a>

```typescript
public resetLoginDescription(): void
```

##### `resetLoginTitle` <a name="resetLoginTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetLoginTitle"></a>

```typescript
public resetLoginTitle(): void
```

##### `resetWelcomeText` <a name="resetWelcomeText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resetWelcomeText"></a>

```typescript
public resetWelcomeText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitleInput">browserTabTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonTextInput">contactButtonTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLinkInput">contactLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingTextInput">loadingTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonTextInput">loginButtonTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescriptionInput">loginDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitleInput">loginTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeTextInput">welcomeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle">browserTabTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText">contactButtonText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink">contactLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText">loadingText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText">loginButtonText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription">loginDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle">loginTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText">welcomeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `browserTabTitleInput`<sup>Optional</sup> <a name="browserTabTitleInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitleInput"></a>

```typescript
public readonly browserTabTitleInput: string;
```

- *Type:* string

---

##### `contactButtonTextInput`<sup>Optional</sup> <a name="contactButtonTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonTextInput"></a>

```typescript
public readonly contactButtonTextInput: string;
```

- *Type:* string

---

##### `contactLinkInput`<sup>Optional</sup> <a name="contactLinkInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLinkInput"></a>

```typescript
public readonly contactLinkInput: string;
```

- *Type:* string

---

##### `loadingTextInput`<sup>Optional</sup> <a name="loadingTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingTextInput"></a>

```typescript
public readonly loadingTextInput: string;
```

- *Type:* string

---

##### `loginButtonTextInput`<sup>Optional</sup> <a name="loginButtonTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonTextInput"></a>

```typescript
public readonly loginButtonTextInput: string;
```

- *Type:* string

---

##### `loginDescriptionInput`<sup>Optional</sup> <a name="loginDescriptionInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescriptionInput"></a>

```typescript
public readonly loginDescriptionInput: string;
```

- *Type:* string

---

##### `loginTitleInput`<sup>Optional</sup> <a name="loginTitleInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitleInput"></a>

```typescript
public readonly loginTitleInput: string;
```

- *Type:* string

---

##### `welcomeTextInput`<sup>Optional</sup> <a name="welcomeTextInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeTextInput"></a>

```typescript
public readonly welcomeTextInput: string;
```

- *Type:* string

---

##### `browserTabTitle`<sup>Required</sup> <a name="browserTabTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle"></a>

```typescript
public readonly browserTabTitle: string;
```

- *Type:* string

---

##### `contactButtonText`<sup>Required</sup> <a name="contactButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText"></a>

```typescript
public readonly contactButtonText: string;
```

- *Type:* string

---

##### `contactLink`<sup>Required</sup> <a name="contactLink" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink"></a>

```typescript
public readonly contactLink: string;
```

- *Type:* string

---

##### `loadingText`<sup>Required</sup> <a name="loadingText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText"></a>

```typescript
public readonly loadingText: string;
```

- *Type:* string

---

##### `loginButtonText`<sup>Required</sup> <a name="loginButtonText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText"></a>

```typescript
public readonly loginButtonText: string;
```

- *Type:* string

---

##### `loginDescription`<sup>Required</sup> <a name="loginDescription" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription"></a>

```typescript
public readonly loginDescription: string;
```

- *Type:* string

---

##### `loginTitle`<sup>Required</sup> <a name="loginTitle" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle"></a>

```typescript
public readonly loginTitle: string;
```

- *Type:* string

---

##### `welcomeText`<sup>Required</sup> <a name="welcomeText" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText"></a>

```typescript
public readonly welcomeText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp">lastUploadTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `lastUploadTimestamp`<sup>Required</sup> <a name="lastUploadTimestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp"></a>

```typescript
public readonly lastUploadTimestamp: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings">putLocalizedStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetColorTheme">resetColorTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetFavicon">resetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLocalizedStrings">resetLocalizedStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetTermsOfService">resetTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetWallpaper">resetWallpaper</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalizedStrings` <a name="putLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings"></a>

```typescript
public putLocalizedStrings(value: IResolvable | {[ key: string ]: WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.putLocalizedStrings.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}

---

##### `resetColorTheme` <a name="resetColorTheme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetColorTheme"></a>

```typescript
public resetColorTheme(): void
```

##### `resetFavicon` <a name="resetFavicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetFavicon"></a>

```typescript
public resetFavicon(): void
```

##### `resetLocalizedStrings` <a name="resetLocalizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLocalizedStrings"></a>

```typescript
public resetLocalizedStrings(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetTermsOfService` <a name="resetTermsOfService" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetTermsOfService"></a>

```typescript
public resetTermsOfService(): void
```

##### `resetWallpaper` <a name="resetWallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.resetWallpaper"></a>

```typescript
public resetWallpaper(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata">faviconMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings">localizedStrings</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata">logoMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata">wallpaperMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorThemeInput">colorThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconInput">faviconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStringsInput">localizedStringsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfServiceInput">termsOfServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperInput">wallpaperInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme">colorTheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon">favicon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService">termsOfService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper">wallpaper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `faviconMetadata`<sup>Required</sup> <a name="faviconMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata"></a>

```typescript
public readonly faviconMetadata: WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a>

---

##### `localizedStrings`<sup>Required</sup> <a name="localizedStrings" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings"></a>

```typescript
public readonly localizedStrings: WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a>

---

##### `logoMetadata`<sup>Required</sup> <a name="logoMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata"></a>

```typescript
public readonly logoMetadata: WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a>

---

##### `wallpaperMetadata`<sup>Required</sup> <a name="wallpaperMetadata" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata"></a>

```typescript
public readonly wallpaperMetadata: WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a>

---

##### `colorThemeInput`<sup>Optional</sup> <a name="colorThemeInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorThemeInput"></a>

```typescript
public readonly colorThemeInput: string;
```

- *Type:* string

---

##### `faviconInput`<sup>Optional</sup> <a name="faviconInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconInput"></a>

```typescript
public readonly faviconInput: string;
```

- *Type:* string

---

##### `localizedStringsInput`<sup>Optional</sup> <a name="localizedStringsInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStringsInput"></a>

```typescript
public readonly localizedStringsInput: IResolvable | {[ key: string ]: WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">WorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>}

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `termsOfServiceInput`<sup>Optional</sup> <a name="termsOfServiceInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfServiceInput"></a>

```typescript
public readonly termsOfServiceInput: string;
```

- *Type:* string

---

##### `wallpaperInput`<sup>Optional</sup> <a name="wallpaperInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperInput"></a>

```typescript
public readonly wallpaperInput: string;
```

- *Type:* string

---

##### `colorTheme`<sup>Required</sup> <a name="colorTheme" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme"></a>

```typescript
public readonly colorTheme: string;
```

- *Type:* string

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon"></a>

```typescript
public readonly favicon: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `termsOfService`<sup>Required</sup> <a name="termsOfService" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService"></a>

```typescript
public readonly termsOfService: string;
```

- *Type:* string

---

##### `wallpaper`<sup>Required</sup> <a name="wallpaper" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper"></a>

```typescript
public readonly wallpaper: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsBrandingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfiguration">WorkspaceswebUserSettingsBrandingConfiguration</a>

---


### WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference <a name="WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp">lastUploadTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `lastUploadTimestamp`<sup>Required</sup> <a name="lastUploadTimestamp" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp"></a>

```typescript
public readonly lastUploadTimestamp: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">WorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>

---


### WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference <a name="WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist">putAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist">putBlocklist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist">resetAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist">resetBlocklist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowlist` <a name="putAllowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist"></a>

```typescript
public putAllowlist(value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putAllowlist.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

---

##### `putBlocklist` <a name="putBlocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist"></a>

```typescript
public putBlocklist(value: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.putBlocklist.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

---

##### `resetAllowlist` <a name="resetAllowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetAllowlist"></a>

```typescript
public resetAllowlist(): void
```

##### `resetBlocklist` <a name="resetBlocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resetBlocklist"></a>

```typescript
public resetBlocklist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist">allowlist</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput">allowlistInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput">blocklistInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlist`<sup>Required</sup> <a name="allowlist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist"></a>

```typescript
public readonly allowlist: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a>

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist"></a>

```typescript
public readonly blocklist: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a>

---

##### `allowlistInput`<sup>Optional</sup> <a name="allowlistInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlistInput"></a>

```typescript
public readonly allowlistInput: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>[]

---

##### `blocklistInput`<sup>Optional</sup> <a name="blocklistInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklistInput"></a>

```typescript
public readonly blocklistInput: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsCookieSynchronizationConfiguration">WorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---


### WorkspaceswebUserSettingsTagsList <a name="WorkspaceswebUserSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get"></a>

```typescript
public get(index: number): WorkspaceswebUserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>[]

---


### WorkspaceswebUserSettingsTagsOutputReference <a name="WorkspaceswebUserSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsTags">WorkspaceswebUserSettingsTags</a>

---


### WorkspaceswebUserSettingsToolbarConfigurationOutputReference <a name="WorkspaceswebUserSettingsToolbarConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer"></a>

```typescript
import { workspaceswebUserSettings } from '@cdktn/provider-awscc'

new workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems">resetHiddenToolbarItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution">resetMaxDisplayResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType">resetToolbarType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode">resetVisualMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHiddenToolbarItems` <a name="resetHiddenToolbarItems" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetHiddenToolbarItems"></a>

```typescript
public resetHiddenToolbarItems(): void
```

##### `resetMaxDisplayResolution` <a name="resetMaxDisplayResolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetMaxDisplayResolution"></a>

```typescript
public resetMaxDisplayResolution(): void
```

##### `resetToolbarType` <a name="resetToolbarType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetToolbarType"></a>

```typescript
public resetToolbarType(): void
```

##### `resetVisualMode` <a name="resetVisualMode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.resetVisualMode"></a>

```typescript
public resetVisualMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput">hiddenToolbarItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput">maxDisplayResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput">toolbarTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput">visualModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems">hiddenToolbarItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution">maxDisplayResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType">toolbarType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode">visualMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hiddenToolbarItemsInput`<sup>Optional</sup> <a name="hiddenToolbarItemsInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItemsInput"></a>

```typescript
public readonly hiddenToolbarItemsInput: string[];
```

- *Type:* string[]

---

##### `maxDisplayResolutionInput`<sup>Optional</sup> <a name="maxDisplayResolutionInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolutionInput"></a>

```typescript
public readonly maxDisplayResolutionInput: string;
```

- *Type:* string

---

##### `toolbarTypeInput`<sup>Optional</sup> <a name="toolbarTypeInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarTypeInput"></a>

```typescript
public readonly toolbarTypeInput: string;
```

- *Type:* string

---

##### `visualModeInput`<sup>Optional</sup> <a name="visualModeInput" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualModeInput"></a>

```typescript
public readonly visualModeInput: string;
```

- *Type:* string

---

##### `hiddenToolbarItems`<sup>Required</sup> <a name="hiddenToolbarItems" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems"></a>

```typescript
public readonly hiddenToolbarItems: string[];
```

- *Type:* string[]

---

##### `maxDisplayResolution`<sup>Required</sup> <a name="maxDisplayResolution" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution"></a>

```typescript
public readonly maxDisplayResolution: string;
```

- *Type:* string

---

##### `toolbarType`<sup>Required</sup> <a name="toolbarType" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType"></a>

```typescript
public readonly toolbarType: string;
```

- *Type:* string

---

##### `visualMode`<sup>Required</sup> <a name="visualMode" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode"></a>

```typescript
public readonly visualMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebUserSettingsToolbarConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebUserSettings.WorkspaceswebUserSettingsToolbarConfiguration">WorkspaceswebUserSettingsToolbarConfiguration</a>

---



