# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktn/provider-awscc.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktn/provider-awscc.connectUser.ConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUser;

ConnectUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .routingProfileArn(java.lang.String)
    .securityProfileArns(java.util.List<java.lang.String>)
    .username(java.lang.String)
//  .afterContactWorkConfigs(IResolvable|java.util.List<ConnectUserAfterContactWorkConfigs>)
//  .autoAcceptConfigs(IResolvable|java.util.List<ConnectUserAutoAcceptConfigs>)
//  .directoryUserId(java.lang.String)
//  .hierarchyGroupArn(java.lang.String)
//  .identityInfo(ConnectUserIdentityInfo)
//  .password(java.lang.String)
//  .persistentConnectionConfigs(IResolvable|java.util.List<ConnectUserPersistentConnectionConfigs>)
//  .phoneConfig(ConnectUserPhoneConfig)
//  .phoneNumberConfigs(IResolvable|java.util.List<ConnectUserPhoneNumberConfigs>)
//  .tags(IResolvable|java.util.List<ConnectUserTags>)
//  .userProficiencies(IResolvable|java.util.List<ConnectUserUserProficiencies>)
//  .voiceEnhancementConfigs(IResolvable|java.util.List<ConnectUserVoiceEnhancementConfigs>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.routingProfileArn">routingProfileArn</a></code> | <code>java.lang.String</code> | The identifier of the routing profile for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.securityProfileArns">securityProfileArns</a></code> | <code>java.util.List<java.lang.String></code> | One or more security profile arns for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The user name for the account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.afterContactWorkConfigs">afterContactWorkConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>></code> | After Contact Work configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.autoAcceptConfigs">autoAcceptConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>></code> | Auto-accept configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.directoryUserId">directoryUserId</a></code> | <code>java.lang.String</code> | The identifier of the user account in the directory used for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy group for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.identityInfo">identityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | The information about the identity of the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the user account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.persistentConnectionConfigs">persistentConnectionConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>></code> | Persistent Connection configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | The phone settings for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneNumberConfigs">phoneNumberConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>></code> | Phone Number configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>></code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.userProficiencies">userProficiencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>></code> | One or more predefined attributes assigned to a user, with a level that indicates how skilled they are. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.voiceEnhancementConfigs">voiceEnhancementConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>></code> | Voice Enhancement configurations of a user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.routingProfileArn"></a>

- *Type:* java.lang.String

The identifier of the routing profile for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}

---

##### `securityProfileArns`<sup>Required</sup> <a name="securityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.securityProfileArns"></a>

- *Type:* java.util.List<java.lang.String>

One or more security profile arns for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The user name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#username ConnectUser#username}

---

##### `afterContactWorkConfigs`<sup>Optional</sup> <a name="afterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.afterContactWorkConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>>

After Contact Work configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}

---

##### `autoAcceptConfigs`<sup>Optional</sup> <a name="autoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.autoAcceptConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>>

Auto-accept configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}

---

##### `directoryUserId`<sup>Optional</sup> <a name="directoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.directoryUserId"></a>

- *Type:* java.lang.String

The identifier of the user account in the directory used for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}

---

##### `hierarchyGroupArn`<sup>Optional</sup> <a name="hierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.hierarchyGroupArn"></a>

- *Type:* java.lang.String

The identifier of the hierarchy group for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}

---

##### `identityInfo`<sup>Optional</sup> <a name="identityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.identityInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

The information about the identity of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the user account.

A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#password ConnectUser#password}

---

##### `persistentConnectionConfigs`<sup>Optional</sup> <a name="persistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.persistentConnectionConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>>

Persistent Connection configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

The phone settings for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}

---

##### `phoneNumberConfigs`<sup>Optional</sup> <a name="phoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.phoneNumberConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>>

Phone Number configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#tags ConnectUser#tags}

---

##### `userProficiencies`<sup>Optional</sup> <a name="userProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.userProficiencies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>>

One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}

---

##### `voiceEnhancementConfigs`<sup>Optional</sup> <a name="voiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.Initializer.parameter.voiceEnhancementConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>>

Voice Enhancement configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUser.ConnectUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUser.ConnectUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectUser.ConnectUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectUser.ConnectUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterContactWorkConfigs` <a name="putAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs"></a>

```java
public void putAfterContactWorkConfigs(IResolvable|java.util.List<ConnectUserAfterContactWorkConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAfterContactWorkConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>>

---

##### `putAutoAcceptConfigs` <a name="putAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs"></a>

```java
public void putAutoAcceptConfigs(IResolvable|java.util.List<ConnectUserAutoAcceptConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putAutoAcceptConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>>

---

##### `putIdentityInfo` <a name="putIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo"></a>

```java
public void putIdentityInfo(ConnectUserIdentityInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putIdentityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `putPersistentConnectionConfigs` <a name="putPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs"></a>

```java
public void putPersistentConnectionConfigs(IResolvable|java.util.List<ConnectUserPersistentConnectionConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPersistentConnectionConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>>

---

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig"></a>

```java
public void putPhoneConfig(ConnectUserPhoneConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `putPhoneNumberConfigs` <a name="putPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs"></a>

```java
public void putPhoneNumberConfigs(IResolvable|java.util.List<ConnectUserPhoneNumberConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putPhoneNumberConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectUserTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>>

---

##### `putUserProficiencies` <a name="putUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies"></a>

```java
public void putUserProficiencies(IResolvable|java.util.List<ConnectUserUserProficiencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putUserProficiencies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>>

---

##### `putVoiceEnhancementConfigs` <a name="putVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs"></a>

```java
public void putVoiceEnhancementConfigs(IResolvable|java.util.List<ConnectUserVoiceEnhancementConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUser.putVoiceEnhancementConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>>

---

##### `resetAfterContactWorkConfigs` <a name="resetAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAfterContactWorkConfigs"></a>

```java
public void resetAfterContactWorkConfigs()
```

##### `resetAutoAcceptConfigs` <a name="resetAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetAutoAcceptConfigs"></a>

```java
public void resetAutoAcceptConfigs()
```

##### `resetDirectoryUserId` <a name="resetDirectoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetDirectoryUserId"></a>

```java
public void resetDirectoryUserId()
```

##### `resetHierarchyGroupArn` <a name="resetHierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetHierarchyGroupArn"></a>

```java
public void resetHierarchyGroupArn()
```

##### `resetIdentityInfo` <a name="resetIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetIdentityInfo"></a>

```java
public void resetIdentityInfo()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPersistentConnectionConfigs` <a name="resetPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPersistentConnectionConfigs"></a>

```java
public void resetPersistentConnectionConfigs()
```

##### `resetPhoneConfig` <a name="resetPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneConfig"></a>

```java
public void resetPhoneConfig()
```

##### `resetPhoneNumberConfigs` <a name="resetPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetPhoneNumberConfigs"></a>

```java
public void resetPhoneNumberConfigs()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserProficiencies` <a name="resetUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetUserProficiencies"></a>

```java
public void resetUserProficiencies()
```

##### `resetVoiceEnhancementConfigs` <a name="resetVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.resetVoiceEnhancementConfigs"></a>

```java
public void resetVoiceEnhancementConfigs()
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

```java
import io.cdktn.providers.awscc.connect_user.ConnectUser;

ConnectUser.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUser;

ConnectUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUser;

ConnectUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUser;

ConnectUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs">afterContactWorkConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs">autoAcceptConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs">persistentConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs">phoneNumberConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn">userArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies">userProficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs">voiceEnhancementConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput">afterContactWorkConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput">autoAcceptConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput">directoryUserIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput">hierarchyGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput">identityInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput">persistentConnectionConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput">phoneConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput">phoneNumberConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput">routingProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput">securityProfileArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput">userProficienciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput">voiceEnhancementConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId">directoryUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn">routingProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns">securityProfileArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `afterContactWorkConfigs`<sup>Required</sup> <a name="afterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigs"></a>

```java
public ConnectUserAfterContactWorkConfigsList getAfterContactWorkConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList">ConnectUserAfterContactWorkConfigsList</a>

---

##### `autoAcceptConfigs`<sup>Required</sup> <a name="autoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigs"></a>

```java
public ConnectUserAutoAcceptConfigsList getAutoAcceptConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList">ConnectUserAutoAcceptConfigsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityInfo`<sup>Required</sup> <a name="identityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfo"></a>

```java
public ConnectUserIdentityInfoOutputReference getIdentityInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `persistentConnectionConfigs`<sup>Required</sup> <a name="persistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigs"></a>

```java
public ConnectUserPersistentConnectionConfigsList getPersistentConnectionConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList">ConnectUserPersistentConnectionConfigsList</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfig"></a>

```java
public ConnectUserPhoneConfigOutputReference getPhoneConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `phoneNumberConfigs`<sup>Required</sup> <a name="phoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigs"></a>

```java
public ConnectUserPhoneNumberConfigsList getPhoneNumberConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList">ConnectUserPhoneNumberConfigsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tags"></a>

```java
public ConnectUserTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList">ConnectUserTagsList</a>

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userArn"></a>

```java
public java.lang.String getUserArn();
```

- *Type:* java.lang.String

---

##### `userProficiencies`<sup>Required</sup> <a name="userProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficiencies"></a>

```java
public ConnectUserUserProficienciesList getUserProficiencies();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList">ConnectUserUserProficienciesList</a>

---

##### `voiceEnhancementConfigs`<sup>Required</sup> <a name="voiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigs"></a>

```java
public ConnectUserVoiceEnhancementConfigsList getVoiceEnhancementConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList">ConnectUserVoiceEnhancementConfigsList</a>

---

##### `afterContactWorkConfigsInput`<sup>Optional</sup> <a name="afterContactWorkConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.afterContactWorkConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserAfterContactWorkConfigs> getAfterContactWorkConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>>

---

##### `autoAcceptConfigsInput`<sup>Optional</sup> <a name="autoAcceptConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.autoAcceptConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserAutoAcceptConfigs> getAutoAcceptConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>>

---

##### `directoryUserIdInput`<sup>Optional</sup> <a name="directoryUserIdInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```java
public java.lang.String getDirectoryUserIdInput();
```

- *Type:* java.lang.String

---

##### `hierarchyGroupArnInput`<sup>Optional</sup> <a name="hierarchyGroupArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArnInput"></a>

```java
public java.lang.String getHierarchyGroupArnInput();
```

- *Type:* java.lang.String

---

##### `identityInfoInput`<sup>Optional</sup> <a name="identityInfoInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.identityInfoInput"></a>

```java
public IResolvable|ConnectUserIdentityInfo getIdentityInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `persistentConnectionConfigsInput`<sup>Optional</sup> <a name="persistentConnectionConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.persistentConnectionConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserPersistentConnectionConfigs> getPersistentConnectionConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>>

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneConfigInput"></a>

```java
public IResolvable|ConnectUserPhoneConfig getPhoneConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `phoneNumberConfigsInput`<sup>Optional</sup> <a name="phoneNumberConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.phoneNumberConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserPhoneNumberConfigs> getPhoneNumberConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>>

---

##### `routingProfileArnInput`<sup>Optional</sup> <a name="routingProfileArnInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArnInput"></a>

```java
public java.lang.String getRoutingProfileArnInput();
```

- *Type:* java.lang.String

---

##### `securityProfileArnsInput`<sup>Optional</sup> <a name="securityProfileArnsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArnsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityProfileArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `userProficienciesInput`<sup>Optional</sup> <a name="userProficienciesInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.userProficienciesInput"></a>

```java
public IResolvable|java.util.List<ConnectUserUserProficiencies> getUserProficienciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>>

---

##### `voiceEnhancementConfigsInput`<sup>Optional</sup> <a name="voiceEnhancementConfigsInput" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.voiceEnhancementConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserVoiceEnhancementConfigs> getVoiceEnhancementConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>>

---

##### `directoryUserId`<sup>Required</sup> <a name="directoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.directoryUserId"></a>

```java
public java.lang.String getDirectoryUserId();
```

- *Type:* java.lang.String

---

##### `hierarchyGroupArn`<sup>Required</sup> <a name="hierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.hierarchyGroupArn"></a>

```java
public java.lang.String getHierarchyGroupArn();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.routingProfileArn"></a>

```java
public java.lang.String getRoutingProfileArn();
```

- *Type:* java.lang.String

---

##### `securityProfileArns`<sup>Required</sup> <a name="securityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.securityProfileArns"></a>

```java
public java.util.List<java.lang.String> getSecurityProfileArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUser.ConnectUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserAfterContactWorkConfigs <a name="ConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigs;

ConnectUserAfterContactWorkConfigs.builder()
//  .afterContactWorkConfig(ConnectUserAfterContactWorkConfigsAfterContactWorkConfig)
//  .agentFirstCallbackAfterContactWorkConfig(ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig)
//  .channel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig">afterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig">agentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | After Contact Work configuration. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `afterContactWorkConfig`<sup>Optional</sup> <a name="afterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.afterContactWorkConfig"></a>

```java
public ConnectUserAfterContactWorkConfigsAfterContactWorkConfig getAfterContactWorkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_config ConnectUser#after_contact_work_config}

---

##### `agentFirstCallbackAfterContactWorkConfig`<sup>Optional</sup> <a name="agentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.agentFirstCallbackAfterContactWorkConfig"></a>

```java
public ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig getAgentFirstCallbackAfterContactWorkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

After Contact Work configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#agent_first_callback_after_contact_work_config ConnectUser#agent_first_callback_after_contact_work_config}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig;

ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.builder()
//  .afterContactWorkMode(java.lang.String)
//  .afterContactWorkTimeLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>java.lang.String</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>java.lang.Number</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `afterContactWorkMode`<sup>Optional</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkMode"></a>

```java
public java.lang.String getAfterContactWorkMode();
```

- *Type:* java.lang.String

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimit();
```

- *Type:* java.lang.Number

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig;

ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.builder()
//  .afterContactWorkMode(java.lang.String)
//  .afterContactWorkTimeLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>java.lang.String</code> | The after contact work (ACW) mode for the channel. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>java.lang.Number</code> | The After Call Work (ACW) timeout setting, in seconds. |

---

##### `afterContactWorkMode`<sup>Optional</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkMode"></a>

```java
public java.lang.String getAfterContactWorkMode();
```

- *Type:* java.lang.String

The after contact work (ACW) mode for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_mode ConnectUser#after_contact_work_mode}

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.property.afterContactWorkTimeLimit"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimit();
```

- *Type:* java.lang.Number

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

### ConnectUserAutoAcceptConfigs <a name="ConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAutoAcceptConfigs;

ConnectUserAutoAcceptConfigs.builder()
//  .agentFirstCallbackAutoAccept(java.lang.Boolean|IResolvable)
//  .autoAccept(java.lang.Boolean|IResolvable)
//  .channel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept">agentFirstCallbackAutoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The agent first callback auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |

---

##### `agentFirstCallbackAutoAccept`<sup>Optional</sup> <a name="agentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.agentFirstCallbackAutoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAgentFirstCallbackAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The agent first callback auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#agent_first_callback_auto_accept ConnectUser#agent_first_callback_auto_accept}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.autoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserConfig;

ConnectUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .routingProfileArn(java.lang.String)
    .securityProfileArns(java.util.List<java.lang.String>)
    .username(java.lang.String)
//  .afterContactWorkConfigs(IResolvable|java.util.List<ConnectUserAfterContactWorkConfigs>)
//  .autoAcceptConfigs(IResolvable|java.util.List<ConnectUserAutoAcceptConfigs>)
//  .directoryUserId(java.lang.String)
//  .hierarchyGroupArn(java.lang.String)
//  .identityInfo(ConnectUserIdentityInfo)
//  .password(java.lang.String)
//  .persistentConnectionConfigs(IResolvable|java.util.List<ConnectUserPersistentConnectionConfigs>)
//  .phoneConfig(ConnectUserPhoneConfig)
//  .phoneNumberConfigs(IResolvable|java.util.List<ConnectUserPhoneNumberConfigs>)
//  .tags(IResolvable|java.util.List<ConnectUserTags>)
//  .userProficiencies(IResolvable|java.util.List<ConnectUserUserProficiencies>)
//  .voiceEnhancementConfigs(IResolvable|java.util.List<ConnectUserVoiceEnhancementConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn">routingProfileArn</a></code> | <code>java.lang.String</code> | The identifier of the routing profile for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns">securityProfileArns</a></code> | <code>java.util.List<java.lang.String></code> | One or more security profile arns for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | The user name for the account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs">afterContactWorkConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>></code> | After Contact Work configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs">autoAcceptConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>></code> | Auto-accept configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId">directoryUserId</a></code> | <code>java.lang.String</code> | The identifier of the user account in the directory used for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy group for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | The information about the identity of the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the user account. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs">persistentConnectionConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>></code> | Persistent Connection configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | The phone settings for the user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs">phoneNumberConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>></code> | Phone Number configurations of a user. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>></code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies">userProficiencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>></code> | One or more predefined attributes assigned to a user, with a level that indicates how skilled they are. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs">voiceEnhancementConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>></code> | Voice Enhancement configurations of a user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.routingProfileArn"></a>

```java
public java.lang.String getRoutingProfileArn();
```

- *Type:* java.lang.String

The identifier of the routing profile for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}

---

##### `securityProfileArns`<sup>Required</sup> <a name="securityProfileArns" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.securityProfileArns"></a>

```java
public java.util.List<java.lang.String> getSecurityProfileArns();
```

- *Type:* java.util.List<java.lang.String>

One or more security profile arns for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The user name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#username ConnectUser#username}

---

##### `afterContactWorkConfigs`<sup>Optional</sup> <a name="afterContactWorkConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.afterContactWorkConfigs"></a>

```java
public IResolvable|java.util.List<ConnectUserAfterContactWorkConfigs> getAfterContactWorkConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>>

After Contact Work configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}

---

##### `autoAcceptConfigs`<sup>Optional</sup> <a name="autoAcceptConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.autoAcceptConfigs"></a>

```java
public IResolvable|java.util.List<ConnectUserAutoAcceptConfigs> getAutoAcceptConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>>

Auto-accept configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}

---

##### `directoryUserId`<sup>Optional</sup> <a name="directoryUserId" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```java
public java.lang.String getDirectoryUserId();
```

- *Type:* java.lang.String

The identifier of the user account in the directory used for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}

---

##### `hierarchyGroupArn`<sup>Optional</sup> <a name="hierarchyGroupArn" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.hierarchyGroupArn"></a>

```java
public java.lang.String getHierarchyGroupArn();
```

- *Type:* java.lang.String

The identifier of the hierarchy group for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}

---

##### `identityInfo`<sup>Optional</sup> <a name="identityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.identityInfo"></a>

```java
public ConnectUserIdentityInfo getIdentityInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

The information about the identity of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the user account.

A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#password ConnectUser#password}

---

##### `persistentConnectionConfigs`<sup>Optional</sup> <a name="persistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.persistentConnectionConfigs"></a>

```java
public IResolvable|java.util.List<ConnectUserPersistentConnectionConfigs> getPersistentConnectionConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>>

Persistent Connection configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```java
public ConnectUserPhoneConfig getPhoneConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

The phone settings for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}

---

##### `phoneNumberConfigs`<sup>Optional</sup> <a name="phoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.phoneNumberConfigs"></a>

```java
public IResolvable|java.util.List<ConnectUserPhoneNumberConfigs> getPhoneNumberConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>>

Phone Number configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectUserTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#tags ConnectUser#tags}

---

##### `userProficiencies`<sup>Optional</sup> <a name="userProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.userProficiencies"></a>

```java
public IResolvable|java.util.List<ConnectUserUserProficiencies> getUserProficiencies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>>

One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}

---

##### `voiceEnhancementConfigs`<sup>Optional</sup> <a name="voiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserConfig.property.voiceEnhancementConfigs"></a>

```java
public IResolvable|java.util.List<ConnectUserVoiceEnhancementConfigs> getVoiceEnhancementConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>>

Voice Enhancement configurations of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserIdentityInfo;

ConnectUserIdentityInfo.builder()
//  .email(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
//  .mobile(java.lang.String)
//  .secondaryEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email">email</a></code> | <code>java.lang.String</code> | The email address. If you are using SAML for identity management and include this parameter, an error is returned. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName">firstName</a></code> | <code>java.lang.String</code> | The first name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName">lastName</a></code> | <code>java.lang.String</code> | The last name. This is required if you are using Amazon Connect or SAML for identity management. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile">mobile</a></code> | <code>java.lang.String</code> | The mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail">secondaryEmail</a></code> | <code>java.lang.String</code> | The secondary email address. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email address. If you are using SAML for identity management and include this parameter, an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#email ConnectUser#email}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

The first name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#first_name ConnectUser#first_name}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

The last name. This is required if you are using Amazon Connect or SAML for identity management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#last_name ConnectUser#last_name}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.mobile"></a>

```java
public java.lang.String getMobile();
```

- *Type:* java.lang.String

The mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#mobile ConnectUser#mobile}

---

##### `secondaryEmail`<sup>Optional</sup> <a name="secondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo.property.secondaryEmail"></a>

```java
public java.lang.String getSecondaryEmail();
```

- *Type:* java.lang.String

The secondary email address.

If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#secondary_email ConnectUser#secondary_email}

---

### ConnectUserPersistentConnectionConfigs <a name="ConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPersistentConnectionConfigs;

ConnectUserPersistentConnectionConfigs.builder()
//  .channel(java.lang.String)
//  .persistentConnection(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection">persistentConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The Persistent Connection setting. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `persistentConnection`<sup>Optional</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs.property.persistentConnection"></a>

```java
public java.lang.Boolean|IResolvable getPersistentConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPhoneConfig;

ConnectUserPhoneConfig.builder()
//  .afterContactWorkTimeLimit(java.lang.Number)
//  .autoAccept(java.lang.Boolean|IResolvable)
//  .deskPhoneNumber(java.lang.String)
//  .persistentConnection(java.lang.Boolean|IResolvable)
//  .phoneType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>java.lang.Number</code> | The After Call Work (ACW) timeout setting, in seconds. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The Auto accept setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>java.lang.String</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection">persistentConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The Persistent Connection setting. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType">phoneType</a></code> | <code>java.lang.String</code> | The phone type. |

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimit();
```

- *Type:* java.lang.Number

The After Call Work (ACW) timeout setting, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The Auto accept setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}

---

##### `deskPhoneNumber`<sup>Optional</sup> <a name="deskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```java
public java.lang.String getDeskPhoneNumber();
```

- *Type:* java.lang.String

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}

---

##### `persistentConnection`<sup>Optional</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.persistentConnection"></a>

```java
public java.lang.Boolean|IResolvable getPersistentConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The Persistent Connection setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}

---

##### `phoneType`<sup>Optional</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```java
public java.lang.String getPhoneType();
```

- *Type:* java.lang.String

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserPhoneNumberConfigs <a name="ConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPhoneNumberConfigs;

ConnectUserPhoneNumberConfigs.builder()
//  .channel(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .phoneType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | The phone number for the user's desk phone. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType">phoneType</a></code> | <code>java.lang.String</code> | The phone type. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

The phone number for the user's desk phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_number ConnectUser#phone_number}

---

##### `phoneType`<sup>Optional</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs.property.phoneType"></a>

```java
public java.lang.String getPhoneType();
```

- *Type:* java.lang.String

The phone type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}

---

### ConnectUserTags <a name="ConnectUserTags" id="@cdktn/provider-awscc.connectUser.ConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserTags;

ConnectUserTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#key ConnectUser#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#value ConnectUser#value}

---

### ConnectUserUserProficiencies <a name="ConnectUserUserProficiencies" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserUserProficiencies;

ConnectUserUserProficiencies.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .level(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level">level</a></code> | <code>java.lang.Number</code> | The level of the proficiency. The valid values are 0 to 10. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#attribute_name ConnectUser#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#attribute_value ConnectUser#attribute_value}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies.property.level"></a>

```java
public java.lang.Number getLevel();
```

- *Type:* java.lang.Number

The level of the proficiency. The valid values are 0 to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#level ConnectUser#level}

---

### ConnectUserVoiceEnhancementConfigs <a name="ConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserVoiceEnhancementConfigs;

ConnectUserVoiceEnhancementConfigs.builder()
//  .channel(java.lang.String)
//  .voiceEnhancementMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode">voiceEnhancementMode</a></code> | <code>java.lang.String</code> | The Voice Enhancement Mode setting. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#channel ConnectUser#channel}

---

##### `voiceEnhancementMode`<sup>Optional</sup> <a name="voiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs.property.voiceEnhancementMode"></a>

```java
public java.lang.String getVoiceEnhancementMode();
```

- *Type:* java.lang.String

The Voice Enhancement Mode setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_user#voice_enhancement_mode ConnectUser#voice_enhancement_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference;

new ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkMode` <a name="resetAfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```java
public void resetAfterContactWorkMode()
```

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```java
public void resetAfterContactWorkTimeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">afterContactWorkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterContactWorkModeInput`<sup>Optional</sup> <a name="afterContactWorkModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```java
public java.lang.String getAfterContactWorkModeInput();
```

- *Type:* java.lang.String

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimitInput();
```

- *Type:* java.lang.Number

---

##### `afterContactWorkMode`<sup>Required</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```java
public java.lang.String getAfterContactWorkMode();
```

- *Type:* java.lang.String

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserAfterContactWorkConfigsAfterContactWorkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference;

new ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkMode` <a name="resetAfterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkMode"></a>

```java
public void resetAfterContactWorkMode()
```

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```java
public void resetAfterContactWorkTimeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput">afterContactWorkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterContactWorkModeInput`<sup>Optional</sup> <a name="afterContactWorkModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkModeInput"></a>

```java
public java.lang.String getAfterContactWorkModeInput();
```

- *Type:* java.lang.String

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimitInput();
```

- *Type:* java.lang.Number

---

##### `afterContactWorkMode`<sup>Required</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```java
public java.lang.String getAfterContactWorkMode();
```

- *Type:* java.lang.String

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### ConnectUserAfterContactWorkConfigsList <a name="ConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigsList;

new ConnectUserAfterContactWorkConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get"></a>

```java
public ConnectUserAfterContactWorkConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserAfterContactWorkConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>>

---


### ConnectUserAfterContactWorkConfigsOutputReference <a name="ConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAfterContactWorkConfigsOutputReference;

new ConnectUserAfterContactWorkConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAfterContactWorkConfig` <a name="putAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig"></a>

```java
public void putAfterContactWorkConfig(ConnectUserAfterContactWorkConfigsAfterContactWorkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAfterContactWorkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `putAgentFirstCallbackAfterContactWorkConfig` <a name="putAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig"></a>

```java
public void putAgentFirstCallbackAfterContactWorkConfig(ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.putAgentFirstCallbackAfterContactWorkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `resetAfterContactWorkConfig` <a name="resetAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAfterContactWorkConfig"></a>

```java
public void resetAfterContactWorkConfig()
```

##### `resetAgentFirstCallbackAfterContactWorkConfig` <a name="resetAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetAgentFirstCallbackAfterContactWorkConfig"></a>

```java
public void resetAgentFirstCallbackAfterContactWorkConfig()
```

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.resetChannel"></a>

```java
public void resetChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">afterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">agentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput">afterContactWorkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput">agentFirstCallbackAfterContactWorkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterContactWorkConfig`<sup>Required</sup> <a name="afterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```java
public ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference getAfterContactWorkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `agentFirstCallbackAfterContactWorkConfig`<sup>Required</sup> <a name="agentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```java
public ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference getAgentFirstCallbackAfterContactWorkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `afterContactWorkConfigInput`<sup>Optional</sup> <a name="afterContactWorkConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfigInput"></a>

```java
public IResolvable|ConnectUserAfterContactWorkConfigsAfterContactWorkConfig getAfterContactWorkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---

##### `agentFirstCallbackAfterContactWorkConfigInput`<sup>Optional</sup> <a name="agentFirstCallbackAfterContactWorkConfigInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfigInput"></a>

```java
public IResolvable|ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig getAgentFirstCallbackAfterContactWorkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserAfterContactWorkConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAfterContactWorkConfigs">ConnectUserAfterContactWorkConfigs</a>

---


### ConnectUserAutoAcceptConfigsList <a name="ConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAutoAcceptConfigsList;

new ConnectUserAutoAcceptConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get"></a>

```java
public ConnectUserAutoAcceptConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserAutoAcceptConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>>

---


### ConnectUserAutoAcceptConfigsOutputReference <a name="ConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserAutoAcceptConfigsOutputReference;

new ConnectUserAutoAcceptConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentFirstCallbackAutoAccept` <a name="resetAgentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAgentFirstCallbackAutoAccept"></a>

```java
public void resetAgentFirstCallbackAutoAccept()
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetAutoAccept"></a>

```java
public void resetAutoAccept()
```

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.resetChannel"></a>

```java
public void resetChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput">agentFirstCallbackAutoAcceptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput">autoAcceptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">agentFirstCallbackAutoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentFirstCallbackAutoAcceptInput`<sup>Optional</sup> <a name="agentFirstCallbackAutoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAcceptInput"></a>

```java
public java.lang.Boolean|IResolvable getAgentFirstCallbackAutoAcceptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAcceptInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoAcceptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `agentFirstCallbackAutoAccept`<sup>Required</sup> <a name="agentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAgentFirstCallbackAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserAutoAcceptConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserAutoAcceptConfigs">ConnectUserAutoAcceptConfigs</a>

---


### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserIdentityInfoOutputReference;

new ConnectUserIdentityInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetMobile` <a name="resetMobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetMobile"></a>

```java
public void resetMobile()
```

##### `resetSecondaryEmail` <a name="resetSecondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.resetSecondaryEmail"></a>

```java
public void resetSecondaryEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput">mobileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput">secondaryEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile">mobile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail">secondaryEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `mobileInput`<sup>Optional</sup> <a name="mobileInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobileInput"></a>

```java
public java.lang.String getMobileInput();
```

- *Type:* java.lang.String

---

##### `secondaryEmailInput`<sup>Optional</sup> <a name="secondaryEmailInput" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmailInput"></a>

```java
public java.lang.String getSecondaryEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.mobile"></a>

```java
public java.lang.String getMobile();
```

- *Type:* java.lang.String

---

##### `secondaryEmail`<sup>Required</sup> <a name="secondaryEmail" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```java
public java.lang.String getSecondaryEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserIdentityInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPersistentConnectionConfigsList <a name="ConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPersistentConnectionConfigsList;

new ConnectUserPersistentConnectionConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get"></a>

```java
public ConnectUserPersistentConnectionConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserPersistentConnectionConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>>

---


### ConnectUserPersistentConnectionConfigsOutputReference <a name="ConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPersistentConnectionConfigsOutputReference;

new ConnectUserPersistentConnectionConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetPersistentConnection` <a name="resetPersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.resetPersistentConnection"></a>

```java
public void resetPersistentConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput">persistentConnectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">persistentConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `persistentConnectionInput`<sup>Optional</sup> <a name="persistentConnectionInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnectionInput"></a>

```java
public java.lang.Boolean|IResolvable getPersistentConnectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `persistentConnection`<sup>Required</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```java
public java.lang.Boolean|IResolvable getPersistentConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserPersistentConnectionConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPersistentConnectionConfigs">ConnectUserPersistentConnectionConfigs</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPhoneConfigOutputReference;

new ConnectUserPhoneConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```java
public void resetAfterContactWorkTimeLimit()
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```java
public void resetAutoAccept()
```

##### `resetDeskPhoneNumber` <a name="resetDeskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```java
public void resetDeskPhoneNumber()
```

##### `resetPersistentConnection` <a name="resetPersistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPersistentConnection"></a>

```java
public void resetPersistentConnection()
```

##### `resetPhoneType` <a name="resetPhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.resetPhoneType"></a>

```java
public void resetPhoneType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">autoAcceptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">deskPhoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput">persistentConnectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">phoneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">autoAccept</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection">persistentConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">phoneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimitInput();
```

- *Type:* java.lang.Number

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoAcceptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deskPhoneNumberInput`<sup>Optional</sup> <a name="deskPhoneNumberInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```java
public java.lang.String getDeskPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `persistentConnectionInput`<sup>Optional</sup> <a name="persistentConnectionInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnectionInput"></a>

```java
public java.lang.Boolean|IResolvable getPersistentConnectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `phoneTypeInput`<sup>Optional</sup> <a name="phoneTypeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```java
public java.lang.String getPhoneTypeInput();
```

- *Type:* java.lang.String

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```java
public java.lang.Number getAfterContactWorkTimeLimit();
```

- *Type:* java.lang.Number

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```java
public java.lang.Boolean|IResolvable getAutoAccept();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deskPhoneNumber`<sup>Required</sup> <a name="deskPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```java
public java.lang.String getDeskPhoneNumber();
```

- *Type:* java.lang.String

---

##### `persistentConnection`<sup>Required</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```java
public java.lang.Boolean|IResolvable getPersistentConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```java
public java.lang.String getPhoneType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserPhoneConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---


### ConnectUserPhoneNumberConfigsList <a name="ConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPhoneNumberConfigsList;

new ConnectUserPhoneNumberConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get"></a>

```java
public ConnectUserPhoneNumberConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserPhoneNumberConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>>

---


### ConnectUserPhoneNumberConfigsOutputReference <a name="ConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserPhoneNumberConfigsOutputReference;

new ConnectUserPhoneNumberConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetPhoneType` <a name="resetPhoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.resetPhoneType"></a>

```java
public void resetPhoneType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput">phoneTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType">phoneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `phoneTypeInput`<sup>Optional</sup> <a name="phoneTypeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneTypeInput"></a>

```java
public java.lang.String getPhoneTypeInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```java
public java.lang.String getPhoneType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserPhoneNumberConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserPhoneNumberConfigs">ConnectUserPhoneNumberConfigs</a>

---


### ConnectUserTagsList <a name="ConnectUserTagsList" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserTagsList;

new ConnectUserTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get"></a>

```java
public ConnectUserTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>>

---


### ConnectUserTagsOutputReference <a name="ConnectUserTagsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserTagsOutputReference;

new ConnectUserTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserTags">ConnectUserTags</a>

---


### ConnectUserUserProficienciesList <a name="ConnectUserUserProficienciesList" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserUserProficienciesList;

new ConnectUserUserProficienciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get"></a>

```java
public ConnectUserUserProficienciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserUserProficiencies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>>

---


### ConnectUserUserProficienciesOutputReference <a name="ConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserUserProficienciesOutputReference;

new ConnectUserUserProficienciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.resetLevel"></a>

```java
public void resetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level">level</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.levelInput"></a>

```java
public java.lang.Number getLevelInput();
```

- *Type:* java.lang.Number

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.level"></a>

```java
public java.lang.Number getLevel();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserUserProficiencies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserUserProficiencies">ConnectUserUserProficiencies</a>

---


### ConnectUserVoiceEnhancementConfigsList <a name="ConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserVoiceEnhancementConfigsList;

new ConnectUserVoiceEnhancementConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get"></a>

```java
public ConnectUserVoiceEnhancementConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserVoiceEnhancementConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>>

---


### ConnectUserVoiceEnhancementConfigsOutputReference <a name="ConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user.ConnectUserVoiceEnhancementConfigsOutputReference;

new ConnectUserVoiceEnhancementConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetVoiceEnhancementMode` <a name="resetVoiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.resetVoiceEnhancementMode"></a>

```java
public void resetVoiceEnhancementMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput">voiceEnhancementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">voiceEnhancementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `voiceEnhancementModeInput`<sup>Optional</sup> <a name="voiceEnhancementModeInput" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementModeInput"></a>

```java
public java.lang.String getVoiceEnhancementModeInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `voiceEnhancementMode`<sup>Required</sup> <a name="voiceEnhancementMode" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```java
public java.lang.String getVoiceEnhancementMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserVoiceEnhancementConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUser.ConnectUserVoiceEnhancementConfigs">ConnectUserVoiceEnhancementConfigs</a>

---



