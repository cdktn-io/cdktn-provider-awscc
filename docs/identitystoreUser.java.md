# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktn/provider-awscc.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user awscc_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUser;

IdentitystoreUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityStoreId(java.lang.String)
//  .addresses(IResolvable|java.util.List<IdentitystoreUserAddresses>)
//  .birthdate(java.lang.String)
//  .displayName(java.lang.String)
//  .emails(IResolvable|java.util.List<IdentitystoreUserEmails>)
//  .locale(java.lang.String)
//  .name(IdentitystoreUserName)
//  .nickName(java.lang.String)
//  .phoneNumbers(IResolvable|java.util.List<IdentitystoreUserPhoneNumbers>)
//  .photos(IResolvable|java.util.List<IdentitystoreUserPhotos>)
//  .preferredLanguage(java.lang.String)
//  .profileUrl(java.lang.String)
//  .roles(IResolvable|java.util.List<IdentitystoreUserRoles>)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userName(java.lang.String)
//  .userType(java.lang.String)
//  .website(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses">addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>></code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.birthdate">birthdate</a></code> | <code>java.lang.String</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails">emails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>></code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickName">nickName</a></code> | <code>java.lang.String</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers">phoneNumbers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>></code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.photos">photos</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>></code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.roles">roles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>></code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType">userType</a></code> | <code>java.lang.String</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.website">website</a></code> | <code>java.lang.String</code> | The user's personal website or blog URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId"></a>

- *Type:* java.lang.String

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>>

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `birthdate`<sup>Optional</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.birthdate"></a>

- *Type:* java.lang.String

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>>

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `nickName`<sup>Optional</sup> <a name="nickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickName"></a>

- *Type:* java.lang.String

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `phoneNumbers`<sup>Optional</sup> <a name="phoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>>

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `photos`<sup>Optional</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.photos"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>>

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage"></a>

- *Type:* java.lang.String

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl"></a>

- *Type:* java.lang.String

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.roles"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>>

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.title"></a>

- *Type:* java.lang.String

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType"></a>

- *Type:* java.lang.String

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.website"></a>

- *Type:* java.lang.String

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddresses` <a name="putAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```java
public void putAddresses(IResolvable|java.util.List<IdentitystoreUserAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>>

---

##### `putEmails` <a name="putEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails"></a>

```java
public void putEmails(IResolvable|java.util.List<IdentitystoreUserEmails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>>

---

##### `putName` <a name="putName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName"></a>

```java
public void putName(IdentitystoreUserName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `putPhoneNumbers` <a name="putPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```java
public void putPhoneNumbers(IResolvable|java.util.List<IdentitystoreUserPhoneNumbers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>>

---

##### `putPhotos` <a name="putPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos"></a>

```java
public void putPhotos(IResolvable|java.util.List<IdentitystoreUserPhotos> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>>

---

##### `putRoles` <a name="putRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles"></a>

```java
public void putRoles(IResolvable|java.util.List<IdentitystoreUserRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>>

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```java
public void resetAddresses()
```

##### `resetBirthdate` <a name="resetBirthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate"></a>

```java
public void resetBirthdate()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmails` <a name="resetEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```java
public void resetEmails()
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName"></a>

```java
public void resetName()
```

##### `resetNickName` <a name="resetNickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName"></a>

```java
public void resetNickName()
```

##### `resetPhoneNumbers` <a name="resetPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```java
public void resetPhoneNumbers()
```

##### `resetPhotos` <a name="resetPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos"></a>

```java
public void resetPhotos()
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```java
public void resetPreferredLanguage()
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```java
public void resetProfileUrl()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName"></a>

```java
public void resetUserName()
```

##### `resetUserType` <a name="resetUserType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```java
public void resetUserType()
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite"></a>

```java
public void resetWebsite()
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

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUser;

IdentitystoreUser.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUser;

IdentitystoreUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUser;

IdentitystoreUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUser;

IdentitystoreUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentitystoreUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentitystoreUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentitystoreUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos">photos</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus">userStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput">addressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput">birthdateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput">emailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">identityStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput">nameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput">nickNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">phoneNumbersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput">photosInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput">profileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput">rolesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput">userTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput">websiteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate">birthdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName">nickName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website">website</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```java
public IdentitystoreUserAddressesList getAddresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails"></a>

```java
public IdentitystoreUserEmailsList getEmails();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name"></a>

```java
public IdentitystoreUserNameOutputReference getName();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `phoneNumbers`<sup>Required</sup> <a name="phoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```java
public IdentitystoreUserPhoneNumbersList getPhoneNumbers();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a>

---

##### `photos`<sup>Required</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos"></a>

```java
public IdentitystoreUserPhotosList getPhotos();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles"></a>

```java
public IdentitystoreUserRolesList getRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `userStatus`<sup>Required</sup> <a name="userStatus" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus"></a>

```java
public java.lang.String getUserStatus();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserAddresses> getAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>>

---

##### `birthdateInput`<sup>Optional</sup> <a name="birthdateInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput"></a>

```java
public java.lang.String getBirthdateInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserEmails> getEmailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>>

---

##### `identityStoreIdInput`<sup>Optional</sup> <a name="identityStoreIdInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```java
public java.lang.String getIdentityStoreIdInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```java
public IResolvable|IdentitystoreUserName getNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `nickNameInput`<sup>Optional</sup> <a name="nickNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput"></a>

```java
public java.lang.String getNickNameInput();
```

- *Type:* java.lang.String

---

##### `phoneNumbersInput`<sup>Optional</sup> <a name="phoneNumbersInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserPhoneNumbers> getPhoneNumbersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>>

---

##### `photosInput`<sup>Optional</sup> <a name="photosInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserPhotos> getPhotosInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>>

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```java
public java.lang.String getPreferredLanguageInput();
```

- *Type:* java.lang.String

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```java
public java.lang.String getProfileUrlInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserRoles> getRolesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```java
public java.lang.String getUserTypeInput();
```

- *Type:* java.lang.String

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput"></a>

```java
public java.lang.String getWebsiteInput();
```

- *Type:* java.lang.String

---

##### `birthdate`<sup>Required</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate"></a>

```java
public java.lang.String getBirthdate();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName"></a>

```java
public java.lang.String getNickName();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website"></a>

```java
public java.lang.String getWebsite();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserAddresses;

IdentitystoreUserAddresses.builder()
//  .country(java.lang.String)
//  .formatted(java.lang.String)
//  .locality(java.lang.String)
//  .postalCode(java.lang.String)
//  .primary(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .streetAddress(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country">country</a></code> | <code>java.lang.String</code> | The country of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted">formatted</a></code> | <code>java.lang.String</code> | A formatted version of the address for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality">locality</a></code> | <code>java.lang.String</code> | A string of the address locality. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The postal code of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this is the primary address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region">region</a></code> | <code>java.lang.String</code> | The region of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type">type</a></code> | <code>java.lang.String</code> | The type of address. |

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

The country of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#country IdentitystoreUser#country}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

A formatted version of the address for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

A string of the address locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locality IdentitystoreUser#locality}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

The postal code of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#postal_code IdentitystoreUser#postal_code}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this is the primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#region IdentitystoreUser#region}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

The street of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#street_address IdentitystoreUser#street_address}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserConfig;

IdentitystoreUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityStoreId(java.lang.String)
//  .addresses(IResolvable|java.util.List<IdentitystoreUserAddresses>)
//  .birthdate(java.lang.String)
//  .displayName(java.lang.String)
//  .emails(IResolvable|java.util.List<IdentitystoreUserEmails>)
//  .locale(java.lang.String)
//  .name(IdentitystoreUserName)
//  .nickName(java.lang.String)
//  .phoneNumbers(IResolvable|java.util.List<IdentitystoreUserPhoneNumbers>)
//  .photos(IResolvable|java.util.List<IdentitystoreUserPhotos>)
//  .preferredLanguage(java.lang.String)
//  .profileUrl(java.lang.String)
//  .roles(IResolvable|java.util.List<IdentitystoreUserRoles>)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userName(java.lang.String)
//  .userType(java.lang.String)
//  .website(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">identityStoreId</a></code> | <code>java.lang.String</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses">addresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>></code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate">birthdate</a></code> | <code>java.lang.String</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails">emails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>></code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName">nickName</a></code> | <code>java.lang.String</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">phoneNumbers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>></code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos">photos</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>></code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles">roles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>></code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title">title</a></code> | <code>java.lang.String</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType">userType</a></code> | <code>java.lang.String</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website">website</a></code> | <code>java.lang.String</code> | The user's personal website or blog URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```java
public java.lang.String getIdentityStoreId();
```

- *Type:* java.lang.String

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserAddresses> getAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>>

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `birthdate`<sup>Optional</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate"></a>

```java
public java.lang.String getBirthdate();
```

- *Type:* java.lang.String

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserEmails> getEmails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>>

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```java
public IdentitystoreUserName getName();
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `nickName`<sup>Optional</sup> <a name="nickName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName"></a>

```java
public java.lang.String getNickName();
```

- *Type:* java.lang.String

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `phoneNumbers`<sup>Optional</sup> <a name="phoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserPhoneNumbers> getPhoneNumbers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>>

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `photos`<sup>Optional</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserPhotos> getPhotos();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>>

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserRoles> getRoles();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>>

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website"></a>

```java
public java.lang.String getWebsite();
```

- *Type:* java.lang.String

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserEmails;

IdentitystoreUserEmails.builder()
//  .primary(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this is the primary email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type">type</a></code> | <code>java.lang.String</code> | The type of email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value">value</a></code> | <code>java.lang.String</code> | The email address. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this is the primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserName;

IdentitystoreUserName.builder()
//  .familyName(java.lang.String)
//  .formatted(java.lang.String)
//  .givenName(java.lang.String)
//  .honorificPrefix(java.lang.String)
//  .honorificSuffix(java.lang.String)
//  .middleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName">familyName</a></code> | <code>java.lang.String</code> | The family name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted">formatted</a></code> | <code>java.lang.String</code> | A string containing a formatted version of the name for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName">givenName</a></code> | <code>java.lang.String</code> | The given name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | The honorific prefix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | The honorific suffix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName">middleName</a></code> | <code>java.lang.String</code> | The middle name of the user. |

---

##### `familyName`<sup>Optional</sup> <a name="familyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

The family name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

A string containing a formatted version of the name for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

The given name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

The honorific prefix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

The honorific suffix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

The middle name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserPhoneNumbers;

IdentitystoreUserPhoneNumbers.builder()
//  .primary(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this is the primary phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">type</a></code> | <code>java.lang.String</code> | The type of phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">value</a></code> | <code>java.lang.String</code> | The phone number. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this is the primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserPhotos <a name="IdentitystoreUserPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserPhotos;

IdentitystoreUserPhotos.builder()
//  .display(java.lang.String)
//  .primary(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display">display</a></code> | <code>java.lang.String</code> | A display name for the photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this is the primary photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type">type</a></code> | <code>java.lang.String</code> | The type of photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value">value</a></code> | <code>java.lang.String</code> | The photo data or URL. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

A display name for the photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#display IdentitystoreUser#display}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this is the primary photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The photo data or URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserRoles <a name="IdentitystoreUserRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserRoles;

IdentitystoreUserRoles.builder()
//  .primary(java.lang.Boolean|IResolvable)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this is the primary role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type">type</a></code> | <code>java.lang.String</code> | The type of role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value">value</a></code> | <code>java.lang.String</code> | The role name. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this is the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesList <a name="IdentitystoreUserAddressesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserAddressesList;

new IdentitystoreUserAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get"></a>

```java
public IdentitystoreUserAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>>

---


### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserAddressesOutputReference;

new IdentitystoreUserAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```java
public void resetFormatted()
```

##### `resetLocality` <a name="resetLocality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">formattedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```java
public java.lang.String getFormattedInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|IdentitystoreUserAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsList <a name="IdentitystoreUserEmailsList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserEmailsList;

new IdentitystoreUserEmailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get"></a>

```java
public IdentitystoreUserEmailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserEmails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>>

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserEmailsOutputReference;

new IdentitystoreUserEmailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```java
public IResolvable|IdentitystoreUserEmails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserNameOutputReference;

new IdentitystoreUserNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamilyName` <a name="resetFamilyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName"></a>

```java
public void resetFamilyName()
```

##### `resetFormatted` <a name="resetFormatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```java
public void resetFormatted()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetHonorificPrefix` <a name="resetHonorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```java
public void resetHonorificPrefix()
```

##### `resetHonorificSuffix` <a name="resetHonorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```java
public void resetHonorificSuffix()
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```java
public void resetMiddleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">formattedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">honorificPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">honorificSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">familyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```java
public java.lang.String getFamilyNameInput();
```

- *Type:* java.lang.String

---

##### `formattedInput`<sup>Optional</sup> <a name="formattedInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```java
public java.lang.String getFormattedInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `honorificPrefixInput`<sup>Optional</sup> <a name="honorificPrefixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```java
public java.lang.String getHonorificPrefixInput();
```

- *Type:* java.lang.String

---

##### `honorificSuffixInput`<sup>Optional</sup> <a name="honorificSuffixInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```java
public java.lang.String getHonorificSuffixInput();
```

- *Type:* java.lang.String

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```java
public java.lang.String getMiddleNameInput();
```

- *Type:* java.lang.String

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```java
public java.lang.String getFormatted();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```java
public IResolvable|IdentitystoreUserName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersList <a name="IdentitystoreUserPhoneNumbersList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserPhoneNumbersList;

new IdentitystoreUserPhoneNumbersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get"></a>

```java
public IdentitystoreUserPhoneNumbersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserPhoneNumbers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>>

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserPhoneNumbersOutputReference;

new IdentitystoreUserPhoneNumbersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```java
public IResolvable|IdentitystoreUserPhoneNumbers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---


### IdentitystoreUserPhotosList <a name="IdentitystoreUserPhotosList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserPhotosList;

new IdentitystoreUserPhotosList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get"></a>

```java
public IdentitystoreUserPhotosOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserPhotos> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>>

---


### IdentitystoreUserPhotosOutputReference <a name="IdentitystoreUserPhotosOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserPhotosOutputReference;

new IdentitystoreUserPhotosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue"></a>

```java
public IResolvable|IdentitystoreUserPhotos getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>

---


### IdentitystoreUserRolesList <a name="IdentitystoreUserRolesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserRolesList;

new IdentitystoreUserRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get"></a>

```java
public IdentitystoreUserRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IdentitystoreUserRoles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>>

---


### IdentitystoreUserRolesOutputReference <a name="IdentitystoreUserRolesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.identitystore_user.IdentitystoreUserRolesOutputReference;

new IdentitystoreUserRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue"></a>

```java
public IResolvable|IdentitystoreUserRoles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>

---



