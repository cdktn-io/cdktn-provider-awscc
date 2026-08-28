# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktn/provider-awscc.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user awscc_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUser(scope: Construct, id: string, config: IdentitystoreUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig">IdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses">putAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails">putEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers">putPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos">putPhotos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate">resetBirthdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails">resetEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName">resetNickName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">resetPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos">resetPhotos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType">resetUserType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddresses` <a name="putAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```typescript
public putAddresses(value: IResolvable | IdentitystoreUserAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

---

##### `putEmails` <a name="putEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails"></a>

```typescript
public putEmails(value: IResolvable | IdentitystoreUserEmails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

---

##### `putName` <a name="putName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName"></a>

```typescript
public putName(value: IdentitystoreUserName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `putPhoneNumbers` <a name="putPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```typescript
public putPhoneNumbers(value: IResolvable | IdentitystoreUserPhoneNumbers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

---

##### `putPhotos` <a name="putPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos"></a>

```typescript
public putPhotos(value: IResolvable | IdentitystoreUserPhotos[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

---

##### `putRoles` <a name="putRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles"></a>

```typescript
public putRoles(value: IResolvable | IdentitystoreUserRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```typescript
public resetAddresses(): void
```

##### `resetBirthdate` <a name="resetBirthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate"></a>

```typescript
public resetBirthdate(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmails` <a name="resetEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```typescript
public resetEmails(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNickName` <a name="resetNickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName"></a>

```typescript
public resetNickName(): void
```

##### `resetPhoneNumbers` <a name="resetPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```typescript
public resetPhoneNumbers(): void
```

##### `resetPhotos` <a name="resetPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos"></a>

```typescript
public resetPhotos(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```typescript
public resetProfileUrl(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```typescript
public resetUserType(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

identitystoreUser.IdentitystoreUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

identitystoreUser.IdentitystoreUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

identitystoreUser.IdentitystoreUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

identitystoreUser.IdentitystoreUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentitystoreUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentitystoreUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos">photos</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus">userStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput">addressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput">birthdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput">emailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput">nameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput">nickNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">phoneNumbersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput">photosInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput">profileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput">rolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput">websiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate">birthdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName">nickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website">website</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```typescript
public readonly addresses: IdentitystoreUserAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails"></a>

```typescript
public readonly emails: IdentitystoreUserEmailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name"></a>

```typescript
public readonly name: IdentitystoreUserNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `phoneNumbers`<sup>Required</sup> <a name="phoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```typescript
public readonly phoneNumbers: IdentitystoreUserPhoneNumbersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a>

---

##### `photos`<sup>Required</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos"></a>

```typescript
public readonly photos: IdentitystoreUserPhotosList;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles"></a>

```typescript
public readonly roles: IdentitystoreUserRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userStatus`<sup>Required</sup> <a name="userStatus" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus"></a>

```typescript
public readonly userStatus: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```typescript
public readonly addressesInput: IResolvable | IdentitystoreUserAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

---

##### `birthdateInput`<sup>Optional</sup> <a name="birthdateInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput"></a>

```typescript
public readonly birthdateInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```typescript
public readonly emailsInput: IResolvable | IdentitystoreUserEmails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```typescript
public readonly identityStoreIdInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```typescript
public readonly nameInput: IResolvable | IdentitystoreUserName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `nickNameInput`<sup>Optional</sup> <a name="nickNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput"></a>

```typescript
public readonly nickNameInput: string;
```

- *Type:* string

---

##### `phoneNumbersInput`<sup>Optional</sup> <a name="phoneNumbersInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```typescript
public readonly phoneNumbersInput: IResolvable | IdentitystoreUserPhoneNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

---

##### `photosInput`<sup>Optional</sup> <a name="photosInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput"></a>

```typescript
public readonly photosInput: IResolvable | IdentitystoreUserPhotos[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```typescript
public readonly profileUrlInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | IdentitystoreUserRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput"></a>

```typescript
public readonly websiteInput: string;
```

- *Type:* string

---

##### `birthdate`<sup>Required</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate"></a>

```typescript
public readonly birthdate: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website"></a>

```typescript
public readonly website: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserAddresses: identitystoreUser.IdentitystoreUserAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country">country</a></code> | <code>string</code> | The country of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted">formatted</a></code> | <code>string</code> | A formatted version of the address for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality">locality</a></code> | <code>string</code> | A string of the address locality. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this is the primary address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region">region</a></code> | <code>string</code> | The region of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type">type</a></code> | <code>string</code> | The type of address. |

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

The country of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#country IdentitystoreUser#country}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

A formatted version of the address for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

A string of the address locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locality IdentitystoreUser#locality}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#postal_code IdentitystoreUser#postal_code}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this is the primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#region IdentitystoreUser#region}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#street_address IdentitystoreUser#street_address}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserConfig: identitystoreUser.IdentitystoreUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses">addresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]</code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate">birthdate</a></code> | <code>string</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName">displayName</a></code> | <code>string</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails">emails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]</code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale">locale</a></code> | <code>string</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName">nickName</a></code> | <code>string</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">phoneNumbers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]</code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos">photos</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]</code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">profileUrl</a></code> | <code>string</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]</code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone">timezone</a></code> | <code>string</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title">title</a></code> | <code>string</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName">userName</a></code> | <code>string</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType">userType</a></code> | <code>string</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website">website</a></code> | <code>string</code> | The user's personal website or blog URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```typescript
public readonly addresses: IResolvable | IdentitystoreUserAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `birthdate`<sup>Optional</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate"></a>

```typescript
public readonly birthdate: string;
```

- *Type:* string

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```typescript
public readonly emails: IResolvable | IdentitystoreUserEmails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```typescript
public readonly name: IdentitystoreUserName;
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `nickName`<sup>Optional</sup> <a name="nickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `phoneNumbers`<sup>Optional</sup> <a name="phoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```typescript
public readonly phoneNumbers: IResolvable | IdentitystoreUserPhoneNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `photos`<sup>Optional</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos"></a>

```typescript
public readonly photos: IResolvable | IdentitystoreUserPhotos[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles"></a>

```typescript
public readonly roles: IResolvable | IdentitystoreUserRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website"></a>

```typescript
public readonly website: string;
```

- *Type:* string

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserEmails: identitystoreUser.IdentitystoreUserEmails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this is the primary email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type">type</a></code> | <code>string</code> | The type of email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value">value</a></code> | <code>string</code> | The email address. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this is the primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserName: identitystoreUser.IdentitystoreUserName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName">familyName</a></code> | <code>string</code> | The family name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted">formatted</a></code> | <code>string</code> | A string containing a formatted version of the name for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName">givenName</a></code> | <code>string</code> | The given name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | The honorific prefix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | The honorific suffix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName">middleName</a></code> | <code>string</code> | The middle name of the user. |

---

##### `familyName`<sup>Optional</sup> <a name="familyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

The family name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

A string containing a formatted version of the name for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

The given name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

The honorific prefix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

The honorific suffix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

The middle name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserPhoneNumbers: identitystoreUser.IdentitystoreUserPhoneNumbers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this is the primary phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">type</a></code> | <code>string</code> | The type of phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">value</a></code> | <code>string</code> | The phone number. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this is the primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserPhotos <a name="IdentitystoreUserPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserPhotos: identitystoreUser.IdentitystoreUserPhotos = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display">display</a></code> | <code>string</code> | A display name for the photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this is the primary photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type">type</a></code> | <code>string</code> | The type of photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value">value</a></code> | <code>string</code> | The photo data or URL. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

A display name for the photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display IdentitystoreUser#display}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this is the primary photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The photo data or URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserRoles <a name="IdentitystoreUserRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

const identitystoreUserRoles: identitystoreUser.IdentitystoreUserRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this is the primary role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type">type</a></code> | <code>string</code> | The type of role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value">value</a></code> | <code>string</code> | The role name. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this is the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesList <a name="IdentitystoreUserAddressesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get"></a>

```typescript
public get(index: number): IdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>[]

---


### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```typescript
public resetFormatted(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">formattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```typescript
public readonly formattedInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsList <a name="IdentitystoreUserEmailsList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserEmailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get"></a>

```typescript
public get(index: number): IdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserEmails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>[]

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserEmails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName">resetFamilyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">resetFormatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">resetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">resetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">resetMiddleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamilyName` <a name="resetFamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName"></a>

```typescript
public resetFamilyName(): void
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```typescript
public resetFormatted(): void
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```

##### `resetHonorificPrefix` <a name="resetHonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```typescript
public resetHonorificPrefix(): void
```

##### `resetHonorificSuffix` <a name="resetHonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```typescript
public resetHonorificSuffix(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">formattedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">honorificPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">honorificSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```typescript
public readonly familyNameInput: string;
```

- *Type:* string

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```typescript
public readonly formattedInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `honorificPrefixInput`<sup>Optional</sup> <a name="honorificPrefixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```typescript
public readonly honorificPrefixInput: string;
```

- *Type:* string

---

##### `honorificSuffixInput`<sup>Optional</sup> <a name="honorificSuffixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```typescript
public readonly honorificSuffixInput: string;
```

- *Type:* string

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersList <a name="IdentitystoreUserPhoneNumbersList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserPhoneNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get"></a>

```typescript
public get(index: number): IdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserPhoneNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>[]

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserPhoneNumbers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---


### IdentitystoreUserPhotosList <a name="IdentitystoreUserPhotosList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserPhotosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get"></a>

```typescript
public get(index: number): IdentitystoreUserPhotosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserPhotos[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>[]

---


### IdentitystoreUserPhotosOutputReference <a name="IdentitystoreUserPhotosOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserPhotosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserPhotos;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>

---


### IdentitystoreUserRolesList <a name="IdentitystoreUserRolesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get"></a>

```typescript
public get(index: number): IdentitystoreUserRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>[]

---


### IdentitystoreUserRolesOutputReference <a name="IdentitystoreUserRolesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer"></a>

```typescript
import { identitystoreUser } from '@cdktn/provider-awscc'

new identitystoreUser.IdentitystoreUserRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentitystoreUserRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>

---



