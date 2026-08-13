# `ivsStage` Submodule <a name="`ivsStage` Submodule" id="@cdktn/provider-awscc.ivsStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsStage <a name="IvsStage" id="@cdktn/provider-awscc.ivsStage.IvsStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage awscc_ivs_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_participant_recording_configuration: IvsStageAutoParticipantRecordingConfiguration = None,
  name: str = None,
  tags: IResolvable | typing.List[IvsStageTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.autoParticipantRecordingConfiguration">auto_participant_recording_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | Configuration object for individual participant recording, to attach to the new stage. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.name">name</a></code> | <code>str</code> | Stage name. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_participant_recording_configuration`<sup>Optional</sup> <a name="auto_participant_recording_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.autoParticipantRecordingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

Configuration object for individual participant recording, to attach to the new stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#auto_participant_recording_configuration IvsStage#auto_participant_recording_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.name"></a>

- *Type:* str

Stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#name IvsStage#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#tags IvsStage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration">put_auto_participant_recording_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetAutoParticipantRecordingConfiguration">reset_auto_participant_recording_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsStage.IvsStage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsStage.IvsStage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ivsStage.IvsStage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ivsStage.IvsStage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ivsStage.IvsStage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ivsStage.IvsStage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_participant_recording_configuration` <a name="put_auto_participant_recording_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration"></a>

```python
def put_auto_participant_recording_configuration(
  hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfiguration = None,
  media_types: typing.List[str] = None,
  recording_reconnect_window_seconds: typing.Union[int, float] = None,
  storage_configuration_arn: str = None,
  thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration = None
) -> None
```

###### `hls_configuration`<sup>Optional</sup> <a name="hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.hlsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

HLS configuration object for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#hls_configuration IvsStage#hls_configuration}

---

###### `media_types`<sup>Optional</sup> <a name="media_types" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.mediaTypes"></a>

- *Type:* typing.List[str]

Types of media to be recorded. Default: AUDIO_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#media_types IvsStage#media_types}

---

###### `recording_reconnect_window_seconds`<sup>Optional</sup> <a name="recording_reconnect_window_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.recordingReconnectWindowSeconds"></a>

- *Type:* typing.Union[int, float]

If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together.

The default value is 0, which disables merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#recording_reconnect_window_seconds IvsStage#recording_reconnect_window_seconds}

---

###### `storage_configuration_arn`<sup>Optional</sup> <a name="storage_configuration_arn" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.storageConfigurationArn"></a>

- *Type:* str

ARN of the StorageConfiguration resource to use for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#storage_configuration_arn IvsStage#storage_configuration_arn}

---

###### `thumbnail_configuration`<sup>Optional</sup> <a name="thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.thumbnailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#thumbnail_configuration IvsStage#thumbnail_configuration}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ivsStage.IvsStage.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IvsStageTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]

---

##### `reset_auto_participant_recording_configuration` <a name="reset_auto_participant_recording_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetAutoParticipantRecordingConfiguration"></a>

```python
def reset_auto_participant_recording_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IvsStage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IvsStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IvsStage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IvsStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.activeSessionId">active_session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfiguration">auto_participant_recording_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList">IvsStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfigurationInput">auto_participant_recording_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `active_session_id`<sup>Required</sup> <a name="active_session_id" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.activeSessionId"></a>

```python
active_session_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_participant_recording_configuration`<sup>Required</sup> <a name="auto_participant_recording_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfiguration"></a>

```python
auto_participant_recording_configuration: IvsStageAutoParticipantRecordingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tags"></a>

```python
tags: IvsStageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList">IvsStageTagsList</a>

---

##### `auto_participant_recording_configuration_input`<sup>Optional</sup> <a name="auto_participant_recording_configuration_input" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfigurationInput"></a>

```python
auto_participant_recording_configuration_input: IResolvable | IvsStageAutoParticipantRecordingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IvsStageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvsStageAutoParticipantRecordingConfiguration <a name="IvsStageAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfiguration(
  hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfiguration = None,
  media_types: typing.List[str] = None,
  recording_reconnect_window_seconds: typing.Union[int, float] = None,
  storage_configuration_arn: str = None,
  thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.hlsConfiguration">hls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | HLS configuration object for individual participant recording. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.mediaTypes">media_types</a></code> | <code>typing.List[str]</code> | Types of media to be recorded. Default: AUDIO_VIDEO. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.recordingReconnectWindowSeconds">recording_reconnect_window_seconds</a></code> | <code>typing.Union[int, float]</code> | If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.storageConfigurationArn">storage_configuration_arn</a></code> | <code>str</code> | ARN of the StorageConfiguration resource to use for individual participant recording. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.thumbnailConfiguration">thumbnail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session. |

---

##### `hls_configuration`<sup>Optional</sup> <a name="hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.hlsConfiguration"></a>

```python
hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

HLS configuration object for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#hls_configuration IvsStage#hls_configuration}

---

##### `media_types`<sup>Optional</sup> <a name="media_types" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.mediaTypes"></a>

```python
media_types: typing.List[str]
```

- *Type:* typing.List[str]

Types of media to be recorded. Default: AUDIO_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#media_types IvsStage#media_types}

---

##### `recording_reconnect_window_seconds`<sup>Optional</sup> <a name="recording_reconnect_window_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```python
recording_reconnect_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together.

The default value is 0, which disables merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#recording_reconnect_window_seconds IvsStage#recording_reconnect_window_seconds}

---

##### `storage_configuration_arn`<sup>Optional</sup> <a name="storage_configuration_arn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.storageConfigurationArn"></a>

```python
storage_configuration_arn: str
```

- *Type:* str

ARN of the StorageConfiguration resource to use for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#storage_configuration_arn IvsStage#storage_configuration_arn}

---

##### `thumbnail_configuration`<sup>Optional</sup> <a name="thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.thumbnailConfiguration"></a>

```python
thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#thumbnail_configuration IvsStage#thumbnail_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationHlsConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration(
  participant_recording_hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.property.participantRecordingHlsConfiguration">participant_recording_hls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | An object representing a configuration of participant HLS recordings for individual participant recording. |

---

##### `participant_recording_hls_configuration`<sup>Optional</sup> <a name="participant_recording_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.property.participantRecordingHlsConfiguration"></a>

```python
participant_recording_hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

An object representing a configuration of participant HLS recordings for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#participant_recording_hls_configuration IvsStage#participant_recording_hls_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration(
  target_segment_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.property.targetSegmentDurationSeconds">target_segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Defines the target duration for recorded segments generated when recording a stage participant. |

---

##### `target_segment_duration_seconds`<sup>Optional</sup> <a name="target_segment_duration_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.property.targetSegmentDurationSeconds"></a>

```python
target_segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the target duration for recorded segments generated when recording a stage participant.

Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#target_segment_duration_seconds IvsStage#target_segment_duration_seconds}

---

### IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration(
  participant_thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.property.participantThumbnailConfiguration">participant_thumbnail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | An object representing a configuration of thumbnails for recorded video from an individual participant. |

---

##### `participant_thumbnail_configuration`<sup>Optional</sup> <a name="participant_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.property.participantThumbnailConfiguration"></a>

```python
participant_thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

An object representing a configuration of thumbnails for recorded video from an individual participant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#participant_thumbnail_configuration IvsStage#participant_thumbnail_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration(
  recording_mode: str = None,
  storage: typing.List[str] = None,
  target_interval_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.recordingMode">recording_mode</a></code> | <code>str</code> | Thumbnail recording mode. Default: DISABLED. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.storage">storage</a></code> | <code>typing.List[str]</code> | Indicates the format in which thumbnails are recorded. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.targetIntervalSeconds">target_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60. |

---

##### `recording_mode`<sup>Optional</sup> <a name="recording_mode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.recordingMode"></a>

```python
recording_mode: str
```

- *Type:* str

Thumbnail recording mode. Default: DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#recording_mode IvsStage#recording_mode}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.storage"></a>

```python
storage: typing.List[str]
```

- *Type:* typing.List[str]

Indicates the format in which thumbnails are recorded.

SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#storage IvsStage#storage}

---

##### `target_interval_seconds`<sup>Optional</sup> <a name="target_interval_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.targetIntervalSeconds"></a>

```python
target_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#target_interval_seconds IvsStage#target_interval_seconds}

---

### IvsStageConfig <a name="IvsStageConfig" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_participant_recording_configuration: IvsStageAutoParticipantRecordingConfiguration = None,
  name: str = None,
  tags: IResolvable | typing.List[IvsStageTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.autoParticipantRecordingConfiguration">auto_participant_recording_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | Configuration object for individual participant recording, to attach to the new stage. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.name">name</a></code> | <code>str</code> | Stage name. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_participant_recording_configuration`<sup>Optional</sup> <a name="auto_participant_recording_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.autoParticipantRecordingConfiguration"></a>

```python
auto_participant_recording_configuration: IvsStageAutoParticipantRecordingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

Configuration object for individual participant recording, to attach to the new stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#auto_participant_recording_configuration IvsStage#auto_participant_recording_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#name IvsStage#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IvsStageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#tags IvsStage#tags}

---

### IvsStageTags <a name="IvsStageTags" id="@cdktn/provider-awscc.ivsStage.IvsStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#key IvsStage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#value IvsStage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration">put_participant_recording_hls_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resetParticipantRecordingHlsConfiguration">reset_participant_recording_hls_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_participant_recording_hls_configuration` <a name="put_participant_recording_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration"></a>

```python
def put_participant_recording_hls_configuration(
  target_segment_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `target_segment_duration_seconds`<sup>Optional</sup> <a name="target_segment_duration_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration.parameter.targetSegmentDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Defines the target duration for recorded segments generated when recording a stage participant.

Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#target_segment_duration_seconds IvsStage#target_segment_duration_seconds}

---

##### `reset_participant_recording_hls_configuration` <a name="reset_participant_recording_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resetParticipantRecordingHlsConfiguration"></a>

```python
def reset_participant_recording_hls_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration">participant_recording_hls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfigurationInput">participant_recording_hls_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `participant_recording_hls_configuration`<sup>Required</sup> <a name="participant_recording_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration"></a>

```python
participant_recording_hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a>

---

##### `participant_recording_hls_configuration_input`<sup>Optional</sup> <a name="participant_recording_hls_configuration_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfigurationInput"></a>

```python
participant_recording_hls_configuration_input: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resetTargetSegmentDurationSeconds">reset_target_segment_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_segment_duration_seconds` <a name="reset_target_segment_duration_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resetTargetSegmentDurationSeconds"></a>

```python
def reset_target_segment_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSecondsInput">target_segment_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds">target_segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_segment_duration_seconds_input`<sup>Optional</sup> <a name="target_segment_duration_seconds_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSecondsInput"></a>

```python
target_segment_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_segment_duration_seconds`<sup>Required</sup> <a name="target_segment_duration_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds"></a>

```python
target_segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration">put_hls_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration">put_thumbnail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetHlsConfiguration">reset_hls_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetMediaTypes">reset_media_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetRecordingReconnectWindowSeconds">reset_recording_reconnect_window_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetStorageConfigurationArn">reset_storage_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetThumbnailConfiguration">reset_thumbnail_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hls_configuration` <a name="put_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration"></a>

```python
def put_hls_configuration(
  participant_recording_hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration = None
) -> None
```

###### `participant_recording_hls_configuration`<sup>Optional</sup> <a name="participant_recording_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration.parameter.participantRecordingHlsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

An object representing a configuration of participant HLS recordings for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#participant_recording_hls_configuration IvsStage#participant_recording_hls_configuration}

---

##### `put_thumbnail_configuration` <a name="put_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration"></a>

```python
def put_thumbnail_configuration(
  participant_thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration = None
) -> None
```

###### `participant_thumbnail_configuration`<sup>Optional</sup> <a name="participant_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration.parameter.participantThumbnailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

An object representing a configuration of thumbnails for recorded video from an individual participant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#participant_thumbnail_configuration IvsStage#participant_thumbnail_configuration}

---

##### `reset_hls_configuration` <a name="reset_hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetHlsConfiguration"></a>

```python
def reset_hls_configuration() -> None
```

##### `reset_media_types` <a name="reset_media_types" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetMediaTypes"></a>

```python
def reset_media_types() -> None
```

##### `reset_recording_reconnect_window_seconds` <a name="reset_recording_reconnect_window_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetRecordingReconnectWindowSeconds"></a>

```python
def reset_recording_reconnect_window_seconds() -> None
```

##### `reset_storage_configuration_arn` <a name="reset_storage_configuration_arn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetStorageConfigurationArn"></a>

```python
def reset_storage_configuration_arn() -> None
```

##### `reset_thumbnail_configuration` <a name="reset_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetThumbnailConfiguration"></a>

```python
def reset_thumbnail_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration">hls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration">thumbnail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfigurationInput">hls_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypesInput">media_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSecondsInput">recording_reconnect_window_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArnInput">storage_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfigurationInput">thumbnail_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes">media_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds">recording_reconnect_window_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn">storage_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hls_configuration`<sup>Required</sup> <a name="hls_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration"></a>

```python
hls_configuration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a>

---

##### `thumbnail_configuration`<sup>Required</sup> <a name="thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration"></a>

```python
thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `hls_configuration_input`<sup>Optional</sup> <a name="hls_configuration_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfigurationInput"></a>

```python
hls_configuration_input: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---

##### `media_types_input`<sup>Optional</sup> <a name="media_types_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypesInput"></a>

```python
media_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recording_reconnect_window_seconds_input`<sup>Optional</sup> <a name="recording_reconnect_window_seconds_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSecondsInput"></a>

```python
recording_reconnect_window_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_configuration_arn_input`<sup>Optional</sup> <a name="storage_configuration_arn_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArnInput"></a>

```python
storage_configuration_arn_input: str
```

- *Type:* str

---

##### `thumbnail_configuration_input`<sup>Optional</sup> <a name="thumbnail_configuration_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfigurationInput"></a>

```python
thumbnail_configuration_input: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---

##### `media_types`<sup>Required</sup> <a name="media_types" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes"></a>

```python
media_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recording_reconnect_window_seconds`<sup>Required</sup> <a name="recording_reconnect_window_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds"></a>

```python
recording_reconnect_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_configuration_arn`<sup>Required</sup> <a name="storage_configuration_arn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn"></a>

```python
storage_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsStageAutoParticipantRecordingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration">put_participant_thumbnail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resetParticipantThumbnailConfiguration">reset_participant_thumbnail_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_participant_thumbnail_configuration` <a name="put_participant_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration"></a>

```python
def put_participant_thumbnail_configuration(
  recording_mode: str = None,
  storage: typing.List[str] = None,
  target_interval_seconds: typing.Union[int, float] = None
) -> None
```

###### `recording_mode`<sup>Optional</sup> <a name="recording_mode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration.parameter.recordingMode"></a>

- *Type:* str

Thumbnail recording mode. Default: DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#recording_mode IvsStage#recording_mode}

---

###### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration.parameter.storage"></a>

- *Type:* typing.List[str]

Indicates the format in which thumbnails are recorded.

SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#storage IvsStage#storage}

---

###### `target_interval_seconds`<sup>Optional</sup> <a name="target_interval_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration.parameter.targetIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#target_interval_seconds IvsStage#target_interval_seconds}

---

##### `reset_participant_thumbnail_configuration` <a name="reset_participant_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resetParticipantThumbnailConfiguration"></a>

```python
def reset_participant_thumbnail_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration">participant_thumbnail_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfigurationInput">participant_thumbnail_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `participant_thumbnail_configuration`<sup>Required</sup> <a name="participant_thumbnail_configuration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration"></a>

```python
participant_thumbnail_configuration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a>

---

##### `participant_thumbnail_configuration_input`<sup>Optional</sup> <a name="participant_thumbnail_configuration_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfigurationInput"></a>

```python
participant_thumbnail_configuration_input: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetRecordingMode">reset_recording_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetTargetIntervalSeconds">reset_target_interval_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recording_mode` <a name="reset_recording_mode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetRecordingMode"></a>

```python
def reset_recording_mode() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_target_interval_seconds` <a name="reset_target_interval_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetTargetIntervalSeconds"></a>

```python
def reset_target_interval_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingModeInput">recording_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storageInput">storage_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput">target_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode">recording_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage">storage</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds">target_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recording_mode_input`<sup>Optional</sup> <a name="recording_mode_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingModeInput"></a>

```python
recording_mode_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storageInput"></a>

```python
storage_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_interval_seconds_input`<sup>Optional</sup> <a name="target_interval_seconds_input" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput"></a>

```python
target_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recording_mode`<sup>Required</sup> <a name="recording_mode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode"></a>

```python
recording_mode: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage"></a>

```python
storage: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_interval_seconds`<sup>Required</sup> <a name="target_interval_seconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```python
target_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---


### IvsStageTagsList <a name="IvsStageTagsList" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IvsStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IvsStageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>]

---


### IvsStageTagsOutputReference <a name="IvsStageTagsOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_stage

ivsStage.IvsStageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsStageTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>

---



