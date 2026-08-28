# `workspaceswebPortal` Submodule <a name="`workspaceswebPortal` Submodule" id="@cdktn/provider-awscc.workspaceswebPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebPortal <a name="WorkspaceswebPortal" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal awscc_workspacesweb_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

new workspaceswebPortal.WorkspaceswebPortal(scope: Construct, id: string, config?: WorkspaceswebPortalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig">WorkspaceswebPortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig">WorkspaceswebPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn">resetBrowserSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDataProtectionSettingsArn">resetDataProtectionSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetIpAccessSettingsArn">resetIpAccessSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions">resetMaxConcurrentSessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetNetworkSettingsArn">resetNetworkSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetPortalCustomDomain">resetPortalCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetSessionLoggerArn">resetSessionLoggerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTrustStoreArn">resetTrustStoreArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserAccessLoggingSettingsArn">resetUserAccessLoggingSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserSettingsArn">resetUserSettingsArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspaceswebPortalTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext"></a>

```typescript
public resetAdditionalEncryptionContext(): void
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetBrowserSettingsArn` <a name="resetBrowserSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn"></a>

```typescript
public resetBrowserSettingsArn(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDataProtectionSettingsArn` <a name="resetDataProtectionSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDataProtectionSettingsArn"></a>

```typescript
public resetDataProtectionSettingsArn(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetIpAccessSettingsArn` <a name="resetIpAccessSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetIpAccessSettingsArn"></a>

```typescript
public resetIpAccessSettingsArn(): void
```

##### `resetMaxConcurrentSessions` <a name="resetMaxConcurrentSessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions"></a>

```typescript
public resetMaxConcurrentSessions(): void
```

##### `resetNetworkSettingsArn` <a name="resetNetworkSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetNetworkSettingsArn"></a>

```typescript
public resetNetworkSettingsArn(): void
```

##### `resetPortalCustomDomain` <a name="resetPortalCustomDomain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetPortalCustomDomain"></a>

```typescript
public resetPortalCustomDomain(): void
```

##### `resetSessionLoggerArn` <a name="resetSessionLoggerArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetSessionLoggerArn"></a>

```typescript
public resetSessionLoggerArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrustStoreArn` <a name="resetTrustStoreArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetTrustStoreArn"></a>

```typescript
public resetTrustStoreArn(): void
```

##### `resetUserAccessLoggingSettingsArn` <a name="resetUserAccessLoggingSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserAccessLoggingSettingsArn"></a>

```typescript
public resetUserAccessLoggingSettingsArn(): void
```

##### `resetUserSettingsArn` <a name="resetUserSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.resetUserSettingsArn"></a>

```typescript
public resetUserSettingsArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebPortal resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isConstruct"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

workspaceswebPortal.WorkspaceswebPortal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

workspaceswebPortal.WorkspaceswebPortal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

workspaceswebPortal.WorkspaceswebPortal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspaceswebPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebPortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalArn">portalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint">portalEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus">portalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.rendererType">rendererType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.serviceProviderSamlMetadata">serviceProviderSamlMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList">WorkspaceswebPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput">browserSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArnInput">dataProtectionSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArnInput">ipAccessSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput">maxConcurrentSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArnInput">networkSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomainInput">portalCustomDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArnInput">sessionLoggerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArnInput">trustStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArnInput">userAccessLoggingSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArnInput">userSettingsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn">browserSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn">dataProtectionSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn">ipAccessSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn">networkSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomain">portalCustomDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn">sessionLoggerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn">trustStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn">userAccessLoggingSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn">userSettingsArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalArn"></a>

```typescript
public readonly portalArn: string;
```

- *Type:* string

---

##### `portalEndpoint`<sup>Required</sup> <a name="portalEndpoint" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint"></a>

```typescript
public readonly portalEndpoint: string;
```

- *Type:* string

---

##### `portalStatus`<sup>Required</sup> <a name="portalStatus" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus"></a>

```typescript
public readonly portalStatus: string;
```

- *Type:* string

---

##### `rendererType`<sup>Required</sup> <a name="rendererType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.rendererType"></a>

```typescript
public readonly rendererType: string;
```

- *Type:* string

---

##### `serviceProviderSamlMetadata`<sup>Required</sup> <a name="serviceProviderSamlMetadata" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.serviceProviderSamlMetadata"></a>

```typescript
public readonly serviceProviderSamlMetadata: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tags"></a>

```typescript
public readonly tags: WorkspaceswebPortalTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList">WorkspaceswebPortalTagsList</a>

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput"></a>

```typescript
public readonly additionalEncryptionContextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `browserSettingsArnInput`<sup>Optional</sup> <a name="browserSettingsArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput"></a>

```typescript
public readonly browserSettingsArnInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: string;
```

- *Type:* string

---

##### `dataProtectionSettingsArnInput`<sup>Optional</sup> <a name="dataProtectionSettingsArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArnInput"></a>

```typescript
public readonly dataProtectionSettingsArnInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `ipAccessSettingsArnInput`<sup>Optional</sup> <a name="ipAccessSettingsArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArnInput"></a>

```typescript
public readonly ipAccessSettingsArnInput: string;
```

- *Type:* string

---

##### `maxConcurrentSessionsInput`<sup>Optional</sup> <a name="maxConcurrentSessionsInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput"></a>

```typescript
public readonly maxConcurrentSessionsInput: number;
```

- *Type:* number

---

##### `networkSettingsArnInput`<sup>Optional</sup> <a name="networkSettingsArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArnInput"></a>

```typescript
public readonly networkSettingsArnInput: string;
```

- *Type:* string

---

##### `portalCustomDomainInput`<sup>Optional</sup> <a name="portalCustomDomainInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomainInput"></a>

```typescript
public readonly portalCustomDomainInput: string;
```

- *Type:* string

---

##### `sessionLoggerArnInput`<sup>Optional</sup> <a name="sessionLoggerArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArnInput"></a>

```typescript
public readonly sessionLoggerArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspaceswebPortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]

---

##### `trustStoreArnInput`<sup>Optional</sup> <a name="trustStoreArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArnInput"></a>

```typescript
public readonly trustStoreArnInput: string;
```

- *Type:* string

---

##### `userAccessLoggingSettingsArnInput`<sup>Optional</sup> <a name="userAccessLoggingSettingsArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArnInput"></a>

```typescript
public readonly userAccessLoggingSettingsArnInput: string;
```

- *Type:* string

---

##### `userSettingsArnInput`<sup>Optional</sup> <a name="userSettingsArnInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArnInput"></a>

```typescript
public readonly userSettingsArnInput: string;
```

- *Type:* string

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn"></a>

```typescript
public readonly browserSettingsArn: string;
```

- *Type:* string

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

---

##### `dataProtectionSettingsArn`<sup>Required</sup> <a name="dataProtectionSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn"></a>

```typescript
public readonly dataProtectionSettingsArn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ipAccessSettingsArn`<sup>Required</sup> <a name="ipAccessSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn"></a>

```typescript
public readonly ipAccessSettingsArn: string;
```

- *Type:* string

---

##### `maxConcurrentSessions`<sup>Required</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions"></a>

```typescript
public readonly maxConcurrentSessions: number;
```

- *Type:* number

---

##### `networkSettingsArn`<sup>Required</sup> <a name="networkSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn"></a>

```typescript
public readonly networkSettingsArn: string;
```

- *Type:* string

---

##### `portalCustomDomain`<sup>Required</sup> <a name="portalCustomDomain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.portalCustomDomain"></a>

```typescript
public readonly portalCustomDomain: string;
```

- *Type:* string

---

##### `sessionLoggerArn`<sup>Required</sup> <a name="sessionLoggerArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn"></a>

```typescript
public readonly sessionLoggerArn: string;
```

- *Type:* string

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn"></a>

```typescript
public readonly trustStoreArn: string;
```

- *Type:* string

---

##### `userAccessLoggingSettingsArn`<sup>Required</sup> <a name="userAccessLoggingSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn"></a>

```typescript
public readonly userAccessLoggingSettingsArn: string;
```

- *Type:* string

---

##### `userSettingsArn`<sup>Required</sup> <a name="userSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn"></a>

```typescript
public readonly userSettingsArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebPortalConfig <a name="WorkspaceswebPortalConfig" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.Initializer"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

const workspaceswebPortalConfig: workspaceswebPortal.WorkspaceswebPortalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn">browserSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dataProtectionSettingsArn">dataProtectionSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn WorkspaceswebPortal#data_protection_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.ipAccessSettingsArn">ipAccessSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn WorkspaceswebPortal#ip_access_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.networkSettingsArn">networkSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn WorkspaceswebPortal#network_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.portalCustomDomain">portalCustomDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain WorkspaceswebPortal#portal_custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.sessionLoggerArn">sessionLoggerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn WorkspaceswebPortal#session_logger_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.trustStoreArn">trustStoreArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn WorkspaceswebPortal#trust_store_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userAccessLoggingSettingsArn">userAccessLoggingSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn WorkspaceswebPortal#user_access_logging_settings_arn}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userSettingsArn">userSettingsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn WorkspaceswebPortal#user_settings_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext"></a>

```typescript
public readonly additionalEncryptionContext: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browserSettingsArn`<sup>Optional</sup> <a name="browserSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn"></a>

```typescript
public readonly browserSettingsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `dataProtectionSettingsArn`<sup>Optional</sup> <a name="dataProtectionSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.dataProtectionSettingsArn"></a>

```typescript
public readonly dataProtectionSettingsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn WorkspaceswebPortal#data_protection_settings_arn}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `ipAccessSettingsArn`<sup>Optional</sup> <a name="ipAccessSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.ipAccessSettingsArn"></a>

```typescript
public readonly ipAccessSettingsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn WorkspaceswebPortal#ip_access_settings_arn}.

---

##### `maxConcurrentSessions`<sup>Optional</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions"></a>

```typescript
public readonly maxConcurrentSessions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `networkSettingsArn`<sup>Optional</sup> <a name="networkSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.networkSettingsArn"></a>

```typescript
public readonly networkSettingsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn WorkspaceswebPortal#network_settings_arn}.

---

##### `portalCustomDomain`<sup>Optional</sup> <a name="portalCustomDomain" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.portalCustomDomain"></a>

```typescript
public readonly portalCustomDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain WorkspaceswebPortal#portal_custom_domain}.

---

##### `sessionLoggerArn`<sup>Optional</sup> <a name="sessionLoggerArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.sessionLoggerArn"></a>

```typescript
public readonly sessionLoggerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn WorkspaceswebPortal#session_logger_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspaceswebPortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `trustStoreArn`<sup>Optional</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.trustStoreArn"></a>

```typescript
public readonly trustStoreArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn WorkspaceswebPortal#trust_store_arn}.

---

##### `userAccessLoggingSettingsArn`<sup>Optional</sup> <a name="userAccessLoggingSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userAccessLoggingSettingsArn"></a>

```typescript
public readonly userAccessLoggingSettingsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn WorkspaceswebPortal#user_access_logging_settings_arn}.

---

##### `userSettingsArn`<sup>Optional</sup> <a name="userSettingsArn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalConfig.property.userSettingsArn"></a>

```typescript
public readonly userSettingsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn WorkspaceswebPortal#user_settings_arn}.

---

### WorkspaceswebPortalTags <a name="WorkspaceswebPortalTags" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.Initializer"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

const workspaceswebPortalTags: workspaceswebPortal.WorkspaceswebPortalTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#key WorkspaceswebPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#value WorkspaceswebPortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#key WorkspaceswebPortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#value WorkspaceswebPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebPortalTagsList <a name="WorkspaceswebPortalTagsList" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

new workspaceswebPortal.WorkspaceswebPortalTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.get"></a>

```typescript
public get(index: number): WorkspaceswebPortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebPortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>[]

---


### WorkspaceswebPortalTagsOutputReference <a name="WorkspaceswebPortalTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer"></a>

```typescript
import { workspaceswebPortal } from '@cdktn/provider-awscc'

new workspaceswebPortal.WorkspaceswebPortalTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspaceswebPortalTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebPortal.WorkspaceswebPortalTags">WorkspaceswebPortalTags</a>

---



