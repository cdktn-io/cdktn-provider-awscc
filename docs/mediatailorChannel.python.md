# `mediatailorChannel` Submodule <a name="`mediatailorChannel` Submodule" id="@cdktn/provider-awscc.mediatailorChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorChannel <a name="MediatailorChannel" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel awscc_mediatailor_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  outputs: IResolvable | typing.List[MediatailorChannelOutputs],
  playback_mode: str,
  audiences: typing.List[str] = None,
  filler_slate: MediatailorChannelFillerSlate = None,
  log_configuration: MediatailorChannelLogConfiguration = None,
  tags: IResolvable | typing.List[MediatailorChannelTags] = None,
  tier: str = None,
  time_shift_configuration: MediatailorChannelTimeShiftConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]</code> | <p>The channel's output properties.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.playbackMode">playback_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.audiences">audiences</a></code> | <code>typing.List[str]</code> | <p>The list of audiences defined in channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.fillerSlate">filler_slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | <p>Slate VOD source configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | <p>The log configuration for the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]</code> | The tags to assign to the channel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.timeShiftConfiguration">time_shift_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | <p>The configuration for time-shifted viewing.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.channelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.outputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]

<p>The channel's output properties.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#outputs MediatailorChannel#outputs}

---

##### `playback_mode`<sup>Required</sup> <a name="playback_mode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.playbackMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.audiences"></a>

- *Type:* typing.List[str]

<p>The list of audiences defined in channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#audiences MediatailorChannel#audiences}

---

##### `filler_slate`<sup>Optional</sup> <a name="filler_slate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.fillerSlate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

<p>Slate VOD source configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#filler_slate MediatailorChannel#filler_slate}

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

<p>The log configuration for the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_configuration MediatailorChannel#log_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]

The tags to assign to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tags MediatailorChannel#tags}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}.

---

##### `time_shift_configuration`<sup>Optional</sup> <a name="time_shift_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.timeShiftConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

<p>The configuration for time-shifted viewing.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#time_shift_configuration MediatailorChannel#time_shift_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate">put_filler_slate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration">put_time_shift_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate">reset_filler_slate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration">reset_time_shift_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filler_slate` <a name="put_filler_slate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate"></a>

```python
def put_filler_slate(
  source_location_name: str = None,
  vod_source_name: str = None
) -> None
```

###### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate.parameter.sourceLocationName"></a>

- *Type:* str

<p>The name of the source location where the slate VOD source is stored.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_location_name MediatailorChannel#source_location_name}

---

###### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate.parameter.vodSourceName"></a>

- *Type:* str

<p>The slate VOD source name.

The VOD source must already exist in a source location before it can be used for slate.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#vod_source_name MediatailorChannel#vod_source_name}

---

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration"></a>

```python
def put_log_configuration(
  log_types: typing.List[str] = None
) -> None
```

###### `log_types`<sup>Optional</sup> <a name="log_types" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration.parameter.logTypes"></a>

- *Type:* typing.List[str]

<p>The log types.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_types MediatailorChannel#log_types}

---

##### `put_outputs` <a name="put_outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs"></a>

```python
def put_outputs(
  value: IResolvable | typing.List[MediatailorChannelOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediatailorChannelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]

---

##### `put_time_shift_configuration` <a name="put_time_shift_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration"></a>

```python
def put_time_shift_configuration(
  max_time_delay_seconds: typing.Union[int, float] = None
) -> None
```

###### `max_time_delay_seconds`<sup>Optional</sup> <a name="max_time_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration.parameter.maxTimeDelaySeconds"></a>

- *Type:* typing.Union[int, float]

<p>The maximum time delay for time-shifted viewing.

The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#max_time_delay_seconds MediatailorChannel#max_time_delay_seconds}

---

##### `reset_audiences` <a name="reset_audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_filler_slate` <a name="reset_filler_slate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate"></a>

```python
def reset_filler_slate() -> None
```

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_time_shift_configuration` <a name="reset_time_shift_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration"></a>

```python
def reset_time_shift_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediatailorChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediatailorChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate">filler_slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration">time_shift_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput">filler_slate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput">log_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput">outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput">playback_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput">time_shift_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode">playback_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier">tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `filler_slate`<sup>Required</sup> <a name="filler_slate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate"></a>

```python
filler_slate: MediatailorChannelFillerSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration"></a>

```python
log_configuration: MediatailorChannelLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs"></a>

```python
outputs: MediatailorChannelOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags"></a>

```python
tags: MediatailorChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a>

---

##### `time_shift_configuration`<sup>Required</sup> <a name="time_shift_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration"></a>

```python
time_shift_configuration: MediatailorChannelTimeShiftConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a>

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `filler_slate_input`<sup>Optional</sup> <a name="filler_slate_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput"></a>

```python
filler_slate_input: IResolvable | MediatailorChannelFillerSlate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput"></a>

```python
log_configuration_input: IResolvable | MediatailorChannelLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput"></a>

```python
outputs_input: IResolvable | typing.List[MediatailorChannelOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]

---

##### `playback_mode_input`<sup>Optional</sup> <a name="playback_mode_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput"></a>

```python
playback_mode_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediatailorChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `time_shift_configuration_input`<sup>Optional</sup> <a name="time_shift_configuration_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput"></a>

```python
time_shift_configuration_input: IResolvable | MediatailorChannelTimeShiftConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `playback_mode`<sup>Required</sup> <a name="playback_mode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode"></a>

```python
playback_mode: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorChannelConfig <a name="MediatailorChannelConfig" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  outputs: IResolvable | typing.List[MediatailorChannelOutputs],
  playback_mode: str,
  audiences: typing.List[str] = None,
  filler_slate: MediatailorChannelFillerSlate = None,
  log_configuration: MediatailorChannelLogConfiguration = None,
  tags: IResolvable | typing.List[MediatailorChannelTags] = None,
  tier: str = None,
  time_shift_configuration: MediatailorChannelTimeShiftConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]</code> | <p>The channel's output properties.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode">playback_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | <p>The list of audiences defined in channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate">filler_slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | <p>Slate VOD source configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | <p>The log configuration for the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]</code> | The tags to assign to the channel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration">time_shift_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | <p>The configuration for time-shifted viewing.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs"></a>

```python
outputs: IResolvable | typing.List[MediatailorChannelOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]

<p>The channel's output properties.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#outputs MediatailorChannel#outputs}

---

##### `playback_mode`<sup>Required</sup> <a name="playback_mode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode"></a>

```python
playback_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

<p>The list of audiences defined in channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#audiences MediatailorChannel#audiences}

---

##### `filler_slate`<sup>Optional</sup> <a name="filler_slate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate"></a>

```python
filler_slate: MediatailorChannelFillerSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

<p>Slate VOD source configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#filler_slate MediatailorChannel#filler_slate}

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration"></a>

```python
log_configuration: MediatailorChannelLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

<p>The log configuration for the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_configuration MediatailorChannel#log_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediatailorChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]

The tags to assign to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tags MediatailorChannel#tags}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}.

---

##### `time_shift_configuration`<sup>Optional</sup> <a name="time_shift_configuration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration"></a>

```python
time_shift_configuration: MediatailorChannelTimeShiftConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

<p>The configuration for time-shifted viewing.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#time_shift_configuration MediatailorChannel#time_shift_configuration}

---

### MediatailorChannelFillerSlate <a name="MediatailorChannelFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelFillerSlate(
  source_location_name: str = None,
  vod_source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | <p>The name of the source location where the slate VOD source is stored.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | <p>The slate VOD source name. |

---

##### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

<p>The name of the source location where the slate VOD source is stored.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_location_name MediatailorChannel#source_location_name}

---

##### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

<p>The slate VOD source name.

The VOD source must already exist in a source location before it can be used for slate.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#vod_source_name MediatailorChannel#vod_source_name}

---

### MediatailorChannelLogConfiguration <a name="MediatailorChannelLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelLogConfiguration(
  log_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes">log_types</a></code> | <code>typing.List[str]</code> | <p>The log types.</p>. |

---

##### `log_types`<sup>Optional</sup> <a name="log_types" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes"></a>

```python
log_types: typing.List[str]
```

- *Type:* typing.List[str]

<p>The log types.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_types MediatailorChannel#log_types}

---

### MediatailorChannelOutputs <a name="MediatailorChannelOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputs(
  manifest_name: str,
  source_group: str,
  dash_playlist_settings: MediatailorChannelOutputsDashPlaylistSettings = None,
  hls_playlist_settings: MediatailorChannelOutputsHlsPlaylistSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName">manifest_name</a></code> | <code>str</code> | <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup">source_group</a></code> | <code>str</code> | <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings">dash_playlist_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | <p>Dash manifest configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings">hls_playlist_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | <p>HLS playlist configuration parameters.</p>. |

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

<p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_name MediatailorChannel#manifest_name}

---

##### `source_group`<sup>Required</sup> <a name="source_group" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup"></a>

```python
source_group: str
```

- *Type:* str

<p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_group MediatailorChannel#source_group}

---

##### `dash_playlist_settings`<sup>Optional</sup> <a name="dash_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings"></a>

```python
dash_playlist_settings: MediatailorChannelOutputsDashPlaylistSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

<p>Dash manifest configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#dash_playlist_settings MediatailorChannel#dash_playlist_settings}

---

##### `hls_playlist_settings`<sup>Optional</sup> <a name="hls_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings"></a>

```python
hls_playlist_settings: MediatailorChannelOutputsHlsPlaylistSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

<p>HLS playlist configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#hls_playlist_settings MediatailorChannel#hls_playlist_settings}

---

### MediatailorChannelOutputsDashPlaylistSettings <a name="MediatailorChannelOutputsDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings(
  manifest_window_seconds: typing.Union[int, float] = None,
  min_buffer_time_seconds: typing.Union[int, float] = None,
  min_update_period_seconds: typing.Union[int, float] = None,
  suggested_presentation_delay_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds">manifest_window_seconds</a></code> | <code>typing.Union[int, float]</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds">min_buffer_time_seconds</a></code> | <code>typing.Union[int, float]</code> | <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds">min_update_period_seconds</a></code> | <code>typing.Union[int, float]</code> | <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds">suggested_presentation_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. |

---

##### `manifest_window_seconds`<sup>Optional</sup> <a name="manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds"></a>

```python
manifest_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

##### `min_buffer_time_seconds`<sup>Optional</sup> <a name="min_buffer_time_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds"></a>

```python
min_buffer_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_buffer_time_seconds MediatailorChannel#min_buffer_time_seconds}

---

##### `min_update_period_seconds`<sup>Optional</sup> <a name="min_update_period_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds"></a>

```python
min_update_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_update_period_seconds MediatailorChannel#min_update_period_seconds}

---

##### `suggested_presentation_delay_seconds`<sup>Optional</sup> <a name="suggested_presentation_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds"></a>

```python
suggested_presentation_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#suggested_presentation_delay_seconds MediatailorChannel#suggested_presentation_delay_seconds}

---

### MediatailorChannelOutputsHlsPlaylistSettings <a name="MediatailorChannelOutputsHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings(
  ad_markup_type: typing.List[str] = None,
  manifest_window_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType">ad_markup_type</a></code> | <code>typing.List[str]</code> | <p>Determines the type of SCTE 35 tags to use in ad markup. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds">manifest_window_seconds</a></code> | <code>typing.Union[int, float]</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |

---

##### `ad_markup_type`<sup>Optional</sup> <a name="ad_markup_type" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType"></a>

```python
ad_markup_type: typing.List[str]
```

- *Type:* typing.List[str]

<p>Determines the type of SCTE 35 tags to use in ad markup.

Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#ad_markup_type MediatailorChannel#ad_markup_type}

---

##### `manifest_window_seconds`<sup>Optional</sup> <a name="manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds"></a>

```python
manifest_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

### MediatailorChannelTags <a name="MediatailorChannelTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}.

---

### MediatailorChannelTimeShiftConfiguration <a name="MediatailorChannelTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelTimeShiftConfiguration(
  max_time_delay_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds">max_time_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | <p>The maximum time delay for time-shifted viewing. |

---

##### `max_time_delay_seconds`<sup>Optional</sup> <a name="max_time_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds"></a>

```python
max_time_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>The maximum time delay for time-shifted viewing.

The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#max_time_delay_seconds MediatailorChannel#max_time_delay_seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorChannelFillerSlateOutputReference <a name="MediatailorChannelFillerSlateOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelFillerSlateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName">reset_source_location_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName">reset_vod_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_location_name` <a name="reset_source_location_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName"></a>

```python
def reset_source_location_name() -> None
```

##### `reset_vod_source_name` <a name="reset_vod_source_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName"></a>

```python
def reset_vod_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput">vod_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `vod_source_name_input`<sup>Optional</sup> <a name="vod_source_name_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput"></a>

```python
vod_source_name_input: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelFillerSlate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---


### MediatailorChannelLogConfigurationOutputReference <a name="MediatailorChannelLogConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes">reset_log_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_types` <a name="reset_log_types" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes"></a>

```python
def reset_log_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput">log_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes">log_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_types_input`<sup>Optional</sup> <a name="log_types_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput"></a>

```python
log_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_types`<sup>Required</sup> <a name="log_types" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes"></a>

```python
log_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---


### MediatailorChannelOutputsDashPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsDashPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds">reset_manifest_window_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds">reset_min_buffer_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds">reset_min_update_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds">reset_suggested_presentation_delay_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_manifest_window_seconds` <a name="reset_manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```python
def reset_manifest_window_seconds() -> None
```

##### `reset_min_buffer_time_seconds` <a name="reset_min_buffer_time_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds"></a>

```python
def reset_min_buffer_time_seconds() -> None
```

##### `reset_min_update_period_seconds` <a name="reset_min_update_period_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds"></a>

```python
def reset_min_update_period_seconds() -> None
```

##### `reset_suggested_presentation_delay_seconds` <a name="reset_suggested_presentation_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds"></a>

```python
def reset_suggested_presentation_delay_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">manifest_window_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput">min_buffer_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput">min_update_period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput">suggested_presentation_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds">manifest_window_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds">min_buffer_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds">min_update_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds">suggested_presentation_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest_window_seconds_input`<sup>Optional</sup> <a name="manifest_window_seconds_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```python
manifest_window_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_buffer_time_seconds_input`<sup>Optional</sup> <a name="min_buffer_time_seconds_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput"></a>

```python
min_buffer_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_update_period_seconds_input`<sup>Optional</sup> <a name="min_update_period_seconds_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput"></a>

```python
min_update_period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suggested_presentation_delay_seconds_input`<sup>Optional</sup> <a name="suggested_presentation_delay_seconds_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput"></a>

```python
suggested_presentation_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manifest_window_seconds`<sup>Required</sup> <a name="manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```python
manifest_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_buffer_time_seconds`<sup>Required</sup> <a name="min_buffer_time_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds"></a>

```python
min_buffer_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_update_period_seconds`<sup>Required</sup> <a name="min_update_period_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds"></a>

```python
min_update_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suggested_presentation_delay_seconds`<sup>Required</sup> <a name="suggested_presentation_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```python
suggested_presentation_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelOutputsDashPlaylistSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---


### MediatailorChannelOutputsHlsPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsHlsPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType">reset_ad_markup_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds">reset_manifest_window_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ad_markup_type` <a name="reset_ad_markup_type" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType"></a>

```python
def reset_ad_markup_type() -> None
```

##### `reset_manifest_window_seconds` <a name="reset_manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```python
def reset_manifest_window_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput">ad_markup_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">manifest_window_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType">ad_markup_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds">manifest_window_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_markup_type_input`<sup>Optional</sup> <a name="ad_markup_type_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput"></a>

```python
ad_markup_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manifest_window_seconds_input`<sup>Optional</sup> <a name="manifest_window_seconds_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```python
manifest_window_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ad_markup_type`<sup>Required</sup> <a name="ad_markup_type" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType"></a>

```python
ad_markup_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manifest_window_seconds`<sup>Required</sup> <a name="manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```python
manifest_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelOutputsHlsPlaylistSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---


### MediatailorChannelOutputsList <a name="MediatailorChannelOutputsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorChannelOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorChannelOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>]

---


### MediatailorChannelOutputsOutputReference <a name="MediatailorChannelOutputsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings">put_dash_playlist_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings">put_hls_playlist_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings">reset_dash_playlist_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings">reset_hls_playlist_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dash_playlist_settings` <a name="put_dash_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings"></a>

```python
def put_dash_playlist_settings(
  manifest_window_seconds: typing.Union[int, float] = None,
  min_buffer_time_seconds: typing.Union[int, float] = None,
  min_update_period_seconds: typing.Union[int, float] = None,
  suggested_presentation_delay_seconds: typing.Union[int, float] = None
) -> None
```

###### `manifest_window_seconds`<sup>Optional</sup> <a name="manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.manifestWindowSeconds"></a>

- *Type:* typing.Union[int, float]

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

###### `min_buffer_time_seconds`<sup>Optional</sup> <a name="min_buffer_time_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.minBufferTimeSeconds"></a>

- *Type:* typing.Union[int, float]

<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_buffer_time_seconds MediatailorChannel#min_buffer_time_seconds}

---

###### `min_update_period_seconds`<sup>Optional</sup> <a name="min_update_period_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.minUpdatePeriodSeconds"></a>

- *Type:* typing.Union[int, float]

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_update_period_seconds MediatailorChannel#min_update_period_seconds}

---

###### `suggested_presentation_delay_seconds`<sup>Optional</sup> <a name="suggested_presentation_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.suggestedPresentationDelaySeconds"></a>

- *Type:* typing.Union[int, float]

<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#suggested_presentation_delay_seconds MediatailorChannel#suggested_presentation_delay_seconds}

---

##### `put_hls_playlist_settings` <a name="put_hls_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings"></a>

```python
def put_hls_playlist_settings(
  ad_markup_type: typing.List[str] = None,
  manifest_window_seconds: typing.Union[int, float] = None
) -> None
```

###### `ad_markup_type`<sup>Optional</sup> <a name="ad_markup_type" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings.parameter.adMarkupType"></a>

- *Type:* typing.List[str]

<p>Determines the type of SCTE 35 tags to use in ad markup.

Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#ad_markup_type MediatailorChannel#ad_markup_type}

---

###### `manifest_window_seconds`<sup>Optional</sup> <a name="manifest_window_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings.parameter.manifestWindowSeconds"></a>

- *Type:* typing.Union[int, float]

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

##### `reset_dash_playlist_settings` <a name="reset_dash_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings"></a>

```python
def reset_dash_playlist_settings() -> None
```

##### `reset_hls_playlist_settings` <a name="reset_hls_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings"></a>

```python
def reset_hls_playlist_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings">dash_playlist_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings">hls_playlist_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput">dash_playlist_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput">hls_playlist_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput">manifest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput">source_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup">source_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash_playlist_settings`<sup>Required</sup> <a name="dash_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings"></a>

```python
dash_playlist_settings: MediatailorChannelOutputsDashPlaylistSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a>

---

##### `hls_playlist_settings`<sup>Required</sup> <a name="hls_playlist_settings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings"></a>

```python
hls_playlist_settings: MediatailorChannelOutputsHlsPlaylistSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a>

---

##### `dash_playlist_settings_input`<sup>Optional</sup> <a name="dash_playlist_settings_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput"></a>

```python
dash_playlist_settings_input: IResolvable | MediatailorChannelOutputsDashPlaylistSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---

##### `hls_playlist_settings_input`<sup>Optional</sup> <a name="hls_playlist_settings_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput"></a>

```python
hls_playlist_settings_input: IResolvable | MediatailorChannelOutputsHlsPlaylistSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---

##### `manifest_name_input`<sup>Optional</sup> <a name="manifest_name_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput"></a>

```python
manifest_name_input: str
```

- *Type:* str

---

##### `source_group_input`<sup>Optional</sup> <a name="source_group_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput"></a>

```python
source_group_input: str
```

- *Type:* str

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `source_group`<sup>Required</sup> <a name="source_group" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup"></a>

```python
source_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>

---


### MediatailorChannelTagsList <a name="MediatailorChannelTagsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>]

---


### MediatailorChannelTagsOutputReference <a name="MediatailorChannelTagsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>

---


### MediatailorChannelTimeShiftConfigurationOutputReference <a name="MediatailorChannelTimeShiftConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_channel

mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds">reset_max_time_delay_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_time_delay_seconds` <a name="reset_max_time_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds"></a>

```python
def reset_max_time_delay_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput">max_time_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds">max_time_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_time_delay_seconds_input`<sup>Optional</sup> <a name="max_time_delay_seconds_input" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput"></a>

```python
max_time_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_time_delay_seconds`<sup>Required</sup> <a name="max_time_delay_seconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds"></a>

```python
max_time_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorChannelTimeShiftConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---



