# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktn/provider-awscc.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user awscc_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_store_id: str,
  addresses: IResolvable | typing.List[IdentitystoreUserAddresses] = None,
  birthdate: str = None,
  display_name: str = None,
  emails: IResolvable | typing.List[IdentitystoreUserEmails] = None,
  locale: str = None,
  name: IdentitystoreUserName = None,
  nick_name: str = None,
  phone_numbers: IResolvable | typing.List[IdentitystoreUserPhoneNumbers] = None,
  photos: IResolvable | typing.List[IdentitystoreUserPhotos] = None,
  preferred_language: str = None,
  profile_url: str = None,
  roles: IResolvable | typing.List[IdentitystoreUserRoles] = None,
  timezone: str = None,
  title: str = None,
  user_name: str = None,
  user_type: str = None,
  website: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId">identity_store_id</a></code> | <code>str</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses">addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]</code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.birthdate">birthdate</a></code> | <code>str</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails">emails</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]</code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale">locale</a></code> | <code>str</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickName">nick_name</a></code> | <code>str</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers">phone_numbers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]</code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.photos">photos</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]</code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage">preferred_language</a></code> | <code>str</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl">profile_url</a></code> | <code>str</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]</code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.website">website</a></code> | <code>str</code> | The user's personal website or blog URL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId"></a>

- *Type:* str

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `birthdate`<sup>Optional</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.birthdate"></a>

- *Type:* str

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName"></a>

- *Type:* str

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale"></a>

- *Type:* str

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `nick_name`<sup>Optional</sup> <a name="nick_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickName"></a>

- *Type:* str

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `phone_numbers`<sup>Optional</sup> <a name="phone_numbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `photos`<sup>Optional</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.photos"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage"></a>

- *Type:* str

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl"></a>

- *Type:* str

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.roles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone"></a>

- *Type:* str

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.title"></a>

- *Type:* str

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName"></a>

- *Type:* str

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType"></a>

- *Type:* str

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.Initializer.parameter.website"></a>

- *Type:* str

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses">put_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails">put_emails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers">put_phone_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos">put_photos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses">reset_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate">reset_birthdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails">reset_emails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName">reset_nick_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">reset_phone_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos">reset_photos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl">reset_profile_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName">reset_user_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType">reset_user_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite">reset_website</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_addresses` <a name="put_addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```python
def put_addresses(
  value: IResolvable | typing.List[IdentitystoreUserAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]

---

##### `put_emails` <a name="put_emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails"></a>

```python
def put_emails(
  value: IResolvable | typing.List[IdentitystoreUserEmails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]

---

##### `put_name` <a name="put_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName"></a>

```python
def put_name(
  family_name: str = None,
  formatted: str = None,
  given_name: str = None,
  honorific_prefix: str = None,
  honorific_suffix: str = None,
  middle_name: str = None
) -> None
```

###### `family_name`<sup>Optional</sup> <a name="family_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.familyName"></a>

- *Type:* str

The family name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}

---

###### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.formatted"></a>

- *Type:* str

A string containing a formatted version of the name for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.givenName"></a>

- *Type:* str

The given name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}

---

###### `honorific_prefix`<sup>Optional</sup> <a name="honorific_prefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.honorificPrefix"></a>

- *Type:* str

The honorific prefix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}

---

###### `honorific_suffix`<sup>Optional</sup> <a name="honorific_suffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.honorificSuffix"></a>

- *Type:* str

The honorific suffix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}

---

###### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putName.parameter.middleName"></a>

- *Type:* str

The middle name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}

---

##### `put_phone_numbers` <a name="put_phone_numbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```python
def put_phone_numbers(
  value: IResolvable | typing.List[IdentitystoreUserPhoneNumbers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]

---

##### `put_photos` <a name="put_photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos"></a>

```python
def put_photos(
  value: IResolvable | typing.List[IdentitystoreUserPhotos]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putPhotos.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]

---

##### `put_roles` <a name="put_roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles"></a>

```python
def put_roles(
  value: IResolvable | typing.List[IdentitystoreUserRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]

---

##### `reset_addresses` <a name="reset_addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```python
def reset_addresses() -> None
```

##### `reset_birthdate` <a name="reset_birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetBirthdate"></a>

```python
def reset_birthdate() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_emails` <a name="reset_emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```python
def reset_emails() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nick_name` <a name="reset_nick_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetNickName"></a>

```python
def reset_nick_name() -> None
```

##### `reset_phone_numbers` <a name="reset_phone_numbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```python
def reset_phone_numbers() -> None
```

##### `reset_photos` <a name="reset_photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPhotos"></a>

```python
def reset_photos() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_profile_url` <a name="reset_profile_url" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```python
def reset_profile_url() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserName"></a>

```python
def reset_user_name() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```python
def reset_user_type() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.resetWebsite"></a>

```python
def reset_website() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUser.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IdentitystoreUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentitystoreUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentitystoreUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers">phone_numbers</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos">photos</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus">user_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput">addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput">birthdate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput">emails_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">identity_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput">name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput">nick_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">phone_numbers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput">photos_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput">profile_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput">roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput">website_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate">birthdate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName">nick_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website">website</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```python
addresses: IdentitystoreUserAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList">IdentitystoreUserAddressesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emails"></a>

```python
emails: IdentitystoreUserEmailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList">IdentitystoreUserEmailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.name"></a>

```python
name: IdentitystoreUserNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `phone_numbers`<sup>Required</sup> <a name="phone_numbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```python
phone_numbers: IdentitystoreUserPhoneNumbersList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList">IdentitystoreUserPhoneNumbersList</a>

---

##### `photos`<sup>Required</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photos"></a>

```python
photos: IdentitystoreUserPhotosList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList">IdentitystoreUserPhotosList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.roles"></a>

```python
roles: IdentitystoreUserRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList">IdentitystoreUserRolesList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_status`<sup>Required</sup> <a name="user_status" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userStatus"></a>

```python
user_status: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```python
addresses_input: IResolvable | typing.List[IdentitystoreUserAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]

---

##### `birthdate_input`<sup>Optional</sup> <a name="birthdate_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdateInput"></a>

```python
birthdate_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `emails_input`<sup>Optional</sup> <a name="emails_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```python
emails_input: IResolvable | typing.List[IdentitystoreUserEmails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]

---

##### `identity_store_id_input`<sup>Optional</sup> <a name="identity_store_id_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```python
identity_store_id_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```python
name_input: IResolvable | IdentitystoreUserName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `nick_name_input`<sup>Optional</sup> <a name="nick_name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickNameInput"></a>

```python
nick_name_input: str
```

- *Type:* str

---

##### `phone_numbers_input`<sup>Optional</sup> <a name="phone_numbers_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```python
phone_numbers_input: IResolvable | typing.List[IdentitystoreUserPhoneNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]

---

##### `photos_input`<sup>Optional</sup> <a name="photos_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.photosInput"></a>

```python
photos_input: IResolvable | typing.List[IdentitystoreUserPhotos]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `profile_url_input`<sup>Optional</sup> <a name="profile_url_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```python
profile_url_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.rolesInput"></a>

```python
roles_input: IResolvable | typing.List[IdentitystoreUserRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.websiteInput"></a>

```python
website_input: str
```

- *Type:* str

---

##### `birthdate`<sup>Required</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.birthdate"></a>

```python
birthdate: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `nick_name`<sup>Required</sup> <a name="nick_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.nickName"></a>

```python
nick_name: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.website"></a>

```python
website: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserAddresses(
  country: str = None,
  formatted: str = None,
  locality: str = None,
  postal_code: str = None,
  primary: bool | IResolvable = None,
  region: str = None,
  street_address: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country">country</a></code> | <code>str</code> | The country of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted">formatted</a></code> | <code>str</code> | A formatted version of the address for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality">locality</a></code> | <code>str</code> | A string of the address locality. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">postal_code</a></code> | <code>str</code> | The postal code of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this is the primary address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region">region</a></code> | <code>str</code> | The region of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">street_address</a></code> | <code>str</code> | The street of the address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type">type</a></code> | <code>str</code> | The type of address. |

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```python
country: str
```

- *Type:* str

The country of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#country IdentitystoreUser#country}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

A formatted version of the address for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```python
locality: str
```

- *Type:* str

A string of the address locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#locality IdentitystoreUser#locality}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

The postal code of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#postal_code IdentitystoreUser#postal_code}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this is the primary address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#region IdentitystoreUser#region}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

The street of the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#street_address IdentitystoreUser#street_address}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```python
type: str
```

- *Type:* str

The type of address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_store_id: str,
  addresses: IResolvable | typing.List[IdentitystoreUserAddresses] = None,
  birthdate: str = None,
  display_name: str = None,
  emails: IResolvable | typing.List[IdentitystoreUserEmails] = None,
  locale: str = None,
  name: IdentitystoreUserName = None,
  nick_name: str = None,
  phone_numbers: IResolvable | typing.List[IdentitystoreUserPhoneNumbers] = None,
  photos: IResolvable | typing.List[IdentitystoreUserPhotos] = None,
  preferred_language: str = None,
  profile_url: str = None,
  roles: IResolvable | typing.List[IdentitystoreUserRoles] = None,
  timezone: str = None,
  title: str = None,
  user_name: str = None,
  user_type: str = None,
  website: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses">addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]</code> | A list of addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate">birthdate</a></code> | <code>str</code> | The user's birthdate in YYYY-MM-DD format. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName">display_name</a></code> | <code>str</code> | A string containing the name of the user for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails">emails</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]</code> | A list of email addresses associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale">locale</a></code> | <code>str</code> | The geographical region or location of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | The name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName">nick_name</a></code> | <code>str</code> | An alternate name for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">phone_numbers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]</code> | A list of phone numbers associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos">photos</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]</code> | A list of photos associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | The preferred language of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">profile_url</a></code> | <code>str</code> | A URL associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]</code> | A list of roles associated with the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone">timezone</a></code> | <code>str</code> | The time zone for the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title">title</a></code> | <code>str</code> | The title of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName">user_name</a></code> | <code>str</code> | A unique string used to identify the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType">user_type</a></code> | <code>str</code> | A string indicating the type of user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website">website</a></code> | <code>str</code> | The user's personal website or blog URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```python
addresses: IResolvable | typing.List[IdentitystoreUserAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]

A list of addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `birthdate`<sup>Optional</sup> <a name="birthdate" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.birthdate"></a>

```python
birthdate: str
```

- *Type:* str

The user's birthdate in YYYY-MM-DD format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#birthdate IdentitystoreUser#birthdate}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A string containing the name of the user for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#display_name IdentitystoreUser#display_name}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```python
emails: IResolvable | typing.List[IdentitystoreUserEmails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]

A list of email addresses associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#emails IdentitystoreUser#emails}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

The geographical region or location of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#locale IdentitystoreUser#locale}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```python
name: IdentitystoreUserName
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#name IdentitystoreUser#name}

---

##### `nick_name`<sup>Optional</sup> <a name="nick_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.nickName"></a>

```python
nick_name: str
```

- *Type:* str

An alternate name for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#nick_name IdentitystoreUser#nick_name}

---

##### `phone_numbers`<sup>Optional</sup> <a name="phone_numbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```python
phone_numbers: IResolvable | typing.List[IdentitystoreUserPhoneNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]

A list of phone numbers associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `photos`<sup>Optional</sup> <a name="photos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.photos"></a>

```python
photos: IResolvable | typing.List[IdentitystoreUserPhotos]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]

A list of photos associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#photos IdentitystoreUser#photos}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

The preferred language of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#preferred_language IdentitystoreUser#preferred_language}

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

A URL associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#profile_url IdentitystoreUser#profile_url}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.roles"></a>

```python
roles: IResolvable | typing.List[IdentitystoreUserRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]

A list of roles associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#roles IdentitystoreUser#roles}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The time zone for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#timezone IdentitystoreUser#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#title IdentitystoreUser#title}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

A unique string used to identify the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#user_name IdentitystoreUser#user_name}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

A string indicating the type of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#user_type IdentitystoreUser#user_type}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserConfig.property.website"></a>

```python
website: str
```

- *Type:* str

The user's personal website or blog URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#website IdentitystoreUser#website}

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserEmails(
  primary: bool | IResolvable = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this is the primary email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type">type</a></code> | <code>str</code> | The type of email address. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value">value</a></code> | <code>str</code> | The email address. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this is the primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```python
type: str
```

- *Type:* str

The type of email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```python
value: str
```

- *Type:* str

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserName(
  family_name: str = None,
  formatted: str = None,
  given_name: str = None,
  honorific_prefix: str = None,
  honorific_suffix: str = None,
  middle_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName">family_name</a></code> | <code>str</code> | The family name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted">formatted</a></code> | <code>str</code> | A string containing a formatted version of the name for display. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName">given_name</a></code> | <code>str</code> | The given name of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | The honorific prefix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | The honorific suffix of the user. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName">middle_name</a></code> | <code>str</code> | The middle name of the user. |

---

##### `family_name`<sup>Optional</sup> <a name="family_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

The family name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#family_name IdentitystoreUser#family_name}

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

A string containing a formatted version of the name for display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#formatted IdentitystoreUser#formatted}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

The given name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#given_name IdentitystoreUser#given_name}

---

##### `honorific_prefix`<sup>Optional</sup> <a name="honorific_prefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

The honorific prefix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}

---

##### `honorific_suffix`<sup>Optional</sup> <a name="honorific_suffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

The honorific suffix of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

The middle name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#middle_name IdentitystoreUser#middle_name}

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserPhoneNumbers(
  primary: bool | IResolvable = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this is the primary phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">type</a></code> | <code>str</code> | The type of phone number. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">value</a></code> | <code>str</code> | The phone number. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this is the primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```python
type: str
```

- *Type:* str

The type of phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```python
value: str
```

- *Type:* str

The phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserPhotos <a name="IdentitystoreUserPhotos" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserPhotos(
  display: str = None,
  primary: bool | IResolvable = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display">display</a></code> | <code>str</code> | A display name for the photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this is the primary photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type">type</a></code> | <code>str</code> | The type of photo. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value">value</a></code> | <code>str</code> | The photo data or URL. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.display"></a>

```python
display: str
```

- *Type:* str

A display name for the photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#display IdentitystoreUser#display}

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this is the primary photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.type"></a>

```python
type: str
```

- *Type:* str

The type of photo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos.property.value"></a>

```python
value: str
```

- *Type:* str

The photo data or URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

### IdentitystoreUserRoles <a name="IdentitystoreUserRoles" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserRoles(
  primary: bool | IResolvable = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this is the primary role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type">type</a></code> | <code>str</code> | The type of role. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value">value</a></code> | <code>str</code> | The role name. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this is the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#primary IdentitystoreUser#primary}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.type"></a>

```python
type: str
```

- *Type:* str

The type of role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#type IdentitystoreUser#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles.property.value"></a>

```python
value: str
```

- *Type:* str

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/identitystore_user#value IdentitystoreUser#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesList <a name="IdentitystoreUserAddressesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IdentitystoreUserAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>]

---


### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">reset_formatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_country` <a name="reset_country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_formatted` <a name="reset_formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```python
def reset_formatted() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">formatted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `formatted_input`<sup>Optional</sup> <a name="formatted_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```python
formatted_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IdentitystoreUserAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsList <a name="IdentitystoreUserEmailsList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserEmailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IdentitystoreUserEmails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>]

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserEmailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IdentitystoreUserEmails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName">reset_family_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">reset_formatted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">reset_honorific_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">reset_honorific_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">reset_middle_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_family_name` <a name="reset_family_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFamilyName"></a>

```python
def reset_family_name() -> None
```

##### `reset_formatted` <a name="reset_formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```python
def reset_formatted() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_honorific_prefix` <a name="reset_honorific_prefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```python
def reset_honorific_prefix() -> None
```

##### `reset_honorific_suffix` <a name="reset_honorific_suffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```python
def reset_honorific_suffix() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">family_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">formatted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">honorific_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">honorific_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_name_input`<sup>Optional</sup> <a name="family_name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```python
family_name_input: str
```

- *Type:* str

---

##### `formatted_input`<sup>Optional</sup> <a name="formatted_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```python
formatted_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `honorific_prefix_input`<sup>Optional</sup> <a name="honorific_prefix_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```python
honorific_prefix_input: str
```

- *Type:* str

---

##### `honorific_suffix_input`<sup>Optional</sup> <a name="honorific_suffix_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```python
honorific_suffix_input: str
```

- *Type:* str

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `honorific_prefix`<sup>Required</sup> <a name="honorific_prefix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

---

##### `honorific_suffix`<sup>Required</sup> <a name="honorific_suffix" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IdentitystoreUserName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersList <a name="IdentitystoreUserPhoneNumbersList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserPhoneNumbersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IdentitystoreUserPhoneNumbers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>]

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IdentitystoreUserPhoneNumbers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---


### IdentitystoreUserPhotosList <a name="IdentitystoreUserPhotosList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserPhotosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentitystoreUserPhotosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IdentitystoreUserPhotos]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>]

---


### IdentitystoreUserPhotosOutputReference <a name="IdentitystoreUserPhotosOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserPhotosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotosOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IdentitystoreUserPhotos
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserPhotos">IdentitystoreUserPhotos</a>

---


### IdentitystoreUserRolesList <a name="IdentitystoreUserRolesList" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentitystoreUserRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IdentitystoreUserRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>]

---


### IdentitystoreUserRolesOutputReference <a name="IdentitystoreUserRolesOutputReference" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import identitystore_user

identitystoreUser.IdentitystoreUserRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IdentitystoreUserRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.identitystoreUser.IdentitystoreUserRoles">IdentitystoreUserRoles</a>

---



