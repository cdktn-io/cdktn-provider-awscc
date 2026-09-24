# `chimeChannel` Submodule <a name="`chimeChannel` Submodule" id="@cdktn/provider-awscc.chimeChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannel <a name="ChimeChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannel;

ChimeChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appInstanceArn(java.lang.String)
    .chimeBearer(java.lang.String)
    .name(java.lang.String)
//  .channelId(java.lang.String)
//  .elasticChannelConfiguration(ChimeChannelElasticChannelConfiguration)
//  .expirationSettings(ChimeChannelExpirationSettings)
//  .memberArns(java.util.List<java.lang.String>)
//  .metadata(java.lang.String)
//  .mode(java.lang.String)
//  .moderatorArns(java.util.List<java.lang.String>)
//  .privacy(java.lang.String)
//  .tags(IResolvable|java.util.List<ChimeChannelTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.chimeBearer">chimeBearer</a></code> | <code>java.lang.String</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.channelId">channelId</a></code> | <code>java.lang.String</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.elasticChannelConfiguration">elasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.memberArns">memberArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.moderatorArns">moderatorArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.privacy">privacy</a></code> | <code>java.lang.String</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>></code> | The tags for the channel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.appInstanceArn"></a>

- *Type:* java.lang.String

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `chimeBearer`<sup>Required</sup> <a name="chimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.chimeBearer"></a>

- *Type:* java.lang.String

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.channelId"></a>

- *Type:* java.lang.String

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `elasticChannelConfiguration`<sup>Optional</sup> <a name="elasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.elasticChannelConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `expirationSettings`<sup>Optional</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.expirationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `memberArns`<sup>Optional</sup> <a name="memberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.memberArns"></a>

- *Type:* java.util.List<java.lang.String>

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `moderatorArns`<sup>Optional</sup> <a name="moderatorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.moderatorArns"></a>

- *Type:* java.util.List<java.lang.String>

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.privacy"></a>

- *Type:* java.lang.String

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>>

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration">putElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings">putExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration">resetElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings">resetExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns">resetMemberArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns">resetModeratorArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy">resetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticChannelConfiguration` <a name="putElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration"></a>

```java
public void putElasticChannelConfiguration(ChimeChannelElasticChannelConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `putExpirationSettings` <a name="putExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings"></a>

```java
public void putExpirationSettings(ChimeChannelExpirationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChimeChannelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>>

---

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId"></a>

```java
public void resetChannelId()
```

##### `resetElasticChannelConfiguration` <a name="resetElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration"></a>

```java
public void resetElasticChannelConfiguration()
```

##### `resetExpirationSettings` <a name="resetExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings"></a>

```java
public void resetExpirationSettings()
```

##### `resetMemberArns` <a name="resetMemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns"></a>

```java
public void resetMemberArns()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode"></a>

```java
public void resetMode()
```

##### `resetModeratorArns` <a name="resetModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns"></a>

```java
public void resetModeratorArns()
```

##### `resetPrivacy` <a name="resetPrivacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy"></a>

```java
public void resetPrivacy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannel;

ChimeChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannel;

ChimeChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannel;

ChimeChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannel;

ChimeChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimeChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimeChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimeChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn">channelFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration">elasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp">lastMessageTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput">appInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput">chimeBearerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput">elasticChannelConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput">expirationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput">memberArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput">moderatorArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput">privacyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer">chimeBearer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns">memberArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns">moderatorArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy">privacy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `channelFlowArn`<sup>Required</sup> <a name="channelFlowArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn"></a>

```java
public java.lang.String getChannelFlowArn();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy"></a>

```java
public ChimeChannelCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `elasticChannelConfiguration`<sup>Required</sup> <a name="elasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration"></a>

```java
public ChimeChannelElasticChannelConfigurationOutputReference getElasticChannelConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a>

---

##### `expirationSettings`<sup>Required</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings"></a>

```java
public ChimeChannelExpirationSettingsOutputReference getExpirationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastMessageTimestamp`<sup>Required</sup> <a name="lastMessageTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp"></a>

```java
public java.lang.String getLastMessageTimestamp();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags"></a>

```java
public ChimeChannelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a>

---

##### `appInstanceArnInput`<sup>Optional</sup> <a name="appInstanceArnInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput"></a>

```java
public java.lang.String getAppInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `chimeBearerInput`<sup>Optional</sup> <a name="chimeBearerInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput"></a>

```java
public java.lang.String getChimeBearerInput();
```

- *Type:* java.lang.String

---

##### `elasticChannelConfigurationInput`<sup>Optional</sup> <a name="elasticChannelConfigurationInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput"></a>

```java
public IResolvable|ChimeChannelElasticChannelConfiguration getElasticChannelConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `expirationSettingsInput`<sup>Optional</sup> <a name="expirationSettingsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput"></a>

```java
public IResolvable|ChimeChannelExpirationSettings getExpirationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `memberArnsInput`<sup>Optional</sup> <a name="memberArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput"></a>

```java
public java.util.List<java.lang.String> getMemberArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `moderatorArnsInput`<sup>Optional</sup> <a name="moderatorArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput"></a>

```java
public java.util.List<java.lang.String> getModeratorArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput"></a>

```java
public java.lang.String getPrivacyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChimeChannelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn"></a>

```java
public java.lang.String getAppInstanceArn();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `chimeBearer`<sup>Required</sup> <a name="chimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer"></a>

```java
public java.lang.String getChimeBearer();
```

- *Type:* java.lang.String

---

##### `memberArns`<sup>Required</sup> <a name="memberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns"></a>

```java
public java.util.List<java.lang.String> getMemberArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `moderatorArns`<sup>Required</sup> <a name="moderatorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns"></a>

```java
public java.util.List<java.lang.String> getModeratorArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy"></a>

```java
public java.lang.String getPrivacy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelConfig <a name="ChimeChannelConfig" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelConfig;

ChimeChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appInstanceArn(java.lang.String)
    .chimeBearer(java.lang.String)
    .name(java.lang.String)
//  .channelId(java.lang.String)
//  .elasticChannelConfiguration(ChimeChannelElasticChannelConfiguration)
//  .expirationSettings(ChimeChannelExpirationSettings)
//  .memberArns(java.util.List<java.lang.String>)
//  .metadata(java.lang.String)
//  .mode(java.lang.String)
//  .moderatorArns(java.util.List<java.lang.String>)
//  .privacy(java.lang.String)
//  .tags(IResolvable|java.util.List<ChimeChannelTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer">chimeBearer</a></code> | <code>java.lang.String</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId">channelId</a></code> | <code>java.lang.String</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration">elasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings">expirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns">memberArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns">moderatorArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy">privacy</a></code> | <code>java.lang.String</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>></code> | The tags for the channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn"></a>

```java
public java.lang.String getAppInstanceArn();
```

- *Type:* java.lang.String

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `chimeBearer`<sup>Required</sup> <a name="chimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer"></a>

```java
public java.lang.String getChimeBearer();
```

- *Type:* java.lang.String

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `elasticChannelConfiguration`<sup>Optional</sup> <a name="elasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration"></a>

```java
public ChimeChannelElasticChannelConfiguration getElasticChannelConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `expirationSettings`<sup>Optional</sup> <a name="expirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings"></a>

```java
public ChimeChannelExpirationSettings getExpirationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `memberArns`<sup>Optional</sup> <a name="memberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns"></a>

```java
public java.util.List<java.lang.String> getMemberArns();
```

- *Type:* java.util.List<java.lang.String>

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `moderatorArns`<sup>Optional</sup> <a name="moderatorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns"></a>

```java
public java.util.List<java.lang.String> getModeratorArns();
```

- *Type:* java.util.List<java.lang.String>

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy"></a>

```java
public java.lang.String getPrivacy();
```

- *Type:* java.lang.String

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChimeChannelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>>

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

### ChimeChannelCreatedBy <a name="ChimeChannelCreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelCreatedBy;

ChimeChannelCreatedBy.builder()
    .build();
```


### ChimeChannelElasticChannelConfiguration <a name="ChimeChannelElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelElasticChannelConfiguration;

ChimeChannelElasticChannelConfiguration.builder()
//  .maximumSubChannels(java.lang.Number)
//  .minimumMembershipPercentage(java.lang.Number)
//  .targetMembershipsPerSubChannel(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels">maximumSubChannels</a></code> | <code>java.lang.Number</code> | The maximum number of SubChannels allowed in the elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage">minimumMembershipPercentage</a></code> | <code>java.lang.Number</code> | The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel">targetMembershipsPerSubChannel</a></code> | <code>java.lang.Number</code> | The maximum number of members allowed in a SubChannel. |

---

##### `maximumSubChannels`<sup>Optional</sup> <a name="maximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels"></a>

```java
public java.lang.Number getMaximumSubChannels();
```

- *Type:* java.lang.Number

The maximum number of SubChannels allowed in the elastic channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels ChimeChannel#maximum_sub_channels}

---

##### `minimumMembershipPercentage`<sup>Optional</sup> <a name="minimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage"></a>

```java
public java.lang.Number getMinimumMembershipPercentage();
```

- *Type:* java.lang.Number

The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage ChimeChannel#minimum_membership_percentage}

---

##### `targetMembershipsPerSubChannel`<sup>Optional</sup> <a name="targetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel"></a>

```java
public java.lang.Number getTargetMembershipsPerSubChannel();
```

- *Type:* java.lang.Number

The maximum number of members allowed in a SubChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel ChimeChannel#target_memberships_per_sub_channel}

---

### ChimeChannelExpirationSettings <a name="ChimeChannelExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelExpirationSettings;

ChimeChannelExpirationSettings.builder()
//  .expirationCriterion(java.lang.String)
//  .expirationDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion">expirationCriterion</a></code> | <code>java.lang.String</code> | The condition the expiration period is measured from. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | The period in days after which the system automatically deletes the channel. |

---

##### `expirationCriterion`<sup>Optional</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion"></a>

```java
public java.lang.String getExpirationCriterion();
```

- *Type:* java.lang.String

The condition the expiration period is measured from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion ChimeChannel#expiration_criterion}

---

##### `expirationDays`<sup>Optional</sup> <a name="expirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

The period in days after which the system automatically deletes the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days ChimeChannel#expiration_days}

---

### ChimeChannelTags <a name="ChimeChannelTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelTags;

ChimeChannelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key">key</a></code> | <code>java.lang.String</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value">value</a></code> | <code>java.lang.String</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#key ChimeChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#value ChimeChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelCreatedByOutputReference <a name="ChimeChannelCreatedByOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelCreatedByOutputReference;

new ChimeChannelCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue"></a>

```java
public ChimeChannelCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a>

---


### ChimeChannelElasticChannelConfigurationOutputReference <a name="ChimeChannelElasticChannelConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelElasticChannelConfigurationOutputReference;

new ChimeChannelElasticChannelConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels">resetMaximumSubChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage">resetMinimumMembershipPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel">resetTargetMembershipsPerSubChannel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumSubChannels` <a name="resetMaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels"></a>

```java
public void resetMaximumSubChannels()
```

##### `resetMinimumMembershipPercentage` <a name="resetMinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage"></a>

```java
public void resetMinimumMembershipPercentage()
```

##### `resetTargetMembershipsPerSubChannel` <a name="resetTargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel"></a>

```java
public void resetTargetMembershipsPerSubChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput">maximumSubChannelsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput">minimumMembershipPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput">targetMembershipsPerSubChannelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels">maximumSubChannels</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage">minimumMembershipPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel">targetMembershipsPerSubChannel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumSubChannelsInput`<sup>Optional</sup> <a name="maximumSubChannelsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput"></a>

```java
public java.lang.Number getMaximumSubChannelsInput();
```

- *Type:* java.lang.Number

---

##### `minimumMembershipPercentageInput`<sup>Optional</sup> <a name="minimumMembershipPercentageInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput"></a>

```java
public java.lang.Number getMinimumMembershipPercentageInput();
```

- *Type:* java.lang.Number

---

##### `targetMembershipsPerSubChannelInput`<sup>Optional</sup> <a name="targetMembershipsPerSubChannelInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput"></a>

```java
public java.lang.Number getTargetMembershipsPerSubChannelInput();
```

- *Type:* java.lang.Number

---

##### `maximumSubChannels`<sup>Required</sup> <a name="maximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels"></a>

```java
public java.lang.Number getMaximumSubChannels();
```

- *Type:* java.lang.Number

---

##### `minimumMembershipPercentage`<sup>Required</sup> <a name="minimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage"></a>

```java
public java.lang.Number getMinimumMembershipPercentage();
```

- *Type:* java.lang.Number

---

##### `targetMembershipsPerSubChannel`<sup>Required</sup> <a name="targetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel"></a>

```java
public java.lang.Number getTargetMembershipsPerSubChannel();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeChannelElasticChannelConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---


### ChimeChannelExpirationSettingsOutputReference <a name="ChimeChannelExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelExpirationSettingsOutputReference;

new ChimeChannelExpirationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion">resetExpirationCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays">resetExpirationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationCriterion` <a name="resetExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```java
public void resetExpirationCriterion()
```

##### `resetExpirationDays` <a name="resetExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays"></a>

```java
public void resetExpirationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput">expirationCriterionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput">expirationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion">expirationCriterion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays">expirationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationCriterionInput`<sup>Optional</sup> <a name="expirationCriterionInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```java
public java.lang.String getExpirationCriterionInput();
```

- *Type:* java.lang.String

---

##### `expirationDaysInput`<sup>Optional</sup> <a name="expirationDaysInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```java
public java.lang.Number getExpirationDaysInput();
```

- *Type:* java.lang.Number

---

##### `expirationCriterion`<sup>Required</sup> <a name="expirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion"></a>

```java
public java.lang.String getExpirationCriterion();
```

- *Type:* java.lang.String

---

##### `expirationDays`<sup>Required</sup> <a name="expirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays"></a>

```java
public java.lang.Number getExpirationDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeChannelExpirationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---


### ChimeChannelTagsList <a name="ChimeChannelTagsList" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelTagsList;

new ChimeChannelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get"></a>

```java
public ChimeChannelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeChannelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>>

---


### ChimeChannelTagsOutputReference <a name="ChimeChannelTagsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_channel.ChimeChannelTagsOutputReference;

new ChimeChannelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeChannelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>

---



