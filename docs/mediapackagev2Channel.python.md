# `mediapackagev2Channel` Submodule <a name="`mediapackagev2Channel` Submodule" id="@cdktn/provider-awscc.mediapackagev2Channel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2Channel <a name="Mediapackagev2Channel" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel awscc_mediapackagev2_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2Channel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_group_name: str,
  channel_name: str,
  description: str = None,
  input_switch_configuration: Mediapackagev2ChannelInputSwitchConfiguration = None,
  input_type: str = None,
  output_header_configuration: Mediapackagev2ChannelOutputHeaderConfiguration = None,
  output_locking_mode: str = None,
  tags: IResolvable | typing.List[Mediapackagev2ChannelTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelGroupName">channel_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.description">description</a></code> | <code>str</code> | <p>Enter any descriptive text that helps you to identify the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputSwitchConfiguration">input_switch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputType">input_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputHeaderConfiguration">output_header_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputLockingMode">output_locking_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_group_name`<sup>Required</sup> <a name="channel_group_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}.

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.description"></a>

- *Type:* str

<p>Enter any descriptive text that helps you to identify the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#description Mediapackagev2Channel#description}

---

##### `input_switch_configuration`<sup>Optional</sup> <a name="input_switch_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputSwitchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#input_switch_configuration Mediapackagev2Channel#input_switch_configuration}

---

##### `input_type`<sup>Optional</sup> <a name="input_type" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}.

---

##### `output_header_configuration`<sup>Optional</sup> <a name="output_header_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputHeaderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#output_header_configuration Mediapackagev2Channel#output_header_configuration}

---

##### `output_locking_mode`<sup>Optional</sup> <a name="output_locking_mode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputLockingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration">put_input_switch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration">put_output_header_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration">reset_input_switch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType">reset_input_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration">reset_output_header_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode">reset_output_locking_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_switch_configuration` <a name="put_input_switch_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration"></a>

```python
def put_input_switch_configuration(
  mqcs_input_switching: bool | IResolvable = None,
  preferred_input: typing.Union[int, float] = None
) -> None
```

###### `mqcs_input_switching`<sup>Optional</sup> <a name="mqcs_input_switching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration.parameter.mqcsInputSwitching"></a>

- *Type:* bool | cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS.

Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#mqcs_input_switching Mediapackagev2Channel#mqcs_input_switching}

---

###### `preferred_input`<sup>Optional</sup> <a name="preferred_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration.parameter.preferredInput"></a>

- *Type:* typing.Union[int, float]

<p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores.

Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#preferred_input Mediapackagev2Channel#preferred_input}

---

##### `put_output_header_configuration` <a name="put_output_header_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration"></a>

```python
def put_output_header_configuration(
  publish_mqcs: bool | IResolvable = None
) -> None
```

###### `publish_mqcs`<sup>Optional</sup> <a name="publish_mqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration.parameter.publishMqcs"></a>

- *Type:* bool | cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN.

This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#publish_mqcs Mediapackagev2Channel#publish_mqcs}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Mediapackagev2ChannelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_switch_configuration` <a name="reset_input_switch_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration"></a>

```python
def reset_input_switch_configuration() -> None
```

##### `reset_input_type` <a name="reset_input_type" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType"></a>

```python
def reset_input_type() -> None
```

##### `reset_output_header_configuration` <a name="reset_output_header_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration"></a>

```python
def reset_output_header_configuration() -> None
```

##### `reset_output_locking_mode` <a name="reset_output_locking_mode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode"></a>

```python
def reset_output_locking_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2Channel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2Channel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2Channel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2Channel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Mediapackagev2Channel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Mediapackagev2Channel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2Channel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints">ingest_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls">ingest_endpoint_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration">input_switch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration">output_header_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput">channel_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput">input_switch_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput">input_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput">output_header_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput">output_locking_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName">channel_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType">input_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode">output_locking_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_endpoints`<sup>Required</sup> <a name="ingest_endpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints"></a>

```python
ingest_endpoints: Mediapackagev2ChannelIngestEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a>

---

##### `ingest_endpoint_urls`<sup>Required</sup> <a name="ingest_endpoint_urls" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls"></a>

```python
ingest_endpoint_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_switch_configuration`<sup>Required</sup> <a name="input_switch_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration"></a>

```python
input_switch_configuration: Mediapackagev2ChannelInputSwitchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `output_header_configuration`<sup>Required</sup> <a name="output_header_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration"></a>

```python
output_header_configuration: Mediapackagev2ChannelOutputHeaderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags"></a>

```python
tags: Mediapackagev2ChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a>

---

##### `channel_group_name_input`<sup>Optional</sup> <a name="channel_group_name_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput"></a>

```python
channel_group_name_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_switch_configuration_input`<sup>Optional</sup> <a name="input_switch_configuration_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput"></a>

```python
input_switch_configuration_input: IResolvable | Mediapackagev2ChannelInputSwitchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---

##### `input_type_input`<sup>Optional</sup> <a name="input_type_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput"></a>

```python
input_type_input: str
```

- *Type:* str

---

##### `output_header_configuration_input`<sup>Optional</sup> <a name="output_header_configuration_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput"></a>

```python
output_header_configuration_input: IResolvable | Mediapackagev2ChannelOutputHeaderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---

##### `output_locking_mode_input`<sup>Optional</sup> <a name="output_locking_mode_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput"></a>

```python
output_locking_mode_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Mediapackagev2ChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]

---

##### `channel_group_name`<sup>Required</sup> <a name="channel_group_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName"></a>

```python
channel_group_name: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_type`<sup>Required</sup> <a name="input_type" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

---

##### `output_locking_mode`<sup>Required</sup> <a name="output_locking_mode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode"></a>

```python
output_locking_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2ChannelConfig <a name="Mediapackagev2ChannelConfig" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_group_name: str,
  channel_name: str,
  description: str = None,
  input_switch_configuration: Mediapackagev2ChannelInputSwitchConfiguration = None,
  input_type: str = None,
  output_header_configuration: Mediapackagev2ChannelOutputHeaderConfiguration = None,
  output_locking_mode: str = None,
  tags: IResolvable | typing.List[Mediapackagev2ChannelTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName">channel_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description">description</a></code> | <code>str</code> | <p>Enter any descriptive text that helps you to identify the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration">input_switch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType">input_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration">output_header_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode">output_locking_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_group_name`<sup>Required</sup> <a name="channel_group_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName"></a>

```python
channel_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}.

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

<p>Enter any descriptive text that helps you to identify the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#description Mediapackagev2Channel#description}

---

##### `input_switch_configuration`<sup>Optional</sup> <a name="input_switch_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration"></a>

```python
input_switch_configuration: Mediapackagev2ChannelInputSwitchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#input_switch_configuration Mediapackagev2Channel#input_switch_configuration}

---

##### `input_type`<sup>Optional</sup> <a name="input_type" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}.

---

##### `output_header_configuration`<sup>Optional</sup> <a name="output_header_configuration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration"></a>

```python
output_header_configuration: Mediapackagev2ChannelOutputHeaderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#output_header_configuration Mediapackagev2Channel#output_header_configuration}

---

##### `output_locking_mode`<sup>Optional</sup> <a name="output_locking_mode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode"></a>

```python
output_locking_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Mediapackagev2ChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}.

---

### Mediapackagev2ChannelIngestEndpoints <a name="Mediapackagev2ChannelIngestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints()
```


### Mediapackagev2ChannelInputSwitchConfiguration <a name="Mediapackagev2ChannelInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration(
  mqcs_input_switching: bool | IResolvable = None,
  preferred_input: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching">mqcs_input_switching</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput">preferred_input</a></code> | <code>typing.Union[int, float]</code> | <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. |

---

##### `mqcs_input_switching`<sup>Optional</sup> <a name="mqcs_input_switching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching"></a>

```python
mqcs_input_switching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS.

Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#mqcs_input_switching Mediapackagev2Channel#mqcs_input_switching}

---

##### `preferred_input`<sup>Optional</sup> <a name="preferred_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput"></a>

```python
preferred_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

<p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores.

Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#preferred_input Mediapackagev2Channel#preferred_input}

---

### Mediapackagev2ChannelOutputHeaderConfiguration <a name="Mediapackagev2ChannelOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration(
  publish_mqcs: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs">publish_mqcs</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. |

---

##### `publish_mqcs`<sup>Optional</sup> <a name="publish_mqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs"></a>

```python
publish_mqcs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN.

This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#publish_mqcs Mediapackagev2Channel#publish_mqcs}

---

### Mediapackagev2ChannelTags <a name="Mediapackagev2ChannelTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2ChannelIngestEndpointsList <a name="Mediapackagev2ChannelIngestEndpointsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Mediapackagev2ChannelIngestEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Mediapackagev2ChannelIngestEndpointsOutputReference <a name="Mediapackagev2ChannelIngestEndpointsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: Mediapackagev2ChannelIngestEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a>

---


### Mediapackagev2ChannelInputSwitchConfigurationOutputReference <a name="Mediapackagev2ChannelInputSwitchConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching">reset_mqcs_input_switching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput">reset_preferred_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mqcs_input_switching` <a name="reset_mqcs_input_switching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching"></a>

```python
def reset_mqcs_input_switching() -> None
```

##### `reset_preferred_input` <a name="reset_preferred_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput"></a>

```python
def reset_preferred_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput">mqcs_input_switching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput">preferred_input_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching">mqcs_input_switching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput">preferred_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mqcs_input_switching_input`<sup>Optional</sup> <a name="mqcs_input_switching_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput"></a>

```python
mqcs_input_switching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preferred_input_input`<sup>Optional</sup> <a name="preferred_input_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput"></a>

```python
preferred_input_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mqcs_input_switching`<sup>Required</sup> <a name="mqcs_input_switching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching"></a>

```python
mqcs_input_switching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preferred_input`<sup>Required</sup> <a name="preferred_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput"></a>

```python
preferred_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Mediapackagev2ChannelInputSwitchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---


### Mediapackagev2ChannelOutputHeaderConfigurationOutputReference <a name="Mediapackagev2ChannelOutputHeaderConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs">reset_publish_mqcs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_publish_mqcs` <a name="reset_publish_mqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs"></a>

```python
def reset_publish_mqcs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput">publish_mqcs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs">publish_mqcs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publish_mqcs_input`<sup>Optional</sup> <a name="publish_mqcs_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput"></a>

```python
publish_mqcs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `publish_mqcs`<sup>Required</sup> <a name="publish_mqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs"></a>

```python
publish_mqcs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Mediapackagev2ChannelOutputHeaderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---


### Mediapackagev2ChannelTagsList <a name="Mediapackagev2ChannelTagsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Mediapackagev2ChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Mediapackagev2ChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>]

---


### Mediapackagev2ChannelTagsOutputReference <a name="Mediapackagev2ChannelTagsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_channel

mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Mediapackagev2ChannelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>

---



