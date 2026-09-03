# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktn/provider-awscc.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktn/provider-awscc.connectUser.ConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  routing_profile_arn: str,
  security_profile_arns: typing.List[str],
  username: str,
  after_contact_work_configs: IResolvable | typing.List[ConnectUserAfterContactWorkConfigs] = None,
  auto_accept_configs: IResolvable | typing.List[ConnectUserAutoAcceptConfigs] = None,
  directory_user_id: str = None,
  hierarchy_group_arn: str = None,
  identity_info: ConnectUserIdentityInfo = None,
  password: str = None,
  persistent_connection_configs: IResolvable | typing.List[ConnectUserPersistentConnectionConfigs] = None,
  phone_config: ConnectUserPhoneConfig = None,
  phone_number_configs: IResolvable | typing.List[ConnectUserPhoneNumberConfigs] = None,
  tags: IResolvable | typing.List[ConnectUserTags] = None,
  user_proficiencies: IResolvable | typing.List[ConnectUserUserProficiencies] = None,
  voice_enhancement_configs: IResolvable | typing.List[ConnectUserVoiceEnhancementConfigs] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.routingProfileArn">routing_profile_arn</a></code> | <code>str</code> | The identifier of the routing profile for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.securityProfileArns">security_profile_arns</a></code> | <code>typing.List[str]</code> | One or more security profile arns for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.username">username</a></code> | <code>str</code> | The user name for the account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.afterContactWorkConfigs">after_contact_work_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]</code> | After Contact Work configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.autoAcceptConfigs">auto_accept_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]</code> | Auto-accept configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.directoryUserId">directory_user_id</a></code> | <code>str</code> | The identifier of the user account in the directory used for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.hierarchyGroupArn">hierarchy_group_arn</a></code> | <code>str</code> | The identifier of the hierarchy group for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.identityInfo">identity_info</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | The information about the identity of the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the user account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.persistentConnectionConfigs">persistent_connection_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]</code> | Persistent Connection configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneConfig">phone_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | The phone settings for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneNumberConfigs">phone_number_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]</code> | Phone Number configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.userProficiencies">user_proficiencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]</code> | One or more predefined attributes assigned to a user, with a level that indicates how skilled they are. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.voiceEnhancementConfigs">voice_enhancement_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]</code> | Voice Enhancement configurations of a user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}

---

##### `routing_profile_arn`<sup>Required</sup> <a name="routing_profile_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.routingProfileArn"></a>

- *Type:* str

The identifier of the routing profile for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}

---

##### `security_profile_arns`<sup>Required</sup> <a name="security_profile_arns" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.securityProfileArns"></a>

- *Type:* typing.List[str]

One or more security profile arns for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.username"></a>

- *Type:* str

The user name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#username ConnectUser#username}

---

##### `after_contact_work_configs`<sup>Optional</sup> <a name="after_contact_work_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.afterContactWorkConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]

After Contact Work configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}

---

##### `auto_accept_configs`<sup>Optional</sup> <a name="auto_accept_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.autoAcceptConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]

Auto-accept configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}

---

##### `directory_user_id`<sup>Optional</sup> <a name="directory_user_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.directoryUserId"></a>

- *Type:* str

The identifier of the user account in the directory used for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}

---

##### `hierarchy_group_arn`<sup>Optional</sup> <a name="hierarchy_group_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.hierarchyGroupArn"></a>

- *Type:* str

The identifier of the hierarchy group for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}

---

##### `identity_info`<sup>Optional</sup> <a name="identity_info" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.identityInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

The information about the identity of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.password"></a>

- *Type:* str

The password for the user account.

A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#password ConnectUser#password}

---

##### `persistent_connection_configs`<sup>Optional</sup> <a name="persistent_connection_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.persistentConnectionConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]

Persistent Connection configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}

---

##### `phone_config`<sup>Optional</sup> <a name="phone_config" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

The phone settings for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}

---

##### `phone_number_configs`<sup>Optional</sup> <a name="phone_number_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneNumberConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]

Phone Number configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#tags ConnectUser#tags}

---

##### `user_proficiencies`<sup>Optional</sup> <a name="user_proficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.userProficiencies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]

One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}

---

##### `voice_enhancement_configs`<sup>Optional</sup> <a name="voice_enhancement_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.voiceEnhancementConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]

Voice Enhancement configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs">put_after_contact_work_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs">put_auto_accept_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo">put_identity_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs">put_persistent_connection_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig">put_phone_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs">put_phone_number_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies">put_user_proficiencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs">put_voice_enhancement_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs">reset_after_contact_work_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs">reset_auto_accept_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId">reset_directory_user_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn">reset_hierarchy_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo">reset_identity_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs">reset_persistent_connection_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig">reset_phone_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs">reset_phone_number_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies">reset_user_proficiencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs">reset_voice_enhancement_configs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUser.ConnectUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUser.ConnectUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_after_contact_work_configs` <a name="put_after_contact_work_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs"></a>

```python
def put_after_contact_work_configs(
  value: IResolvable | typing.List[ConnectUserAfterContactWorkConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]

---

##### `put_auto_accept_configs` <a name="put_auto_accept_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs"></a>

```python
def put_auto_accept_configs(
  value: IResolvable | typing.List[ConnectUserAutoAcceptConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]

---

##### `put_identity_info` <a name="put_identity_info" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo"></a>

```python
def put_identity_info(
  email: str = None,
  first_name: str = None,
  last_name: str = None,
  mobile: str = None,
  secondary_email: str = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.email"></a>

- *Type:* str

The email address. If you are using SAML for identity management and include this parameter, an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#email ConnectUser#email}

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.firstName"></a>

- *Type:* str

The first name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#first_name ConnectUser#first_name}

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.lastName"></a>

- *Type:* str

The last name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#last_name ConnectUser#last_name}

---

###### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.mobile"></a>

- *Type:* str

The mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#mobile ConnectUser#mobile}

---

###### `secondary_email`<sup>Optional</sup> <a name="secondary_email" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.secondaryEmail"></a>

- *Type:* str

The secondary email address.

If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#secondary_email ConnectUser#secondary_email}

---

##### `put_persistent_connection_configs` <a name="put_persistent_connection_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs"></a>

```python
def put_persistent_connection_configs(
  value: IResolvable | typing.List[ConnectUserPersistentConnectionConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]

---

##### `put_phone_config` <a name="put_phone_config" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig"></a>

```python
def put_phone_config(
  after_contact_work_time_limit: typing.Union[int, float] = None,
  auto_accept: bool | IResolvable = None,
  desk_phone_number: str = None,
  persistent_connection: bool | IResolvable = None,
  phone_type: str = None
) -> None
```

###### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.afterContactWorkTimeLimit"></a>

- *Type:* typing.Union[int, float]

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

###### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.autoAccept"></a>

- *Type:* bool | cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

###### `desk_phone_number`<sup>Optional</sup> <a name="desk_phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.deskPhoneNumber"></a>

- *Type:* str

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}

---

###### `persistent_connection`<sup>Optional</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.persistentConnection"></a>

- *Type:* bool | cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

###### `phone_type`<sup>Optional</sup> <a name="phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.phoneType"></a>

- *Type:* str

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

##### `put_phone_number_configs` <a name="put_phone_number_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs"></a>

```python
def put_phone_number_configs(
  value: IResolvable | typing.List[ConnectUserPhoneNumberConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectUserTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]

---

##### `put_user_proficiencies` <a name="put_user_proficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies"></a>

```python
def put_user_proficiencies(
  value: IResolvable | typing.List[ConnectUserUserProficiencies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]

---

##### `put_voice_enhancement_configs` <a name="put_voice_enhancement_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs"></a>

```python
def put_voice_enhancement_configs(
  value: IResolvable | typing.List[ConnectUserVoiceEnhancementConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]

---

##### `reset_after_contact_work_configs` <a name="reset_after_contact_work_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs"></a>

```python
def reset_after_contact_work_configs() -> None
```

##### `reset_auto_accept_configs` <a name="reset_auto_accept_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs"></a>

```python
def reset_auto_accept_configs() -> None
```

##### `reset_directory_user_id` <a name="reset_directory_user_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId"></a>

```python
def reset_directory_user_id() -> None
```

##### `reset_hierarchy_group_arn` <a name="reset_hierarchy_group_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn"></a>

```python
def reset_hierarchy_group_arn() -> None
```

##### `reset_identity_info` <a name="reset_identity_info" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo"></a>

```python
def reset_identity_info() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_persistent_connection_configs` <a name="reset_persistent_connection_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs"></a>

```python
def reset_persistent_connection_configs() -> None
```

##### `reset_phone_config` <a name="reset_phone_config" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig"></a>

```python
def reset_phone_config() -> None
```

##### `reset_phone_number_configs` <a name="reset_phone_number_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs"></a>

```python
def reset_phone_number_configs() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_proficiencies` <a name="reset_user_proficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies"></a>

```python
def reset_user_proficiencies() -> None
```

##### `reset_voice_enhancement_configs` <a name="reset_voice_enhancement_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs"></a>

```python
def reset_voice_enhancement_configs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs">after_contact_work_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs">auto_accept_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo">identity_info</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs">persistent_connection_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig">phone_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs">phone_number_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn">user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies">user_proficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs">voice_enhancement_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput">after_contact_work_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput">auto_accept_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput">directory_user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput">hierarchy_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput">identity_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput">persistent_connection_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput">phone_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput">phone_number_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput">routing_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput">security_profile_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput">user_proficiencies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput">voice_enhancement_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId">directory_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn">hierarchy_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn">routing_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns">security_profile_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `after_contact_work_configs`<sup>Required</sup> <a name="after_contact_work_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs"></a>

```python
after_contact_work_configs: ConnectUserAfterContactWorkConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a>

---

##### `auto_accept_configs`<sup>Required</sup> <a name="auto_accept_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs"></a>

```python
auto_accept_configs: ConnectUserAutoAcceptConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_info`<sup>Required</sup> <a name="identity_info" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo"></a>

```python
identity_info: ConnectUserIdentityInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `persistent_connection_configs`<sup>Required</sup> <a name="persistent_connection_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs"></a>

```python
persistent_connection_configs: ConnectUserPersistentConnectionConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a>

---

##### `phone_config`<sup>Required</sup> <a name="phone_config" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig"></a>

```python
phone_config: ConnectUserPhoneConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `phone_number_configs`<sup>Required</sup> <a name="phone_number_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs"></a>

```python
phone_number_configs: ConnectUserPhoneNumberConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tags"></a>

```python
tags: ConnectUserTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a>

---

##### `user_arn`<sup>Required</sup> <a name="user_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn"></a>

```python
user_arn: str
```

- *Type:* str

---

##### `user_proficiencies`<sup>Required</sup> <a name="user_proficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies"></a>

```python
user_proficiencies: ConnectUserUserProficienciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a>

---

##### `voice_enhancement_configs`<sup>Required</sup> <a name="voice_enhancement_configs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs"></a>

```python
voice_enhancement_configs: ConnectUserVoiceEnhancementConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a>

---

##### `after_contact_work_configs_input`<sup>Optional</sup> <a name="after_contact_work_configs_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput"></a>

```python
after_contact_work_configs_input: IResolvable | typing.List[ConnectUserAfterContactWorkConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]

---

##### `auto_accept_configs_input`<sup>Optional</sup> <a name="auto_accept_configs_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput"></a>

```python
auto_accept_configs_input: IResolvable | typing.List[ConnectUserAutoAcceptConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]

---

##### `directory_user_id_input`<sup>Optional</sup> <a name="directory_user_id_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```python
directory_user_id_input: str
```

- *Type:* str

---

##### `hierarchy_group_arn_input`<sup>Optional</sup> <a name="hierarchy_group_arn_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput"></a>

```python
hierarchy_group_arn_input: str
```

- *Type:* str

---

##### `identity_info_input`<sup>Optional</sup> <a name="identity_info_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput"></a>

```python
identity_info_input: IResolvable | ConnectUserIdentityInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `persistent_connection_configs_input`<sup>Optional</sup> <a name="persistent_connection_configs_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput"></a>

```python
persistent_connection_configs_input: IResolvable | typing.List[ConnectUserPersistentConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]

---

##### `phone_config_input`<sup>Optional</sup> <a name="phone_config_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput"></a>

```python
phone_config_input: IResolvable | ConnectUserPhoneConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `phone_number_configs_input`<sup>Optional</sup> <a name="phone_number_configs_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput"></a>

```python
phone_number_configs_input: IResolvable | typing.List[ConnectUserPhoneNumberConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]

---

##### `routing_profile_arn_input`<sup>Optional</sup> <a name="routing_profile_arn_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput"></a>

```python
routing_profile_arn_input: str
```

- *Type:* str

---

##### `security_profile_arns_input`<sup>Optional</sup> <a name="security_profile_arns_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput"></a>

```python
security_profile_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectUserTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `user_proficiencies_input`<sup>Optional</sup> <a name="user_proficiencies_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput"></a>

```python
user_proficiencies_input: IResolvable | typing.List[ConnectUserUserProficiencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]

---

##### `voice_enhancement_configs_input`<sup>Optional</sup> <a name="voice_enhancement_configs_input" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput"></a>

```python
voice_enhancement_configs_input: IResolvable | typing.List[ConnectUserVoiceEnhancementConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]

---

##### `directory_user_id`<sup>Required</sup> <a name="directory_user_id" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId"></a>

```python
directory_user_id: str
```

- *Type:* str

---

##### `hierarchy_group_arn`<sup>Required</sup> <a name="hierarchy_group_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn"></a>

```python
hierarchy_group_arn: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `routing_profile_arn`<sup>Required</sup> <a name="routing_profile_arn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn"></a>

```python
routing_profile_arn: str
```

- *Type:* str

---

##### `security_profile_arns`<sup>Required</sup> <a name="security_profile_arns" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns"></a>

```python
security_profile_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserAfterContactWorkConfigs <a name="ConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigs(
  after_contact_work_config: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig = None,
  agent_first_callback_after_contact_work_config: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig = None,
  channel: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig">after_contact_work_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig">agent_first_callback_after_contact_work_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `after_contact_work_config`<sup>Optional</sup> <a name="after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig"></a>

```python
after_contact_work_config: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_config ConnectUser#after_contact_work_config}

---

##### `agent_first_callback_after_contact_work_config`<sup>Optional</sup> <a name="agent_first_callback_after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig"></a>

```python
agent_first_callback_after_contact_work_config: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#agent_first_callback_after_contact_work_config ConnectUser#agent_first_callback_after_contact_work_config}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig(
  after_contact_work_mode: str = None,
  after_contact_work_time_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode">after_contact_work_mode</a></code> | <code>str</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `after_contact_work_mode`<sup>Optional</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode"></a>

```python
after_contact_work_mode: str
```

- *Type:* str

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig(
  after_contact_work_mode: str = None,
  after_contact_work_time_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode">after_contact_work_mode</a></code> | <code>str</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `after_contact_work_mode`<sup>Optional</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode"></a>

```python
after_contact_work_mode: str
```

- *Type:* str

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAutoAcceptConfigs <a name="ConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAutoAcceptConfigs(
  agent_first_callback_auto_accept: bool | IResolvable = None,
  auto_accept: bool | IResolvable = None,
  channel: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept">agent_first_callback_auto_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | The agent first callback auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept">auto_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `agent_first_callback_auto_accept`<sup>Optional</sup> <a name="agent_first_callback_auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept"></a>

```python
agent_first_callback_auto_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The agent first callback auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#agent_first_callback_auto_accept ConnectUser#agent_first_callback_auto_accept}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept"></a>

```python
auto_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  routing_profile_arn: str,
  security_profile_arns: typing.List[str],
  username: str,
  after_contact_work_configs: IResolvable | typing.List[ConnectUserAfterContactWorkConfigs] = None,
  auto_accept_configs: IResolvable | typing.List[ConnectUserAutoAcceptConfigs] = None,
  directory_user_id: str = None,
  hierarchy_group_arn: str = None,
  identity_info: ConnectUserIdentityInfo = None,
  password: str = None,
  persistent_connection_configs: IResolvable | typing.List[ConnectUserPersistentConnectionConfigs] = None,
  phone_config: ConnectUserPhoneConfig = None,
  phone_number_configs: IResolvable | typing.List[ConnectUserPhoneNumberConfigs] = None,
  tags: IResolvable | typing.List[ConnectUserTags] = None,
  user_proficiencies: IResolvable | typing.List[ConnectUserUserProficiencies] = None,
  voice_enhancement_configs: IResolvable | typing.List[ConnectUserVoiceEnhancementConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn">routing_profile_arn</a></code> | <code>str</code> | The identifier of the routing profile for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns">security_profile_arns</a></code> | <code>typing.List[str]</code> | One or more security profile arns for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username">username</a></code> | <code>str</code> | The user name for the account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs">after_contact_work_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]</code> | After Contact Work configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs">auto_accept_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]</code> | Auto-accept configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId">directory_user_id</a></code> | <code>str</code> | The identifier of the user account in the directory used for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn">hierarchy_group_arn</a></code> | <code>str</code> | The identifier of the hierarchy group for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo">identity_info</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | The information about the identity of the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password">password</a></code> | <code>str</code> | The password for the user account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs">persistent_connection_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]</code> | Persistent Connection configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig">phone_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | The phone settings for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs">phone_number_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]</code> | Phone Number configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies">user_proficiencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]</code> | One or more predefined attributes assigned to a user, with a level that indicates how skilled they are. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs">voice_enhancement_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]</code> | Voice Enhancement configurations of a user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}

---

##### `routing_profile_arn`<sup>Required</sup> <a name="routing_profile_arn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn"></a>

```python
routing_profile_arn: str
```

- *Type:* str

The identifier of the routing profile for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}

---

##### `security_profile_arns`<sup>Required</sup> <a name="security_profile_arns" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns"></a>

```python
security_profile_arns: typing.List[str]
```

- *Type:* typing.List[str]

One or more security profile arns for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The user name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#username ConnectUser#username}

---

##### `after_contact_work_configs`<sup>Optional</sup> <a name="after_contact_work_configs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs"></a>

```python
after_contact_work_configs: IResolvable | typing.List[ConnectUserAfterContactWorkConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]

After Contact Work configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}

---

##### `auto_accept_configs`<sup>Optional</sup> <a name="auto_accept_configs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs"></a>

```python
auto_accept_configs: IResolvable | typing.List[ConnectUserAutoAcceptConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]

Auto-accept configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}

---

##### `directory_user_id`<sup>Optional</sup> <a name="directory_user_id" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```python
directory_user_id: str
```

- *Type:* str

The identifier of the user account in the directory used for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}

---

##### `hierarchy_group_arn`<sup>Optional</sup> <a name="hierarchy_group_arn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn"></a>

```python
hierarchy_group_arn: str
```

- *Type:* str

The identifier of the hierarchy group for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}

---

##### `identity_info`<sup>Optional</sup> <a name="identity_info" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo"></a>

```python
identity_info: ConnectUserIdentityInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

The information about the identity of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the user account.

A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#password ConnectUser#password}

---

##### `persistent_connection_configs`<sup>Optional</sup> <a name="persistent_connection_configs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs"></a>

```python
persistent_connection_configs: IResolvable | typing.List[ConnectUserPersistentConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]

Persistent Connection configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}

---

##### `phone_config`<sup>Optional</sup> <a name="phone_config" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```python
phone_config: ConnectUserPhoneConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

The phone settings for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}

---

##### `phone_number_configs`<sup>Optional</sup> <a name="phone_number_configs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs"></a>

```python
phone_number_configs: IResolvable | typing.List[ConnectUserPhoneNumberConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]

Phone Number configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectUserTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#tags ConnectUser#tags}

---

##### `user_proficiencies`<sup>Optional</sup> <a name="user_proficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies"></a>

```python
user_proficiencies: IResolvable | typing.List[ConnectUserUserProficiencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]

One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}

---

##### `voice_enhancement_configs`<sup>Optional</sup> <a name="voice_enhancement_configs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs"></a>

```python
voice_enhancement_configs: IResolvable | typing.List[ConnectUserVoiceEnhancementConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]

Voice Enhancement configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserIdentityInfo(
  email: str = None,
  first_name: str = None,
  last_name: str = None,
  mobile: str = None,
  secondary_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email">email</a></code> | <code>str</code> | The email address. If you are using SAML for identity management and include this parameter, an error is returned. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName">first_name</a></code> | <code>str</code> | The first name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName">last_name</a></code> | <code>str</code> | The last name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile">mobile</a></code> | <code>str</code> | The mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail">secondary_email</a></code> | <code>str</code> | The secondary email address. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email"></a>

```python
email: str
```

- *Type:* str

The email address. If you are using SAML for identity management and include this parameter, an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#email ConnectUser#email}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

The first name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#first_name ConnectUser#first_name}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

The last name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#last_name ConnectUser#last_name}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile"></a>

```python
mobile: str
```

- *Type:* str

The mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#mobile ConnectUser#mobile}

---

##### `secondary_email`<sup>Optional</sup> <a name="secondary_email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail"></a>

```python
secondary_email: str
```

- *Type:* str

The secondary email address.

If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#secondary_email ConnectUser#secondary_email}

---

### ConnectUserPersistentConnectionConfigs <a name="ConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPersistentConnectionConfigs(
  channel: str = None,
  persistent_connection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection">persistent_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | The Persistent Connection setting. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `persistent_connection`<sup>Optional</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection"></a>

```python
persistent_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPhoneConfig(
  after_contact_work_time_limit: typing.Union[int, float] = None,
  auto_accept: bool | IResolvable = None,
  desk_phone_number: str = None,
  persistent_connection: bool | IResolvable = None,
  phone_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | The After Call Work (ACW) timeout setting, in seconds. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept">auto_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">desk_phone_number</a></code> | <code>str</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection">persistent_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | The Persistent Connection setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType">phone_type</a></code> | <code>str</code> | The phone type. |

---

##### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```python
auto_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `desk_phone_number`<sup>Optional</sup> <a name="desk_phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```python
desk_phone_number: str
```

- *Type:* str

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}

---

##### `persistent_connection`<sup>Optional</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection"></a>

```python
persistent_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

##### `phone_type`<sup>Optional</sup> <a name="phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserPhoneNumberConfigs <a name="ConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPhoneNumberConfigs(
  channel: str = None,
  phone_number: str = None,
  phone_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber">phone_number</a></code> | <code>str</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType">phone_type</a></code> | <code>str</code> | The phone type. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_number ConnectUser#phone_number}

---

##### `phone_type`<sup>Optional</sup> <a name="phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserTags <a name="ConnectUserTags" id="@cdktn/provider-awscc.connectUser.ConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#key ConnectUser#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#value ConnectUser#value}

---

### ConnectUserUserProficiencies <a name="ConnectUserUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserUserProficiencies(
  attribute_name: str = None,
  attribute_value: str = None,
  level: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName">attribute_name</a></code> | <code>str</code> | The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue">attribute_value</a></code> | <code>str</code> | The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level">level</a></code> | <code>typing.Union[int, float]</code> | The level of the proficiency. The valid values are 0 to 10. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#attribute_name ConnectUser#attribute_name}

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#attribute_value ConnectUser#attribute_value}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The level of the proficiency. The valid values are 0 to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#level ConnectUser#level}

---

### ConnectUserVoiceEnhancementConfigs <a name="ConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserVoiceEnhancementConfigs(
  channel: str = None,
  voice_enhancement_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode">voice_enhancement_mode</a></code> | <code>str</code> | The Voice Enhancement Mode setting. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `voice_enhancement_mode`<sup>Optional</sup> <a name="voice_enhancement_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode"></a>

```python
voice_enhancement_mode: str
```

- *Type:* str

The Voice Enhancement Mode setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#voice_enhancement_mode ConnectUser#voice_enhancement_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode">reset_after_contact_work_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit">reset_after_contact_work_time_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_after_contact_work_mode` <a name="reset_after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```python
def reset_after_contact_work_mode() -> None
```

##### `reset_after_contact_work_time_limit` <a name="reset_after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```python
def reset_after_contact_work_time_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">after_contact_work_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">after_contact_work_time_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">after_contact_work_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_mode_input`<sup>Optional</sup> <a name="after_contact_work_mode_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```python
after_contact_work_mode_input: str
```

- *Type:* str

---

##### `after_contact_work_time_limit_input`<sup>Optional</sup> <a name="after_contact_work_time_limit_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```python
after_contact_work_time_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `after_contact_work_mode`<sup>Required</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```python
after_contact_work_mode: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserAfterContactWorkConfigsAfterContactWorkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode">reset_after_contact_work_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit">reset_after_contact_work_time_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_after_contact_work_mode` <a name="reset_after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```python
def reset_after_contact_work_mode() -> None
```

##### `reset_after_contact_work_time_limit` <a name="reset_after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```python
def reset_after_contact_work_time_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">after_contact_work_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">after_contact_work_time_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">after_contact_work_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_mode_input`<sup>Optional</sup> <a name="after_contact_work_mode_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```python
after_contact_work_mode_input: str
```

- *Type:* str

---

##### `after_contact_work_time_limit_input`<sup>Optional</sup> <a name="after_contact_work_time_limit_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```python
after_contact_work_time_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `after_contact_work_mode`<sup>Required</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```python
after_contact_work_mode: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsList <a name="ConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserAfterContactWorkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserAfterContactWorkConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>]

---


### ConnectUserAfterContactWorkConfigsOutputReference <a name="ConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAfterContactWorkConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig">put_after_contact_work_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig">put_agent_first_callback_after_contact_work_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig">reset_after_contact_work_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig">reset_agent_first_callback_after_contact_work_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel">reset_channel</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_after_contact_work_config` <a name="put_after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig"></a>

```python
def put_after_contact_work_config(
  after_contact_work_mode: str = None,
  after_contact_work_time_limit: typing.Union[int, float] = None
) -> None
```

###### `after_contact_work_mode`<sup>Optional</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig.parameter.afterContactWorkMode"></a>

- *Type:* str

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

###### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig.parameter.afterContactWorkTimeLimit"></a>

- *Type:* typing.Union[int, float]

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

##### `put_agent_first_callback_after_contact_work_config` <a name="put_agent_first_callback_after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig"></a>

```python
def put_agent_first_callback_after_contact_work_config(
  after_contact_work_mode: str = None,
  after_contact_work_time_limit: typing.Union[int, float] = None
) -> None
```

###### `after_contact_work_mode`<sup>Optional</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig.parameter.afterContactWorkMode"></a>

- *Type:* str

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

###### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig.parameter.afterContactWorkTimeLimit"></a>

- *Type:* typing.Union[int, float]

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

##### `reset_after_contact_work_config` <a name="reset_after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig"></a>

```python
def reset_after_contact_work_config() -> None
```

##### `reset_agent_first_callback_after_contact_work_config` <a name="reset_agent_first_callback_after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig"></a>

```python
def reset_agent_first_callback_after_contact_work_config() -> None
```

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">after_contact_work_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">agent_first_callback_after_contact_work_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput">after_contact_work_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput">agent_first_callback_after_contact_work_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_config`<sup>Required</sup> <a name="after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```python
after_contact_work_config: ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `agent_first_callback_after_contact_work_config`<sup>Required</sup> <a name="agent_first_callback_after_contact_work_config" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```python
agent_first_callback_after_contact_work_config: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `after_contact_work_config_input`<sup>Optional</sup> <a name="after_contact_work_config_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput"></a>

```python
after_contact_work_config_input: IResolvable | ConnectUserAfterContactWorkConfigsAfterContactWorkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `agent_first_callback_after_contact_work_config_input`<sup>Optional</sup> <a name="agent_first_callback_after_contact_work_config_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput"></a>

```python
agent_first_callback_after_contact_work_config_input: IResolvable | ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserAfterContactWorkConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>

---


### ConnectUserAutoAcceptConfigsList <a name="ConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAutoAcceptConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserAutoAcceptConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserAutoAcceptConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>]

---


### ConnectUserAutoAcceptConfigsOutputReference <a name="ConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserAutoAcceptConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept">reset_agent_first_callback_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel">reset_channel</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent_first_callback_auto_accept` <a name="reset_agent_first_callback_auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept"></a>

```python
def reset_agent_first_callback_auto_accept() -> None
```

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput">agent_first_callback_auto_accept_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput">auto_accept_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">agent_first_callback_auto_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">auto_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_first_callback_auto_accept_input`<sup>Optional</sup> <a name="agent_first_callback_auto_accept_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput"></a>

```python
agent_first_callback_auto_accept_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput"></a>

```python
auto_accept_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `agent_first_callback_auto_accept`<sup>Required</sup> <a name="agent_first_callback_auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```python
agent_first_callback_auto_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```python
auto_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserAutoAcceptConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>

---


### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserIdentityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile">reset_mobile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail">reset_secondary_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_mobile` <a name="reset_mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile"></a>

```python
def reset_mobile() -> None
```

##### `reset_secondary_email` <a name="reset_secondary_email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail"></a>

```python
def reset_secondary_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput">mobile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput">secondary_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile">mobile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail">secondary_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `mobile_input`<sup>Optional</sup> <a name="mobile_input" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput"></a>

```python
mobile_input: str
```

- *Type:* str

---

##### `secondary_email_input`<sup>Optional</sup> <a name="secondary_email_input" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput"></a>

```python
secondary_email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile"></a>

```python
mobile: str
```

- *Type:* str

---

##### `secondary_email`<sup>Required</sup> <a name="secondary_email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```python
secondary_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserIdentityInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPersistentConnectionConfigsList <a name="ConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPersistentConnectionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserPersistentConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserPersistentConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>]

---


### ConnectUserPersistentConnectionConfigsOutputReference <a name="ConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPersistentConnectionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection">reset_persistent_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_persistent_connection` <a name="reset_persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection"></a>

```python
def reset_persistent_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput">persistent_connection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">persistent_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `persistent_connection_input`<sup>Optional</sup> <a name="persistent_connection_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput"></a>

```python
persistent_connection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `persistent_connection`<sup>Required</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```python
persistent_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserPersistentConnectionConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPhoneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit">reset_after_contact_work_time_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber">reset_desk_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection">reset_persistent_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType">reset_phone_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_after_contact_work_time_limit` <a name="reset_after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```python
def reset_after_contact_work_time_limit() -> None
```

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_desk_phone_number` <a name="reset_desk_phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```python
def reset_desk_phone_number() -> None
```

##### `reset_persistent_connection` <a name="reset_persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection"></a>

```python
def reset_persistent_connection() -> None
```

##### `reset_phone_type` <a name="reset_phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType"></a>

```python
def reset_phone_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">after_contact_work_time_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">auto_accept_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">desk_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput">persistent_connection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">phone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">auto_accept</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">desk_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection">persistent_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">phone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_time_limit_input`<sup>Optional</sup> <a name="after_contact_work_time_limit_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```python
after_contact_work_time_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```python
auto_accept_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `desk_phone_number_input`<sup>Optional</sup> <a name="desk_phone_number_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```python
desk_phone_number_input: str
```

- *Type:* str

---

##### `persistent_connection_input`<sup>Optional</sup> <a name="persistent_connection_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput"></a>

```python
persistent_connection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `phone_type_input`<sup>Optional</sup> <a name="phone_type_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```python
phone_type_input: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```python
auto_accept: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `desk_phone_number`<sup>Required</sup> <a name="desk_phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```python
desk_phone_number: str
```

- *Type:* str

---

##### `persistent_connection`<sup>Required</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```python
persistent_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserPhoneConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---


### ConnectUserPhoneNumberConfigsList <a name="ConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPhoneNumberConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserPhoneNumberConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserPhoneNumberConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>]

---


### ConnectUserPhoneNumberConfigsOutputReference <a name="ConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserPhoneNumberConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType">reset_phone_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_phone_type` <a name="reset_phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType"></a>

```python
def reset_phone_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput">phone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType">phone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `phone_type_input`<sup>Optional</sup> <a name="phone_type_input" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput"></a>

```python
phone_type_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserPhoneNumberConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>

---


### ConnectUserTagsList <a name="ConnectUserTagsList" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>]

---


### ConnectUserTagsOutputReference <a name="ConnectUserTagsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>

---


### ConnectUserUserProficienciesList <a name="ConnectUserUserProficienciesList" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserUserProficienciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserUserProficienciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserUserProficiencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>]

---


### ConnectUserUserProficienciesOutputReference <a name="ConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserUserProficienciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel">reset_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput">level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level">level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput"></a>

```python
level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserUserProficiencies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>

---


### ConnectUserVoiceEnhancementConfigsList <a name="ConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserVoiceEnhancementConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectUserVoiceEnhancementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectUserVoiceEnhancementConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>]

---


### ConnectUserVoiceEnhancementConfigsOutputReference <a name="ConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user

connectUser.ConnectUserVoiceEnhancementConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode">reset_voice_enhancement_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_voice_enhancement_mode` <a name="reset_voice_enhancement_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode"></a>

```python
def reset_voice_enhancement_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput">voice_enhancement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">voice_enhancement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `voice_enhancement_mode_input`<sup>Optional</sup> <a name="voice_enhancement_mode_input" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput"></a>

```python
voice_enhancement_mode_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `voice_enhancement_mode`<sup>Required</sup> <a name="voice_enhancement_mode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```python
voice_enhancement_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserVoiceEnhancementConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>

---



