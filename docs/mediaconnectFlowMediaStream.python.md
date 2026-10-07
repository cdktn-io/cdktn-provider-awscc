# `mediaconnectFlowMediaStream` Submodule <a name="`mediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowMediaStream <a name="MediaconnectFlowMediaStream" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flow_arn: str,
  media_stream_id: typing.Union[int, float],
  media_stream_name: str,
  media_stream_type: str,
  attributes: MediaconnectFlowMediaStreamAttributes = None,
  clock_rate: typing.Union[int, float] = None,
  description: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowMediaStreamTags] = None,
  video_format: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.flowArn">flow_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the flow that the media stream belongs to. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamId">media_stream_id</a></code> | <code>typing.Union[int, float]</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamName">media_stream_name</a></code> | <code>str</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamType">media_stream_type</a></code> | <code>str</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.clockRate">clock_rate</a></code> | <code>typing.Union[int, float]</code> | The sample rate (in Hz) for the stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.description">description</a></code> | <code>str</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]</code> | The key-value pairs that can be used to tag and organize the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.videoFormat">video_format</a></code> | <code>str</code> | The resolution of the video. Required for a video media stream and rejected for other media stream types. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.flowArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the flow that the media stream belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#flow_arn MediaconnectFlowMediaStream#flow_arn}

---

##### `media_stream_id`<sup>Required</sup> <a name="media_stream_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamId"></a>

- *Type:* typing.Union[int, float]

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id MediaconnectFlowMediaStream#media_stream_id}

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamName"></a>

- *Type:* str

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name MediaconnectFlowMediaStream#media_stream_name}

---

##### `media_stream_type`<sup>Required</sup> <a name="media_stream_type" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamType"></a>

- *Type:* str

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type MediaconnectFlowMediaStream#media_stream_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#attributes MediaconnectFlowMediaStream#attributes}

---

##### `clock_rate`<sup>Optional</sup> <a name="clock_rate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.clockRate"></a>

- *Type:* typing.Union[int, float]

The sample rate (in Hz) for the stream.

If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#clock_rate MediaconnectFlowMediaStream#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.description"></a>

- *Type:* str

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#description MediaconnectFlowMediaStream#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]

The key-value pairs that can be used to tag and organize the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#tags MediaconnectFlowMediaStream#tags}

---

##### `video_format`<sup>Optional</sup> <a name="video_format" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.videoFormat"></a>

- *Type:* str

The resolution of the video. Required for a video media stream and rejected for other media stream types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#video_format MediaconnectFlowMediaStream#video_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate">reset_clock_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat">reset_video_format</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes"></a>

```python
def put_attributes(
  fmtp: MediaconnectFlowMediaStreamAttributesFmtp = None,
  lang: str = None
) -> None
```

###### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes.parameter.fmtp"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#fmtp MediaconnectFlowMediaStream#fmtp}

---

###### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes.parameter.lang"></a>

- *Type:* str

The audio language, in a format that is recognized by the receiver.

Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#lang MediaconnectFlowMediaStream#lang}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediaconnectFlowMediaStreamTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_clock_rate` <a name="reset_clock_rate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate"></a>

```python
def reset_clock_rate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_video_format` <a name="reset_video_format" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat"></a>

```python
def reset_video_format() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectFlowMediaStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt">fmt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput">clock_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput">media_stream_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput">media_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput">media_stream_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput">video_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate">clock_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId">media_stream_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType">media_stream_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat">video_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes"></a>

```python
attributes: MediaconnectFlowMediaStreamAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt"></a>

```python
fmt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags"></a>

```python
tags: MediaconnectFlowMediaStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput"></a>

```python
attributes_input: IResolvable | MediaconnectFlowMediaStreamAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `clock_rate_input`<sup>Optional</sup> <a name="clock_rate_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput"></a>

```python
clock_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `media_stream_id_input`<sup>Optional</sup> <a name="media_stream_id_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput"></a>

```python
media_stream_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_name_input`<sup>Optional</sup> <a name="media_stream_name_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput"></a>

```python
media_stream_name_input: str
```

- *Type:* str

---

##### `media_stream_type_input`<sup>Optional</sup> <a name="media_stream_type_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput"></a>

```python
media_stream_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediaconnectFlowMediaStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]

---

##### `video_format_input`<sup>Optional</sup> <a name="video_format_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput"></a>

```python
video_format_input: str
```

- *Type:* str

---

##### `clock_rate`<sup>Required</sup> <a name="clock_rate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate"></a>

```python
clock_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `media_stream_id`<sup>Required</sup> <a name="media_stream_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId"></a>

```python
media_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

---

##### `media_stream_type`<sup>Required</sup> <a name="media_stream_type" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType"></a>

```python
media_stream_type: str
```

- *Type:* str

---

##### `video_format`<sup>Required</sup> <a name="video_format" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat"></a>

```python
video_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowMediaStreamAttributes <a name="MediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes(
  fmtp: MediaconnectFlowMediaStreamAttributesFmtp = None,
  lang: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang">lang</a></code> | <code>str</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp"></a>

```python
fmtp: MediaconnectFlowMediaStreamAttributesFmtp
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#fmtp MediaconnectFlowMediaStream#fmtp}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang"></a>

```python
lang: str
```

- *Type:* str

The audio language, in a format that is recognized by the receiver.

Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#lang MediaconnectFlowMediaStream#lang}

---

### MediaconnectFlowMediaStreamAttributesFmtp <a name="MediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp(
  channel_order: str = None,
  colorimetry: str = None,
  exact_framerate: str = None,
  par: str = None,
  range: str = None,
  scan_mode: str = None,
  tcs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder">channel_order</a></code> | <code>str</code> | The format of the audio channel. Can only be specified for an audio media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry">colorimetry</a></code> | <code>str</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate">exact_framerate</a></code> | <code>str</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par">par</a></code> | <code>str</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range">range</a></code> | <code>str</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode">scan_mode</a></code> | <code>str</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs">tcs</a></code> | <code>str</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `channel_order`<sup>Optional</sup> <a name="channel_order" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder"></a>

```python
channel_order: str
```

- *Type:* str

The format of the audio channel. Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#channel_order MediaconnectFlowMediaStream#channel_order}

---

##### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry"></a>

```python
colorimetry: str
```

- *Type:* str

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#colorimetry MediaconnectFlowMediaStream#colorimetry}

---

##### `exact_framerate`<sup>Optional</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate"></a>

```python
exact_framerate: str
```

- *Type:* str

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#exact_framerate MediaconnectFlowMediaStream#exact_framerate}

---

##### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par"></a>

```python
par: str
```

- *Type:* str

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#par MediaconnectFlowMediaStream#par}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range"></a>

```python
range: str
```

- *Type:* str

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#range MediaconnectFlowMediaStream#range}

---

##### `scan_mode`<sup>Optional</sup> <a name="scan_mode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#scan_mode MediaconnectFlowMediaStream#scan_mode}

---

##### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs"></a>

```python
tcs: str
```

- *Type:* str

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#tcs MediaconnectFlowMediaStream#tcs}

---

### MediaconnectFlowMediaStreamConfig <a name="MediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flow_arn: str,
  media_stream_id: typing.Union[int, float],
  media_stream_name: str,
  media_stream_type: str,
  attributes: MediaconnectFlowMediaStreamAttributes = None,
  clock_rate: typing.Union[int, float] = None,
  description: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowMediaStreamTags] = None,
  video_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn">flow_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the flow that the media stream belongs to. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId">media_stream_id</a></code> | <code>typing.Union[int, float]</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType">media_stream_type</a></code> | <code>str</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate">clock_rate</a></code> | <code>typing.Union[int, float]</code> | The sample rate (in Hz) for the stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description">description</a></code> | <code>str</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]</code> | The key-value pairs that can be used to tag and organize the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat">video_format</a></code> | <code>str</code> | The resolution of the video. Required for a video media stream and rejected for other media stream types. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the flow that the media stream belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#flow_arn MediaconnectFlowMediaStream#flow_arn}

---

##### `media_stream_id`<sup>Required</sup> <a name="media_stream_id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId"></a>

```python
media_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id MediaconnectFlowMediaStream#media_stream_id}

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name MediaconnectFlowMediaStream#media_stream_name}

---

##### `media_stream_type`<sup>Required</sup> <a name="media_stream_type" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType"></a>

```python
media_stream_type: str
```

- *Type:* str

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type MediaconnectFlowMediaStream#media_stream_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes"></a>

```python
attributes: MediaconnectFlowMediaStreamAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#attributes MediaconnectFlowMediaStream#attributes}

---

##### `clock_rate`<sup>Optional</sup> <a name="clock_rate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate"></a>

```python
clock_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sample rate (in Hz) for the stream.

If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#clock_rate MediaconnectFlowMediaStream#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#description MediaconnectFlowMediaStream#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediaconnectFlowMediaStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]

The key-value pairs that can be used to tag and organize the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#tags MediaconnectFlowMediaStream#tags}

---

##### `video_format`<sup>Optional</sup> <a name="video_format" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat"></a>

```python
video_format: str
```

- *Type:* str

The resolution of the video. Required for a video media stream and rejected for other media stream types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#video_format MediaconnectFlowMediaStream#video_format}

---

### MediaconnectFlowMediaStreamTags <a name="MediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#key MediaconnectFlowMediaStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#value MediaconnectFlowMediaStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder">reset_channel_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry">reset_colorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate">reset_exact_framerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar">reset_par</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode">reset_scan_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs">reset_tcs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_order` <a name="reset_channel_order" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder"></a>

```python
def reset_channel_order() -> None
```

##### `reset_colorimetry` <a name="reset_colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry"></a>

```python
def reset_colorimetry() -> None
```

##### `reset_exact_framerate` <a name="reset_exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate"></a>

```python
def reset_exact_framerate() -> None
```

##### `reset_par` <a name="reset_par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar"></a>

```python
def reset_par() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_scan_mode` <a name="reset_scan_mode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode"></a>

```python
def reset_scan_mode() -> None
```

##### `reset_tcs` <a name="reset_tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs"></a>

```python
def reset_tcs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput">channel_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput">colorimetry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput">exact_framerate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput">par_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput">scan_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput">tcs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">channel_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">exact_framerate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">par</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">scan_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_order_input`<sup>Optional</sup> <a name="channel_order_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput"></a>

```python
channel_order_input: str
```

- *Type:* str

---

##### `colorimetry_input`<sup>Optional</sup> <a name="colorimetry_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput"></a>

```python
colorimetry_input: str
```

- *Type:* str

---

##### `exact_framerate_input`<sup>Optional</sup> <a name="exact_framerate_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```python
exact_framerate_input: str
```

- *Type:* str

---

##### `par_input`<sup>Optional</sup> <a name="par_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput"></a>

```python
par_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `scan_mode_input`<sup>Optional</sup> <a name="scan_mode_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput"></a>

```python
scan_mode_input: str
```

- *Type:* str

---

##### `tcs_input`<sup>Optional</sup> <a name="tcs_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput"></a>

```python
tcs_input: str
```

- *Type:* str

---

##### `channel_order`<sup>Required</sup> <a name="channel_order" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```python
channel_order: str
```

- *Type:* str

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```python
colorimetry: str
```

- *Type:* str

---

##### `exact_framerate`<sup>Required</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```python
exact_framerate: str
```

- *Type:* str

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```python
par: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `scan_mode`<sup>Required</sup> <a name="scan_mode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```python
tcs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMediaStreamAttributesFmtp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamAttributesOutputReference <a name="MediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp">put_fmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp">reset_fmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang">reset_lang</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fmtp` <a name="put_fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp"></a>

```python
def put_fmtp(
  channel_order: str = None,
  colorimetry: str = None,
  exact_framerate: str = None,
  par: str = None,
  range: str = None,
  scan_mode: str = None,
  tcs: str = None
) -> None
```

###### `channel_order`<sup>Optional</sup> <a name="channel_order" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.channelOrder"></a>

- *Type:* str

The format of the audio channel. Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#channel_order MediaconnectFlowMediaStream#channel_order}

---

###### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.colorimetry"></a>

- *Type:* str

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#colorimetry MediaconnectFlowMediaStream#colorimetry}

---

###### `exact_framerate`<sup>Optional</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.exactFramerate"></a>

- *Type:* str

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#exact_framerate MediaconnectFlowMediaStream#exact_framerate}

---

###### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.par"></a>

- *Type:* str

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#par MediaconnectFlowMediaStream#par}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.range"></a>

- *Type:* str

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#range MediaconnectFlowMediaStream#range}

---

###### `scan_mode`<sup>Optional</sup> <a name="scan_mode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.scanMode"></a>

- *Type:* str

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#scan_mode MediaconnectFlowMediaStream#scan_mode}

---

###### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.tcs"></a>

- *Type:* str

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#tcs MediaconnectFlowMediaStream#tcs}

---

##### `reset_fmtp` <a name="reset_fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp"></a>

```python
def reset_fmtp() -> None
```

##### `reset_lang` <a name="reset_lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang"></a>

```python
def reset_lang() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput">fmtp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput">lang_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang">lang</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```python
fmtp: MediaconnectFlowMediaStreamAttributesFmtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `fmtp_input`<sup>Optional</sup> <a name="fmtp_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput"></a>

```python
fmtp_input: IResolvable | MediaconnectFlowMediaStreamAttributesFmtp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `lang_input`<sup>Optional</sup> <a name="lang_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput"></a>

```python
lang_input: str
```

- *Type:* str

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```python
lang: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMediaStreamAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---


### MediaconnectFlowMediaStreamTagsList <a name="MediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowMediaStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowMediaStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>]

---


### MediaconnectFlowMediaStreamTagsOutputReference <a name="MediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_media_stream

mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowMediaStreamTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>

---



