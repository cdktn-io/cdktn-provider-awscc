# `chimeChannel` Submodule <a name="`chimeChannel` Submodule" id="@cdktn/provider-awscc.chimeChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannel <a name="ChimeChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_instance_arn: str,
  chime_bearer: str,
  name: str,
  channel_id: str = None,
  elastic_channel_configuration: ChimeChannelElasticChannelConfiguration = None,
  expiration_settings: ChimeChannelExpirationSettings = None,
  member_arns: typing.List[str] = None,
  metadata: str = None,
  mode: str = None,
  moderator_arns: typing.List[str] = None,
  privacy: str = None,
  tags: IResolvable | typing.List[ChimeChannelTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.chimeBearer">chime_bearer</a></code> | <code>str</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.channelId">channel_id</a></code> | <code>str</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.elasticChannelConfiguration">elastic_channel_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.expirationSettings">expiration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.memberArns">member_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.mode">mode</a></code> | <code>str</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.moderatorArns">moderator_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.privacy">privacy</a></code> | <code>str</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]</code> | The tags for the channel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.appInstanceArn"></a>

- *Type:* str

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `chime_bearer`<sup>Required</sup> <a name="chime_bearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.chimeBearer"></a>

- *Type:* str

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.name"></a>

- *Type:* str

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.channelId"></a>

- *Type:* str

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `elastic_channel_configuration`<sup>Optional</sup> <a name="elastic_channel_configuration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.elasticChannelConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `expiration_settings`<sup>Optional</sup> <a name="expiration_settings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.expirationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `member_arns`<sup>Optional</sup> <a name="member_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.memberArns"></a>

- *Type:* typing.List[str]

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.metadata"></a>

- *Type:* str

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.mode"></a>

- *Type:* str

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `moderator_arns`<sup>Optional</sup> <a name="moderator_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.moderatorArns"></a>

- *Type:* typing.List[str]

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.privacy"></a>

- *Type:* str

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration">put_elastic_channel_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings">put_expiration_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId">reset_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration">reset_elastic_channel_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings">reset_expiration_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns">reset_member_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns">reset_moderator_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy">reset_privacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_elastic_channel_configuration` <a name="put_elastic_channel_configuration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration"></a>

```python
def put_elastic_channel_configuration(
  maximum_sub_channels: typing.Union[int, float] = None,
  minimum_membership_percentage: typing.Union[int, float] = None,
  target_memberships_per_sub_channel: typing.Union[int, float] = None
) -> None
```

###### `maximum_sub_channels`<sup>Optional</sup> <a name="maximum_sub_channels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.maximumSubChannels"></a>

- *Type:* typing.Union[int, float]

The maximum number of SubChannels allowed in the elastic channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels ChimeChannel#maximum_sub_channels}

---

###### `minimum_membership_percentage`<sup>Optional</sup> <a name="minimum_membership_percentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.minimumMembershipPercentage"></a>

- *Type:* typing.Union[int, float]

The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage ChimeChannel#minimum_membership_percentage}

---

###### `target_memberships_per_sub_channel`<sup>Optional</sup> <a name="target_memberships_per_sub_channel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.targetMembershipsPerSubChannel"></a>

- *Type:* typing.Union[int, float]

The maximum number of members allowed in a SubChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel ChimeChannel#target_memberships_per_sub_channel}

---

##### `put_expiration_settings` <a name="put_expiration_settings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings"></a>

```python
def put_expiration_settings(
  expiration_criterion: str = None,
  expiration_days: typing.Union[int, float] = None
) -> None
```

###### `expiration_criterion`<sup>Optional</sup> <a name="expiration_criterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings.parameter.expirationCriterion"></a>

- *Type:* str

The condition the expiration period is measured from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion ChimeChannel#expiration_criterion}

---

###### `expiration_days`<sup>Optional</sup> <a name="expiration_days" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings.parameter.expirationDays"></a>

- *Type:* typing.Union[int, float]

The period in days after which the system automatically deletes the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days ChimeChannel#expiration_days}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChimeChannelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]

---

##### `reset_channel_id` <a name="reset_channel_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId"></a>

```python
def reset_channel_id() -> None
```

##### `reset_elastic_channel_configuration` <a name="reset_elastic_channel_configuration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration"></a>

```python
def reset_elastic_channel_configuration() -> None
```

##### `reset_expiration_settings` <a name="reset_expiration_settings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings"></a>

```python
def reset_expiration_settings() -> None
```

##### `reset_member_arns` <a name="reset_member_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns"></a>

```python
def reset_member_arns() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_moderator_arns` <a name="reset_moderator_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns"></a>

```python
def reset_moderator_arns() -> None
```

##### `reset_privacy` <a name="reset_privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy"></a>

```python
def reset_privacy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn">channel_flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration">elastic_channel_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings">expiration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp">last_message_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput">app_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput">chime_bearer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput">elastic_channel_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput">expiration_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput">member_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput">moderator_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput">privacy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer">chime_bearer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns">member_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns">moderator_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy">privacy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `channel_flow_arn`<sup>Required</sup> <a name="channel_flow_arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn"></a>

```python
channel_flow_arn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy"></a>

```python
created_by: ChimeChannelCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a>

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `elastic_channel_configuration`<sup>Required</sup> <a name="elastic_channel_configuration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration"></a>

```python
elastic_channel_configuration: ChimeChannelElasticChannelConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a>

---

##### `expiration_settings`<sup>Required</sup> <a name="expiration_settings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings"></a>

```python
expiration_settings: ChimeChannelExpirationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_message_timestamp`<sup>Required</sup> <a name="last_message_timestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp"></a>

```python
last_message_timestamp: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags"></a>

```python
tags: ChimeChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a>

---

##### `app_instance_arn_input`<sup>Optional</sup> <a name="app_instance_arn_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput"></a>

```python
app_instance_arn_input: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `chime_bearer_input`<sup>Optional</sup> <a name="chime_bearer_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput"></a>

```python
chime_bearer_input: str
```

- *Type:* str

---

##### `elastic_channel_configuration_input`<sup>Optional</sup> <a name="elastic_channel_configuration_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput"></a>

```python
elastic_channel_configuration_input: IResolvable | ChimeChannelElasticChannelConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `expiration_settings_input`<sup>Optional</sup> <a name="expiration_settings_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput"></a>

```python
expiration_settings_input: IResolvable | ChimeChannelExpirationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `member_arns_input`<sup>Optional</sup> <a name="member_arns_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput"></a>

```python
member_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `moderator_arns_input`<sup>Optional</sup> <a name="moderator_arns_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput"></a>

```python
moderator_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `privacy_input`<sup>Optional</sup> <a name="privacy_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput"></a>

```python
privacy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChimeChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `chime_bearer`<sup>Required</sup> <a name="chime_bearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer"></a>

```python
chime_bearer: str
```

- *Type:* str

---

##### `member_arns`<sup>Required</sup> <a name="member_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns"></a>

```python
member_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `moderator_arns`<sup>Required</sup> <a name="moderator_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns"></a>

```python
moderator_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy"></a>

```python
privacy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelConfig <a name="ChimeChannelConfig" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_instance_arn: str,
  chime_bearer: str,
  name: str,
  channel_id: str = None,
  elastic_channel_configuration: ChimeChannelElasticChannelConfiguration = None,
  expiration_settings: ChimeChannelExpirationSettings = None,
  member_arns: typing.List[str] = None,
  metadata: str = None,
  mode: str = None,
  moderator_arns: typing.List[str] = None,
  privacy: str = None,
  tags: IResolvable | typing.List[ChimeChannelTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer">chime_bearer</a></code> | <code>str</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name">name</a></code> | <code>str</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId">channel_id</a></code> | <code>str</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration">elastic_channel_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings">expiration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns">member_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata">metadata</a></code> | <code>str</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode">mode</a></code> | <code>str</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns">moderator_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy">privacy</a></code> | <code>str</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]</code> | The tags for the channel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `chime_bearer`<sup>Required</sup> <a name="chime_bearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer"></a>

```python
chime_bearer: str
```

- *Type:* str

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `elastic_channel_configuration`<sup>Optional</sup> <a name="elastic_channel_configuration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration"></a>

```python
elastic_channel_configuration: ChimeChannelElasticChannelConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `expiration_settings`<sup>Optional</sup> <a name="expiration_settings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings"></a>

```python
expiration_settings: ChimeChannelExpirationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `member_arns`<sup>Optional</sup> <a name="member_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns"></a>

```python
member_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `moderator_arns`<sup>Optional</sup> <a name="moderator_arns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns"></a>

```python
moderator_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy"></a>

```python
privacy: str
```

- *Type:* str

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChimeChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

### ChimeChannelCreatedBy <a name="ChimeChannelCreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelCreatedBy()
```


### ChimeChannelElasticChannelConfiguration <a name="ChimeChannelElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelElasticChannelConfiguration(
  maximum_sub_channels: typing.Union[int, float] = None,
  minimum_membership_percentage: typing.Union[int, float] = None,
  target_memberships_per_sub_channel: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels">maximum_sub_channels</a></code> | <code>typing.Union[int, float]</code> | The maximum number of SubChannels allowed in the elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage">minimum_membership_percentage</a></code> | <code>typing.Union[int, float]</code> | The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel">target_memberships_per_sub_channel</a></code> | <code>typing.Union[int, float]</code> | The maximum number of members allowed in a SubChannel. |

---

##### `maximum_sub_channels`<sup>Optional</sup> <a name="maximum_sub_channels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels"></a>

```python
maximum_sub_channels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of SubChannels allowed in the elastic channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels ChimeChannel#maximum_sub_channels}

---

##### `minimum_membership_percentage`<sup>Optional</sup> <a name="minimum_membership_percentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage"></a>

```python
minimum_membership_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage ChimeChannel#minimum_membership_percentage}

---

##### `target_memberships_per_sub_channel`<sup>Optional</sup> <a name="target_memberships_per_sub_channel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel"></a>

```python
target_memberships_per_sub_channel: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of members allowed in a SubChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel ChimeChannel#target_memberships_per_sub_channel}

---

### ChimeChannelExpirationSettings <a name="ChimeChannelExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelExpirationSettings(
  expiration_criterion: str = None,
  expiration_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion">expiration_criterion</a></code> | <code>str</code> | The condition the expiration period is measured from. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | The period in days after which the system automatically deletes the channel. |

---

##### `expiration_criterion`<sup>Optional</sup> <a name="expiration_criterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion"></a>

```python
expiration_criterion: str
```

- *Type:* str

The condition the expiration period is measured from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion ChimeChannel#expiration_criterion}

---

##### `expiration_days`<sup>Optional</sup> <a name="expiration_days" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays"></a>

```python
expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period in days after which the system automatically deletes the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days ChimeChannel#expiration_days}

---

### ChimeChannelTags <a name="ChimeChannelTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key">key</a></code> | <code>str</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value">value</a></code> | <code>str</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#key ChimeChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#value ChimeChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelCreatedByOutputReference <a name="ChimeChannelCreatedByOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: ChimeChannelCreatedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a>

---


### ChimeChannelElasticChannelConfigurationOutputReference <a name="ChimeChannelElasticChannelConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels">reset_maximum_sub_channels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage">reset_minimum_membership_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel">reset_target_memberships_per_sub_channel</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_sub_channels` <a name="reset_maximum_sub_channels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels"></a>

```python
def reset_maximum_sub_channels() -> None
```

##### `reset_minimum_membership_percentage` <a name="reset_minimum_membership_percentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage"></a>

```python
def reset_minimum_membership_percentage() -> None
```

##### `reset_target_memberships_per_sub_channel` <a name="reset_target_memberships_per_sub_channel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel"></a>

```python
def reset_target_memberships_per_sub_channel() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput">maximum_sub_channels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput">minimum_membership_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput">target_memberships_per_sub_channel_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels">maximum_sub_channels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage">minimum_membership_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel">target_memberships_per_sub_channel</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_sub_channels_input`<sup>Optional</sup> <a name="maximum_sub_channels_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput"></a>

```python
maximum_sub_channels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_membership_percentage_input`<sup>Optional</sup> <a name="minimum_membership_percentage_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput"></a>

```python
minimum_membership_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_memberships_per_sub_channel_input`<sup>Optional</sup> <a name="target_memberships_per_sub_channel_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput"></a>

```python
target_memberships_per_sub_channel_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_sub_channels`<sup>Required</sup> <a name="maximum_sub_channels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels"></a>

```python
maximum_sub_channels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_membership_percentage`<sup>Required</sup> <a name="minimum_membership_percentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage"></a>

```python
minimum_membership_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_memberships_per_sub_channel`<sup>Required</sup> <a name="target_memberships_per_sub_channel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel"></a>

```python
target_memberships_per_sub_channel: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelElasticChannelConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---


### ChimeChannelExpirationSettingsOutputReference <a name="ChimeChannelExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelExpirationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion">reset_expiration_criterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays">reset_expiration_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_criterion` <a name="reset_expiration_criterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```python
def reset_expiration_criterion() -> None
```

##### `reset_expiration_days` <a name="reset_expiration_days" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays"></a>

```python
def reset_expiration_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput">expiration_criterion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput">expiration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion">expiration_criterion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_criterion_input`<sup>Optional</sup> <a name="expiration_criterion_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```python
expiration_criterion_input: str
```

- *Type:* str

---

##### `expiration_days_input`<sup>Optional</sup> <a name="expiration_days_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```python
expiration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_criterion`<sup>Required</sup> <a name="expiration_criterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion"></a>

```python
expiration_criterion: str
```

- *Type:* str

---

##### `expiration_days`<sup>Required</sup> <a name="expiration_days" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays"></a>

```python
expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelExpirationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---


### ChimeChannelTagsList <a name="ChimeChannelTagsList" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>]

---


### ChimeChannelTagsOutputReference <a name="ChimeChannelTagsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel

chimeChannel.ChimeChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>

---



