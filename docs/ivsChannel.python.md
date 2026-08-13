# `ivsChannel` Submodule <a name="`ivsChannel` Submodule" id="@cdktn/provider-awscc.ivsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsChannel <a name="IvsChannel" id="@cdktn/provider-awscc.ivsChannel.IvsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel awscc_ivs_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorized: bool | IResolvable = None,
  container_format: str = None,
  insecure_ingest: bool | IResolvable = None,
  latency_mode: str = None,
  multitrack_input_configuration: IvsChannelMultitrackInputConfiguration = None,
  name: str = None,
  preset: str = None,
  recording_configuration_arn: str = None,
  tags: IResolvable | typing.List[IvsChannelTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.authorized">authorized</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the channel is authorized. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.containerFormat">container_format</a></code> | <code>str</code> | Indicates which content-packaging format is used (MPEG-TS or fMP4). |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.insecureIngest">insecure_ingest</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the channel allows insecure ingest. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.latencyMode">latency_mode</a></code> | <code>str</code> | Channel latency mode. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.multitrackInputConfiguration">multitrack_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | Channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.preset">preset</a></code> | <code>str</code> | Optional transcode preset for the channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.recordingConfigurationArn">recording_configuration_arn</a></code> | <code>str</code> | Recording Configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]</code> | A list of key-value pairs that contain metadata for the asset model. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | Channel type, which determines the allowable resolution and bitrate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorized`<sup>Optional</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.authorized"></a>

- *Type:* bool | cdktn.IResolvable

Whether the channel is authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}

---

##### `container_format`<sup>Optional</sup> <a name="container_format" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.containerFormat"></a>

- *Type:* str

Indicates which content-packaging format is used (MPEG-TS or fMP4).

If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#container_format IvsChannel#container_format}

---

##### `insecure_ingest`<sup>Optional</sup> <a name="insecure_ingest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.insecureIngest"></a>

- *Type:* bool | cdktn.IResolvable

Whether the channel allows insecure ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#insecure_ingest IvsChannel#insecure_ingest}

---

##### `latency_mode`<sup>Optional</sup> <a name="latency_mode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.latencyMode"></a>

- *Type:* str

Channel latency mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}

---

##### `multitrack_input_configuration`<sup>Optional</sup> <a name="multitrack_input_configuration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.multitrackInputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.name"></a>

- *Type:* str

Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#name IvsChannel#name}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.preset"></a>

- *Type:* str

Optional transcode preset for the channel.

This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#preset IvsChannel#preset}

---

##### `recording_configuration_arn`<sup>Optional</sup> <a name="recording_configuration_arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.recordingConfigurationArn"></a>

- *Type:* str

Recording Configuration ARN.

A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#tags IvsChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.type"></a>

- *Type:* str

Channel type, which determines the allowable resolution and bitrate.

If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#type IvsChannel#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration">put_multitrack_input_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized">reset_authorized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat">reset_container_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest">reset_insecure_ingest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode">reset_latency_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration">reset_multitrack_input_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset">reset_preset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn">reset_recording_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_multitrack_input_configuration` <a name="put_multitrack_input_configuration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration"></a>

```python
def put_multitrack_input_configuration(
  enabled: bool | IResolvable = None,
  maximum_resolution: str = None,
  policy: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether multitrack input is enabled.

Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#enabled IvsChannel#enabled}

---

###### `maximum_resolution`<sup>Optional</sup> <a name="maximum_resolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration.parameter.maximumResolution"></a>

- *Type:* str

Maximum resolution for multitrack input. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#maximum_resolution IvsChannel#maximum_resolution}

---

###### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration.parameter.policy"></a>

- *Type:* str

Indicates whether multitrack input is allowed or required. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#policy IvsChannel#policy}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IvsChannelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]

---

##### `reset_authorized` <a name="reset_authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized"></a>

```python
def reset_authorized() -> None
```

##### `reset_container_format` <a name="reset_container_format" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat"></a>

```python
def reset_container_format() -> None
```

##### `reset_insecure_ingest` <a name="reset_insecure_ingest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest"></a>

```python
def reset_insecure_ingest() -> None
```

##### `reset_latency_mode` <a name="reset_latency_mode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode"></a>

```python
def reset_latency_mode() -> None
```

##### `reset_multitrack_input_configuration` <a name="reset_multitrack_input_configuration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration"></a>

```python
def reset_multitrack_input_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_preset` <a name="reset_preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset"></a>

```python
def reset_preset() -> None
```

##### `reset_recording_configuration_arn` <a name="reset_recording_configuration_arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn"></a>

```python
def reset_recording_configuration_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IvsChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IvsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint">ingest_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration">multitrack_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl">playback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput">authorized_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput">container_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput">insecure_ingest_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput">latency_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput">multitrack_input_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput">preset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput">recording_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized">authorized</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat">container_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest">insecure_ingest</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode">latency_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset">preset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn">recording_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_endpoint`<sup>Required</sup> <a name="ingest_endpoint" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint"></a>

```python
ingest_endpoint: str
```

- *Type:* str

---

##### `multitrack_input_configuration`<sup>Required</sup> <a name="multitrack_input_configuration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration"></a>

```python
multitrack_input_configuration: IvsChannelMultitrackInputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a>

---

##### `playback_url`<sup>Required</sup> <a name="playback_url" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl"></a>

```python
playback_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags"></a>

```python
tags: IvsChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a>

---

##### `authorized_input`<sup>Optional</sup> <a name="authorized_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput"></a>

```python
authorized_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `container_format_input`<sup>Optional</sup> <a name="container_format_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput"></a>

```python
container_format_input: str
```

- *Type:* str

---

##### `insecure_ingest_input`<sup>Optional</sup> <a name="insecure_ingest_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput"></a>

```python
insecure_ingest_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `latency_mode_input`<sup>Optional</sup> <a name="latency_mode_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput"></a>

```python
latency_mode_input: str
```

- *Type:* str

---

##### `multitrack_input_configuration_input`<sup>Optional</sup> <a name="multitrack_input_configuration_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput"></a>

```python
multitrack_input_configuration_input: IResolvable | IvsChannelMultitrackInputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preset_input`<sup>Optional</sup> <a name="preset_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput"></a>

```python
preset_input: str
```

- *Type:* str

---

##### `recording_configuration_arn_input`<sup>Optional</sup> <a name="recording_configuration_arn_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput"></a>

```python
recording_configuration_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IvsChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized"></a>

```python
authorized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `container_format`<sup>Required</sup> <a name="container_format" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat"></a>

```python
container_format: str
```

- *Type:* str

---

##### `insecure_ingest`<sup>Required</sup> <a name="insecure_ingest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest"></a>

```python
insecure_ingest: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `latency_mode`<sup>Required</sup> <a name="latency_mode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode"></a>

```python
latency_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset"></a>

```python
preset: str
```

- *Type:* str

---

##### `recording_configuration_arn`<sup>Required</sup> <a name="recording_configuration_arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn"></a>

```python
recording_configuration_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvsChannelConfig <a name="IvsChannelConfig" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorized: bool | IResolvable = None,
  container_format: str = None,
  insecure_ingest: bool | IResolvable = None,
  latency_mode: str = None,
  multitrack_input_configuration: IvsChannelMultitrackInputConfiguration = None,
  name: str = None,
  preset: str = None,
  recording_configuration_arn: str = None,
  tags: IResolvable | typing.List[IvsChannelTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized">authorized</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the channel is authorized. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat">container_format</a></code> | <code>str</code> | Indicates which content-packaging format is used (MPEG-TS or fMP4). |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest">insecure_ingest</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the channel allows insecure ingest. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode">latency_mode</a></code> | <code>str</code> | Channel latency mode. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration">multitrack_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name">name</a></code> | <code>str</code> | Channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset">preset</a></code> | <code>str</code> | Optional transcode preset for the channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn">recording_configuration_arn</a></code> | <code>str</code> | Recording Configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]</code> | A list of key-value pairs that contain metadata for the asset model. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type">type</a></code> | <code>str</code> | Channel type, which determines the allowable resolution and bitrate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorized`<sup>Optional</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized"></a>

```python
authorized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the channel is authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}

---

##### `container_format`<sup>Optional</sup> <a name="container_format" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat"></a>

```python
container_format: str
```

- *Type:* str

Indicates which content-packaging format is used (MPEG-TS or fMP4).

If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#container_format IvsChannel#container_format}

---

##### `insecure_ingest`<sup>Optional</sup> <a name="insecure_ingest" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest"></a>

```python
insecure_ingest: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the channel allows insecure ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#insecure_ingest IvsChannel#insecure_ingest}

---

##### `latency_mode`<sup>Optional</sup> <a name="latency_mode" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode"></a>

```python
latency_mode: str
```

- *Type:* str

Channel latency mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}

---

##### `multitrack_input_configuration`<sup>Optional</sup> <a name="multitrack_input_configuration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration"></a>

```python
multitrack_input_configuration: IvsChannelMultitrackInputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#name IvsChannel#name}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset"></a>

```python
preset: str
```

- *Type:* str

Optional transcode preset for the channel.

This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#preset IvsChannel#preset}

---

##### `recording_configuration_arn`<sup>Optional</sup> <a name="recording_configuration_arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn"></a>

```python
recording_configuration_arn: str
```

- *Type:* str

Recording Configuration ARN.

A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IvsChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#tags IvsChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Channel type, which determines the allowable resolution and bitrate.

If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#type IvsChannel#type}

---

### IvsChannelMultitrackInputConfiguration <a name="IvsChannelMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannelMultitrackInputConfiguration(
  enabled: bool | IResolvable = None,
  maximum_resolution: str = None,
  policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether multitrack input is enabled. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution">maximum_resolution</a></code> | <code>str</code> | Maximum resolution for multitrack input. Required if enabled is true. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy">policy</a></code> | <code>str</code> | Indicates whether multitrack input is allowed or required. Required if enabled is true. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether multitrack input is enabled.

Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#enabled IvsChannel#enabled}

---

##### `maximum_resolution`<sup>Optional</sup> <a name="maximum_resolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution"></a>

```python
maximum_resolution: str
```

- *Type:* str

Maximum resolution for multitrack input. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#maximum_resolution IvsChannel#maximum_resolution}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy"></a>

```python
policy: str
```

- *Type:* str

Indicates whether multitrack input is allowed or required. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#policy IvsChannel#policy}

---

### IvsChannelTags <a name="IvsChannelTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#key IvsChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#value IvsChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsChannelMultitrackInputConfigurationOutputReference <a name="IvsChannelMultitrackInputConfigurationOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution">reset_maximum_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_maximum_resolution` <a name="reset_maximum_resolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution"></a>

```python
def reset_maximum_resolution() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput">maximum_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution">maximum_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_resolution_input`<sup>Optional</sup> <a name="maximum_resolution_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput"></a>

```python
maximum_resolution_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_resolution`<sup>Required</sup> <a name="maximum_resolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution"></a>

```python
maximum_resolution: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsChannelMultitrackInputConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---


### IvsChannelTagsList <a name="IvsChannelTagsList" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IvsChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IvsChannelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>]

---


### IvsChannelTagsOutputReference <a name="IvsChannelTagsOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_channel

ivsChannel.IvsChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsChannelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>

---



