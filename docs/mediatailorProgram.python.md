# `mediatailorProgram` Submodule <a name="`mediatailorProgram` Submodule" id="@cdktn/provider-awscc.mediatailorProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorProgram <a name="MediatailorProgram" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program awscc_mediatailor_program}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgram(
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
  program_name: str,
  source_location_name: str,
  ad_breaks: IResolvable | typing.List[MediatailorProgramAdBreaks] = None,
  audience_media: IResolvable | typing.List[MediatailorProgramAudienceMedia] = None,
  live_source_name: str = None,
  schedule_configuration: MediatailorProgramScheduleConfiguration = None,
  vod_source_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | The name of the channel for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.programName">program_name</a></code> | <code>str</code> | The name of the Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.sourceLocationName">source_location_name</a></code> | <code>str</code> | The name of the source location. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.adBreaks">ad_breaks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]</code> | The ad break configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.audienceMedia">audience_media</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]</code> | The list of AudienceMedia defined in program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.liveSourceName">live_source_name</a></code> | <code>str</code> | The name of the LiveSource for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | The schedule configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.vodSourceName">vod_source_name</a></code> | <code>str</code> | The name that's used to refer to a VOD source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.channelName"></a>

- *Type:* str

The name of the channel for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.programName"></a>

- *Type:* str

The name of the Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.sourceLocationName"></a>

- *Type:* str

The name of the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.adBreaks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]

The ad break configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `audience_media`<sup>Optional</sup> <a name="audience_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.audienceMedia"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]

The list of AudienceMedia defined in program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}

---

##### `live_source_name`<sup>Optional</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.liveSourceName"></a>

- *Type:* str

The name of the LiveSource for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `schedule_configuration`<sup>Optional</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.scheduleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

The schedule configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}

---

##### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.Initializer.parameter.vodSourceName"></a>

- *Type:* str

The name that's used to refer to a VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks">put_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia">put_audience_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration">put_schedule_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks">reset_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia">reset_audience_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName">reset_live_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration">reset_schedule_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName">reset_vod_source_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ad_breaks` <a name="put_ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks"></a>

```python
def put_ad_breaks(
  value: IResolvable | typing.List[MediatailorProgramAdBreaks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAdBreaks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]

---

##### `put_audience_media` <a name="put_audience_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia"></a>

```python
def put_audience_media(
  value: IResolvable | typing.List[MediatailorProgramAudienceMedia]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putAudienceMedia.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]

---

##### `put_schedule_configuration` <a name="put_schedule_configuration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration"></a>

```python
def put_schedule_configuration(
  clip_range: MediatailorProgramScheduleConfigurationClipRange = None,
  transition: MediatailorProgramScheduleConfigurationTransition = None
) -> None
```

###### `clip_range`<sup>Optional</sup> <a name="clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration.parameter.clipRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

###### `transition`<sup>Optional</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.putScheduleConfiguration.parameter.transition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

Program transition configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#transition MediatailorProgram#transition}

---

##### `reset_ad_breaks` <a name="reset_ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAdBreaks"></a>

```python
def reset_ad_breaks() -> None
```

##### `reset_audience_media` <a name="reset_audience_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetAudienceMedia"></a>

```python
def reset_audience_media() -> None
```

##### `reset_live_source_name` <a name="reset_live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetLiveSourceName"></a>

```python
def reset_live_source_name() -> None
```

##### `reset_schedule_configuration` <a name="reset_schedule_configuration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetScheduleConfiguration"></a>

```python
def reset_schedule_configuration() -> None
```

##### `reset_vod_source_name` <a name="reset_vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.resetVodSourceName"></a>

```python
def reset_vod_source_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgram.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgram.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgram.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgram.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediatailorProgram resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediatailorProgram to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediatailorProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia">audience_media</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput">ad_breaks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput">audience_media_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput">live_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput">program_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput">schedule_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput">vod_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName">live_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName">program_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaks"></a>

```python
ad_breaks: MediatailorProgramAdBreaksList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList">MediatailorProgramAdBreaksList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `audience_media`<sup>Required</sup> <a name="audience_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMedia"></a>

```python
audience_media: MediatailorProgramAudienceMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList">MediatailorProgramAudienceMediaList</a>

---

##### `clip_range`<sup>Required</sup> <a name="clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.clipRange"></a>

```python
clip_range: MediatailorProgramClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference">MediatailorProgramClipRangeOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `duration_millis`<sup>Required</sup> <a name="duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfiguration"></a>

```python
schedule_configuration: MediatailorProgramScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference">MediatailorProgramScheduleConfigurationOutputReference</a>

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `ad_breaks_input`<sup>Optional</sup> <a name="ad_breaks_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.adBreaksInput"></a>

```python
ad_breaks_input: IResolvable | typing.List[MediatailorProgramAdBreaks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]

---

##### `audience_media_input`<sup>Optional</sup> <a name="audience_media_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.audienceMediaInput"></a>

```python
audience_media_input: IResolvable | typing.List[MediatailorProgramAudienceMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `live_source_name_input`<sup>Optional</sup> <a name="live_source_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceNameInput"></a>

```python
live_source_name_input: str
```

- *Type:* str

---

##### `program_name_input`<sup>Optional</sup> <a name="program_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programNameInput"></a>

```python
program_name_input: str
```

- *Type:* str

---

##### `schedule_configuration_input`<sup>Optional</sup> <a name="schedule_configuration_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.scheduleConfigurationInput"></a>

```python
schedule_configuration_input: IResolvable | MediatailorProgramScheduleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `vod_source_name_input`<sup>Optional</sup> <a name="vod_source_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceNameInput"></a>

```python
vod_source_name_input: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.programName"></a>

```python
program_name: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgram.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorProgramAdBreaks <a name="MediatailorProgramAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaks(
  ad_break_metadata: IResolvable | typing.List[MediatailorProgramAdBreaksAdBreakMetadata] = None,
  message_type: str = None,
  offset_millis: typing.Union[int, float] = None,
  slate: MediatailorProgramAdBreaksSlate = None,
  splice_insert_message: MediatailorProgramAdBreaksSpliceInsertMessage = None,
  time_signal_message: MediatailorProgramAdBreaksTimeSignalMessage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata">ad_break_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]</code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType">message_type</a></code> | <code>str</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis">offset_millis</a></code> | <code>typing.Union[int, float]</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage">splice_insert_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage">time_signal_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `ad_break_metadata`<sup>Optional</sup> <a name="ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.adBreakMetadata"></a>

```python
ad_break_metadata: IResolvable | typing.List[MediatailorProgramAdBreaksAdBreakMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `message_type`<sup>Optional</sup> <a name="message_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `offset_millis`<sup>Optional</sup> <a name="offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.offsetMillis"></a>

```python
offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `slate`<sup>Optional</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.slate"></a>

```python
slate: MediatailorProgramAdBreaksSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `splice_insert_message`<sup>Optional</sup> <a name="splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.spliceInsertMessage"></a>

```python
splice_insert_message: MediatailorProgramAdBreaksSpliceInsertMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `time_signal_message`<sup>Optional</sup> <a name="time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks.property.timeSignalMessage"></a>

```python
time_signal_message: MediatailorProgramAdBreaksTimeSignalMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAdBreaksAdBreakMetadata <a name="MediatailorProgramAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key">key</a></code> | <code>str</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value">value</a></code> | <code>str</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAdBreaksSlate <a name="MediatailorProgramAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksSlate(
  source_location_name: str = None,
  vod_source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | The slate VOD source name. |

---

##### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAdBreaksSpliceInsertMessage <a name="MediatailorProgramAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage(
  avail_num: typing.Union[int, float] = None,
  avails_expected: typing.Union[int, float] = None,
  splice_event_id: typing.Union[int, float] = None,
  unique_program_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum">avail_num</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected">avails_expected</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId">splice_event_id</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId">unique_program_id</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.unique_program_id. |

---

##### `avail_num`<sup>Optional</sup> <a name="avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availNum"></a>

```python
avail_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `avails_expected`<sup>Optional</sup> <a name="avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```python
avails_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `splice_event_id`<sup>Optional</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```python
splice_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `unique_program_id`<sup>Optional</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```python
unique_program_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAdBreaksTimeSignalMessage <a name="MediatailorProgramAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage(
  segmentation_descriptors: IResolvable | typing.List[MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors">segmentation_descriptors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]</code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `segmentation_descriptors`<sup>Optional</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```python
segmentation_descriptors: IResolvable | typing.List[MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors(
  segmentation_event_id: typing.Union[int, float] = None,
  segmentation_type_id: typing.Union[int, float] = None,
  segmentation_upid: str = None,
  segmentation_upid_type: typing.Union[int, float] = None,
  segment_num: typing.Union[int, float] = None,
  segments_expected: typing.Union[int, float] = None,
  sub_segment_num: typing.Union[int, float] = None,
  sub_segments_expected: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">segmentation_event_id</a></code> | <code>typing.Union[int, float]</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">segmentation_type_id</a></code> | <code>typing.Union[int, float]</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">segmentation_upid</a></code> | <code>str</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">segmentation_upid_type</a></code> | <code>typing.Union[int, float]</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">segment_num</a></code> | <code>typing.Union[int, float]</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">segments_expected</a></code> | <code>typing.Union[int, float]</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">sub_segment_num</a></code> | <code>typing.Union[int, float]</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">sub_segments_expected</a></code> | <code>typing.Union[int, float]</code> | The number of sub-segments expected. |

---

##### `segmentation_event_id`<sup>Optional</sup> <a name="segmentation_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```python
segmentation_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `segmentation_type_id`<sup>Optional</sup> <a name="segmentation_type_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```python
segmentation_type_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `segmentation_upid`<sup>Optional</sup> <a name="segmentation_upid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```python
segmentation_upid: str
```

- *Type:* str

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `segmentation_upid_type`<sup>Optional</sup> <a name="segmentation_upid_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```python
segmentation_upid_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `segment_num`<sup>Optional</sup> <a name="segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```python
segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `segments_expected`<sup>Optional</sup> <a name="segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```python
segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `sub_segment_num`<sup>Optional</sup> <a name="sub_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```python
sub_segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `sub_segments_expected`<sup>Optional</sup> <a name="sub_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```python
sub_segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMedia <a name="MediatailorProgramAudienceMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMedia(
  alternate_media: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMedia] = None,
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia">alternate_media</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]</code> | The list of AlternateMedia defined in AudienceMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience">audience</a></code> | <code>str</code> | The Audience defined in AudienceMedia. |

---

##### `alternate_media`<sup>Optional</sup> <a name="alternate_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.alternateMedia"></a>

```python
alternate_media: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]

The list of AlternateMedia defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#alternate_media MediatailorProgram#alternate_media}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia.property.audience"></a>

```python
audience: str
```

- *Type:* str

The Audience defined in AudienceMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience MediatailorProgram#audience}

---

### MediatailorProgramAudienceMediaAlternateMedia <a name="MediatailorProgramAudienceMediaAlternateMedia" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia(
  ad_breaks: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaks] = None,
  clip_range: MediatailorProgramAudienceMediaAlternateMediaClipRange = None,
  duration_millis: typing.Union[int, float] = None,
  live_source_name: str = None,
  scheduled_start_time_millis: typing.Union[int, float] = None,
  source_location_name: str = None,
  vod_source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks">ad_breaks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]</code> | Ad break configuration parameters defined in AlternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | The duration of the alternateMedia in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName">live_source_name</a></code> | <code>str</code> | The name of the live source for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis">scheduled_start_time_millis</a></code> | <code>typing.Union[int, float]</code> | The date and time that the alternateMedia is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | The name of the source location for alternateMedia. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | The name of the VOD source for alternateMedia. |

---

##### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.adBreaks"></a>

```python
ad_breaks: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]

Ad break configuration parameters defined in AlternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `clip_range`<sup>Optional</sup> <a name="clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.clipRange"></a>

```python
clip_range: MediatailorProgramAudienceMediaAlternateMediaClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `duration_millis`<sup>Optional</sup> <a name="duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of the alternateMedia in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `live_source_name`<sup>Optional</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

The name of the live source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `scheduled_start_time_millis`<sup>Optional</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.scheduledStartTimeMillis"></a>

```python
scheduled_start_time_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

The name of the source location for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

The name of the VOD source for alternateMedia.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaks <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks(
  ad_break_metadata: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata] = None,
  message_type: str = None,
  offset_millis: typing.Union[int, float] = None,
  slate: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate = None,
  splice_insert_message: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage = None,
  time_signal_message: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata">ad_break_metadata</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]</code> | Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType">message_type</a></code> | <code>str</code> | The SCTE-35 ad insertion type. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis">offset_millis</a></code> | <code>typing.Union[int, float]</code> | How long (in milliseconds) after the beginning of the program that an ad starts. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | Slate VOD source configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage">splice_insert_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | Splice insert message configuration. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage">time_signal_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | The SCTE-35 time_signal message configuration. |

---

##### `ad_break_metadata`<sup>Optional</sup> <a name="ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.adBreakMetadata"></a>

```python
ad_break_metadata: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]

Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_break_metadata MediatailorProgram#ad_break_metadata}

---

##### `message_type`<sup>Optional</sup> <a name="message_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

The SCTE-35 ad insertion type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#message_type MediatailorProgram#message_type}

---

##### `offset_millis`<sup>Optional</sup> <a name="offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.offsetMillis"></a>

```python
offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long (in milliseconds) after the beginning of the program that an ad starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#offset_millis MediatailorProgram#offset_millis}

---

##### `slate`<sup>Optional</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.slate"></a>

```python
slate: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

Slate VOD source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#slate MediatailorProgram#slate}

---

##### `splice_insert_message`<sup>Optional</sup> <a name="splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.spliceInsertMessage"></a>

```python
splice_insert_message: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

Splice insert message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_insert_message MediatailorProgram#splice_insert_message}

---

##### `time_signal_message`<sup>Optional</sup> <a name="time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks.property.timeSignalMessage"></a>

```python
time_signal_message: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

The SCTE-35 time_signal message configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#time_signal_message MediatailorProgram#time_signal_message}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key">key</a></code> | <code>str</code> | The key. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value">value</a></code> | <code>str</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#key MediatailorProgram#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata.property.value"></a>

```python
value: str
```

- *Type:* str

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#value MediatailorProgram#value}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate(
  source_location_name: str = None,
  vod_source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | The name of the source location where the slate VOD source is stored. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | The slate VOD source name. |

---

##### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage(
  avail_num: typing.Union[int, float] = None,
  avails_expected: typing.Union[int, float] = None,
  splice_event_id: typing.Union[int, float] = None,
  unique_program_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum">avail_num</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.avail_num. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected">avails_expected</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.avails_expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId">splice_event_id</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.splice_event_id. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId">unique_program_id</a></code> | <code>typing.Union[int, float]</code> | This is written to splice_insert.unique_program_id. |

---

##### `avail_num`<sup>Optional</sup> <a name="avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availNum"></a>

```python
avail_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

##### `avails_expected`<sup>Optional</sup> <a name="avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.availsExpected"></a>

```python
avails_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

##### `splice_event_id`<sup>Optional</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.spliceEventId"></a>

```python
splice_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

##### `unique_program_id`<sup>Optional</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage.property.uniqueProgramId"></a>

```python
unique_program_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage(
  segmentation_descriptors: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors">segmentation_descriptors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]</code> | The configurations for the SCTE-35 segmentation_descriptor message(s). |

---

##### `segmentation_descriptors`<sup>Optional</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage.property.segmentationDescriptors"></a>

```python
segmentation_descriptors: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors(
  segmentation_event_id: typing.Union[int, float] = None,
  segmentation_type_id: typing.Union[int, float] = None,
  segmentation_upid: str = None,
  segmentation_upid_type: typing.Union[int, float] = None,
  segment_num: typing.Union[int, float] = None,
  segments_expected: typing.Union[int, float] = None,
  sub_segment_num: typing.Union[int, float] = None,
  sub_segments_expected: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId">segmentation_event_id</a></code> | <code>typing.Union[int, float]</code> | The Event Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId">segmentation_type_id</a></code> | <code>typing.Union[int, float]</code> | The Type Identifier to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid">segmentation_upid</a></code> | <code>str</code> | The Upid to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType">segmentation_upid_type</a></code> | <code>typing.Union[int, float]</code> | The Upid Type to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum">segment_num</a></code> | <code>typing.Union[int, float]</code> | The segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected">segments_expected</a></code> | <code>typing.Union[int, float]</code> | The number of segments expected. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum">sub_segment_num</a></code> | <code>typing.Union[int, float]</code> | The sub-segment number to assign. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected">sub_segments_expected</a></code> | <code>typing.Union[int, float]</code> | The number of sub-segments expected. |

---

##### `segmentation_event_id`<sup>Optional</sup> <a name="segmentation_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationEventId"></a>

```python
segmentation_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Event Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_event_id MediatailorProgram#segmentation_event_id}

---

##### `segmentation_type_id`<sup>Optional</sup> <a name="segmentation_type_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationTypeId"></a>

```python
segmentation_type_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Type Identifier to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_type_id MediatailorProgram#segmentation_type_id}

---

##### `segmentation_upid`<sup>Optional</sup> <a name="segmentation_upid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpid"></a>

```python
segmentation_upid: str
```

- *Type:* str

The Upid to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid MediatailorProgram#segmentation_upid}

---

##### `segmentation_upid_type`<sup>Optional</sup> <a name="segmentation_upid_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentationUpidType"></a>

```python
segmentation_upid_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Upid Type to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_upid_type MediatailorProgram#segmentation_upid_type}

---

##### `segment_num`<sup>Optional</sup> <a name="segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentNum"></a>

```python
segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segment_num MediatailorProgram#segment_num}

---

##### `segments_expected`<sup>Optional</sup> <a name="segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.segmentsExpected"></a>

```python
segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segments_expected MediatailorProgram#segments_expected}

---

##### `sub_segment_num`<sup>Optional</sup> <a name="sub_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentNum"></a>

```python
sub_segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sub-segment number to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segment_num MediatailorProgram#sub_segment_num}

---

##### `sub_segments_expected`<sup>Optional</sup> <a name="sub_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors.property.subSegmentsExpected"></a>

```python
sub_segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of sub-segments expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#sub_segments_expected MediatailorProgram#sub_segments_expected}

---

### MediatailorProgramAudienceMediaAlternateMediaClipRange <a name="MediatailorProgramAudienceMediaAlternateMediaClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange(
  end_offset_millis: typing.Union[int, float] = None,
  start_offset_millis: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | The start offset of the clip range, in milliseconds. |

---

##### `end_offset_millis`<sup>Optional</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `start_offset_millis`<sup>Optional</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramClipRange <a name="MediatailorProgramClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramClipRange()
```


### MediatailorProgramConfig <a name="MediatailorProgramConfig" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_name: str,
  program_name: str,
  source_location_name: str,
  ad_breaks: IResolvable | typing.List[MediatailorProgramAdBreaks] = None,
  audience_media: IResolvable | typing.List[MediatailorProgramAudienceMedia] = None,
  live_source_name: str = None,
  schedule_configuration: MediatailorProgramScheduleConfiguration = None,
  vod_source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName">channel_name</a></code> | <code>str</code> | The name of the channel for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName">program_name</a></code> | <code>str</code> | The name of the Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | The name of the source location. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks">ad_breaks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]</code> | The ad break configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia">audience_media</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]</code> | The list of AudienceMedia defined in program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName">live_source_name</a></code> | <code>str</code> | The name of the LiveSource for this Program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | The schedule configuration settings. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | The name that's used to refer to a VOD source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

The name of the channel for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#channel_name MediatailorProgram#channel_name}

---

##### `program_name`<sup>Required</sup> <a name="program_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.programName"></a>

```python
program_name: str
```

- *Type:* str

The name of the Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#program_name MediatailorProgram#program_name}

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

The name of the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

##### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.adBreaks"></a>

```python
ad_breaks: IResolvable | typing.List[MediatailorProgramAdBreaks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]

The ad break configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#ad_breaks MediatailorProgram#ad_breaks}

---

##### `audience_media`<sup>Optional</sup> <a name="audience_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.audienceMedia"></a>

```python
audience_media: IResolvable | typing.List[MediatailorProgramAudienceMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]

The list of AudienceMedia defined in program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#audience_media MediatailorProgram#audience_media}

---

##### `live_source_name`<sup>Optional</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

The name of the LiveSource for this Program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#live_source_name MediatailorProgram#live_source_name}

---

##### `schedule_configuration`<sup>Optional</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.scheduleConfiguration"></a>

```python
schedule_configuration: MediatailorProgramScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

The schedule configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#schedule_configuration MediatailorProgram#schedule_configuration}

---

##### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramConfig.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

The name that's used to refer to a VOD source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

### MediatailorProgramScheduleConfiguration <a name="MediatailorProgramScheduleConfiguration" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramScheduleConfiguration(
  clip_range: MediatailorProgramScheduleConfigurationClipRange = None,
  transition: MediatailorProgramScheduleConfigurationTransition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | Clip range configuration for the VOD source associated with the program. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | Program transition configuration. |

---

##### `clip_range`<sup>Optional</sup> <a name="clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.clipRange"></a>

```python
clip_range: MediatailorProgramScheduleConfigurationClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

Clip range configuration for the VOD source associated with the program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#clip_range MediatailorProgram#clip_range}

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration.property.transition"></a>

```python
transition: MediatailorProgramScheduleConfigurationTransition
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

Program transition configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#transition MediatailorProgram#transition}

---

### MediatailorProgramScheduleConfigurationClipRange <a name="MediatailorProgramScheduleConfigurationClipRange" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange(
  end_offset_millis: typing.Union[int, float] = None,
  start_offset_millis: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | The end offset of the clip range, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | The start offset of the clip range, in milliseconds. |

---

##### `end_offset_millis`<sup>Optional</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

##### `start_offset_millis`<sup>Optional</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

### MediatailorProgramScheduleConfigurationTransition <a name="MediatailorProgramScheduleConfigurationTransition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramScheduleConfigurationTransition(
  duration_millis: typing.Union[int, float] = None,
  relative_position: str = None,
  relative_program: str = None,
  scheduled_start_time_millis: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | The duration of the live program in seconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition">relative_position</a></code> | <code>str</code> | The position where this program will be inserted relative to the RelativePosition. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram">relative_program</a></code> | <code>str</code> | The name of the program that this program will be inserted next to. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis">scheduled_start_time_millis</a></code> | <code>typing.Union[int, float]</code> | The date and time that the program is scheduled to start, in epoch milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type">type</a></code> | <code>str</code> | Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE. |

---

##### `duration_millis`<sup>Optional</sup> <a name="duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of the live program in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

##### `relative_position`<sup>Optional</sup> <a name="relative_position" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativePosition"></a>

```python
relative_position: str
```

- *Type:* str

The position where this program will be inserted relative to the RelativePosition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_position MediatailorProgram#relative_position}

---

##### `relative_program`<sup>Optional</sup> <a name="relative_program" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.relativeProgram"></a>

```python
relative_program: str
```

- *Type:* str

The name of the program that this program will be inserted next to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_program MediatailorProgram#relative_program}

---

##### `scheduled_start_time_millis`<sup>Optional</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.scheduledStartTimeMillis"></a>

```python
scheduled_start_time_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The date and time that the program is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition.property.type"></a>

```python
type: str
```

- *Type:* str

Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#type MediatailorProgram#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorProgramAdBreaksAdBreakMetadataList <a name="MediatailorProgramAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAdBreaksAdBreakMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]

---


### MediatailorProgramAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAdBreaksAdBreakMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>

---


### MediatailorProgramAdBreaksList <a name="MediatailorProgramAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAdBreaks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>]

---


### MediatailorProgramAdBreaksOutputReference <a name="MediatailorProgramAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata">put_ad_break_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate">put_slate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage">put_splice_insert_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage">put_time_signal_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata">reset_ad_break_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType">reset_message_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis">reset_offset_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate">reset_slate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage">reset_splice_insert_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage">reset_time_signal_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_break_metadata` <a name="put_ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata"></a>

```python
def put_ad_break_metadata(
  value: IResolvable | typing.List[MediatailorProgramAdBreaksAdBreakMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]

---

##### `put_slate` <a name="put_slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate"></a>

```python
def put_slate(
  source_location_name: str = None,
  vod_source_name: str = None
) -> None
```

###### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate.parameter.sourceLocationName"></a>

- *Type:* str

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

###### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSlate.parameter.vodSourceName"></a>

- *Type:* str

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

##### `put_splice_insert_message` <a name="put_splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage"></a>

```python
def put_splice_insert_message(
  avail_num: typing.Union[int, float] = None,
  avails_expected: typing.Union[int, float] = None,
  splice_event_id: typing.Union[int, float] = None,
  unique_program_id: typing.Union[int, float] = None
) -> None
```

###### `avail_num`<sup>Optional</sup> <a name="avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.availNum"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

###### `avails_expected`<sup>Optional</sup> <a name="avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.availsExpected"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

###### `splice_event_id`<sup>Optional</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.spliceEventId"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

###### `unique_program_id`<sup>Optional</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putSpliceInsertMessage.parameter.uniqueProgramId"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

##### `put_time_signal_message` <a name="put_time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage"></a>

```python
def put_time_signal_message(
  segmentation_descriptors: IResolvable | typing.List[MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors] = None
) -> None
```

###### `segmentation_descriptors`<sup>Optional</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.putTimeSignalMessage.parameter.segmentationDescriptors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

##### `reset_ad_break_metadata` <a name="reset_ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetAdBreakMetadata"></a>

```python
def reset_ad_break_metadata() -> None
```

##### `reset_message_type` <a name="reset_message_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetMessageType"></a>

```python
def reset_message_type() -> None
```

##### `reset_offset_millis` <a name="reset_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetOffsetMillis"></a>

```python
def reset_offset_millis() -> None
```

##### `reset_slate` <a name="reset_slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSlate"></a>

```python
def reset_slate() -> None
```

##### `reset_splice_insert_message` <a name="reset_splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```python
def reset_splice_insert_message() -> None
```

##### `reset_time_signal_message` <a name="reset_time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.resetTimeSignalMessage"></a>

```python
def reset_time_signal_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata">ad_break_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage">splice_insert_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage">time_signal_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput">ad_break_metadata_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput">offset_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput">slate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput">splice_insert_message_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput">time_signal_message_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis">offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_break_metadata`<sup>Required</sup> <a name="ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadata"></a>

```python
ad_break_metadata: MediatailorProgramAdBreaksAdBreakMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadataList">MediatailorProgramAdBreaksAdBreakMetadataList</a>

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slate"></a>

```python
slate: MediatailorProgramAdBreaksSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference">MediatailorProgramAdBreaksSlateOutputReference</a>

---

##### `splice_insert_message`<sup>Required</sup> <a name="splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessage"></a>

```python
splice_insert_message: MediatailorProgramAdBreaksSpliceInsertMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `time_signal_message`<sup>Required</sup> <a name="time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessage"></a>

```python
time_signal_message: MediatailorProgramAdBreaksTimeSignalMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAdBreaksTimeSignalMessageOutputReference</a>

---

##### `ad_break_metadata_input`<sup>Optional</sup> <a name="ad_break_metadata_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```python
ad_break_metadata_input: IResolvable | typing.List[MediatailorProgramAdBreaksAdBreakMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksAdBreakMetadata">MediatailorProgramAdBreaksAdBreakMetadata</a>]

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `offset_millis_input`<sup>Optional</sup> <a name="offset_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillisInput"></a>

```python
offset_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slate_input`<sup>Optional</sup> <a name="slate_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.slateInput"></a>

```python
slate_input: IResolvable | MediatailorProgramAdBreaksSlate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---

##### `splice_insert_message_input`<sup>Optional</sup> <a name="splice_insert_message_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```python
splice_insert_message_input: IResolvable | MediatailorProgramAdBreaksSpliceInsertMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---

##### `time_signal_message_input`<sup>Optional</sup> <a name="time_signal_message_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```python
time_signal_message_input: IResolvable | MediatailorProgramAdBreaksTimeSignalMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `offset_millis`<sup>Required</sup> <a name="offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.offsetMillis"></a>

```python
offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAdBreaks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaks">MediatailorProgramAdBreaks</a>

---


### MediatailorProgramAdBreaksSlateOutputReference <a name="MediatailorProgramAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName">reset_source_location_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName">reset_vod_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_location_name` <a name="reset_source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```python
def reset_source_location_name() -> None
```

##### `reset_vod_source_name` <a name="reset_vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.resetVodSourceName"></a>

```python
def reset_vod_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput">vod_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `vod_source_name_input`<sup>Optional</sup> <a name="vod_source_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```python
vod_source_name_input: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAdBreaksSlate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSlate">MediatailorProgramAdBreaksSlate</a>

---


### MediatailorProgramAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">reset_avail_num</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">reset_avails_expected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">reset_splice_event_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">reset_unique_program_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_avail_num` <a name="reset_avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```python
def reset_avail_num() -> None
```

##### `reset_avails_expected` <a name="reset_avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```python
def reset_avails_expected() -> None
```

##### `reset_splice_event_id` <a name="reset_splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```python
def reset_splice_event_id() -> None
```

##### `reset_unique_program_id` <a name="reset_unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```python
def reset_unique_program_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">avail_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">avails_expected_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">splice_event_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">unique_program_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum">avail_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">avails_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">splice_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">unique_program_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_num_input`<sup>Optional</sup> <a name="avail_num_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```python
avail_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avails_expected_input`<sup>Optional</sup> <a name="avails_expected_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```python
avails_expected_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `splice_event_id_input`<sup>Optional</sup> <a name="splice_event_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```python
splice_event_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_program_id_input`<sup>Optional</sup> <a name="unique_program_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```python
unique_program_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avail_num`<sup>Required</sup> <a name="avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```python
avail_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avails_expected`<sup>Required</sup> <a name="avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```python
avails_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `splice_event_id`<sup>Required</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```python
splice_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_program_id`<sup>Required</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```python
unique_program_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAdBreaksSpliceInsertMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksSpliceInsertMessage">MediatailorProgramAdBreaksSpliceInsertMessage</a>

---


### MediatailorProgramAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">put_segmentation_descriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">reset_segmentation_descriptors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_segmentation_descriptors` <a name="put_segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```python
def put_segmentation_descriptors(
  value: IResolvable | typing.List[MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

---

##### `reset_segmentation_descriptors` <a name="reset_segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```python
def reset_segmentation_descriptors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentation_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">segmentation_descriptors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_descriptors`<sup>Required</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```python
segmentation_descriptors: MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `segmentation_descriptors_input`<sup>Optional</sup> <a name="segmentation_descriptors_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```python
segmentation_descriptors_input: IResolvable | typing.List[MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAdBreaksTimeSignalMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessage">MediatailorProgramAdBreaksTimeSignalMessage</a>

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

---


### MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">reset_segmentation_event_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">reset_segmentation_type_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">reset_segmentation_upid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">reset_segmentation_upid_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">reset_segment_num</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">reset_segments_expected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">reset_sub_segment_num</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">reset_sub_segments_expected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_segmentation_event_id` <a name="reset_segmentation_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```python
def reset_segmentation_event_id() -> None
```

##### `reset_segmentation_type_id` <a name="reset_segmentation_type_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```python
def reset_segmentation_type_id() -> None
```

##### `reset_segmentation_upid` <a name="reset_segmentation_upid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```python
def reset_segmentation_upid() -> None
```

##### `reset_segmentation_upid_type` <a name="reset_segmentation_upid_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```python
def reset_segmentation_upid_type() -> None
```

##### `reset_segment_num` <a name="reset_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```python
def reset_segment_num() -> None
```

##### `reset_segments_expected` <a name="reset_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```python
def reset_segments_expected() -> None
```

##### `reset_sub_segment_num` <a name="reset_sub_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```python
def reset_sub_segment_num() -> None
```

##### `reset_sub_segments_expected` <a name="reset_sub_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```python
def reset_sub_segments_expected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">segmentation_event_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">segmentation_type_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">segmentation_upid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">segmentation_upid_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">segment_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">segments_expected_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">sub_segment_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">sub_segments_expected_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentation_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentation_type_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentation_upid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentation_upid_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">sub_segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">sub_segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_event_id_input`<sup>Optional</sup> <a name="segmentation_event_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```python
segmentation_event_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_type_id_input`<sup>Optional</sup> <a name="segmentation_type_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```python
segmentation_type_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_upid_input`<sup>Optional</sup> <a name="segmentation_upid_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```python
segmentation_upid_input: str
```

- *Type:* str

---

##### `segmentation_upid_type_input`<sup>Optional</sup> <a name="segmentation_upid_type_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```python
segmentation_upid_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_num_input`<sup>Optional</sup> <a name="segment_num_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```python
segment_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segments_expected_input`<sup>Optional</sup> <a name="segments_expected_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```python
segments_expected_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segment_num_input`<sup>Optional</sup> <a name="sub_segment_num_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```python
sub_segment_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segments_expected_input`<sup>Optional</sup> <a name="sub_segments_expected_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```python
sub_segments_expected_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_event_id`<sup>Required</sup> <a name="segmentation_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```python
segmentation_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_type_id`<sup>Required</sup> <a name="segmentation_type_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```python
segmentation_type_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_upid`<sup>Required</sup> <a name="segmentation_upid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```python
segmentation_upid: str
```

- *Type:* str

---

##### `segmentation_upid_type`<sup>Required</sup> <a name="segmentation_upid_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```python
segmentation_upid_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_num`<sup>Required</sup> <a name="segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```python
segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segments_expected`<sup>Required</sup> <a name="segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```python
segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segment_num`<sup>Required</sup> <a name="sub_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```python
sub_segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segments_expected`<sup>Required</sup> <a name="sub_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```python
sub_segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata">put_ad_break_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate">put_slate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage">put_splice_insert_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage">put_time_signal_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata">reset_ad_break_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType">reset_message_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis">reset_offset_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate">reset_slate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage">reset_splice_insert_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage">reset_time_signal_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_break_metadata` <a name="put_ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata"></a>

```python
def put_ad_break_metadata(
  value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putAdBreakMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]

---

##### `put_slate` <a name="put_slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate"></a>

```python
def put_slate(
  source_location_name: str = None,
  vod_source_name: str = None
) -> None
```

###### `source_location_name`<sup>Optional</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate.parameter.sourceLocationName"></a>

- *Type:* str

The name of the source location where the slate VOD source is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#source_location_name MediatailorProgram#source_location_name}

---

###### `vod_source_name`<sup>Optional</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSlate.parameter.vodSourceName"></a>

- *Type:* str

The slate VOD source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#vod_source_name MediatailorProgram#vod_source_name}

---

##### `put_splice_insert_message` <a name="put_splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage"></a>

```python
def put_splice_insert_message(
  avail_num: typing.Union[int, float] = None,
  avails_expected: typing.Union[int, float] = None,
  splice_event_id: typing.Union[int, float] = None,
  unique_program_id: typing.Union[int, float] = None
) -> None
```

###### `avail_num`<sup>Optional</sup> <a name="avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.availNum"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.avail_num.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avail_num MediatailorProgram#avail_num}

---

###### `avails_expected`<sup>Optional</sup> <a name="avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.availsExpected"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.avails_expected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#avails_expected MediatailorProgram#avails_expected}

---

###### `splice_event_id`<sup>Optional</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.spliceEventId"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.splice_event_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#splice_event_id MediatailorProgram#splice_event_id}

---

###### `unique_program_id`<sup>Optional</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putSpliceInsertMessage.parameter.uniqueProgramId"></a>

- *Type:* typing.Union[int, float]

This is written to splice_insert.unique_program_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#unique_program_id MediatailorProgram#unique_program_id}

---

##### `put_time_signal_message` <a name="put_time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage"></a>

```python
def put_time_signal_message(
  segmentation_descriptors: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors] = None
) -> None
```

###### `segmentation_descriptors`<sup>Optional</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.putTimeSignalMessage.parameter.segmentationDescriptors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

The configurations for the SCTE-35 segmentation_descriptor message(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#segmentation_descriptors MediatailorProgram#segmentation_descriptors}

---

##### `reset_ad_break_metadata` <a name="reset_ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetAdBreakMetadata"></a>

```python
def reset_ad_break_metadata() -> None
```

##### `reset_message_type` <a name="reset_message_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetMessageType"></a>

```python
def reset_message_type() -> None
```

##### `reset_offset_millis` <a name="reset_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetOffsetMillis"></a>

```python
def reset_offset_millis() -> None
```

##### `reset_slate` <a name="reset_slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSlate"></a>

```python
def reset_slate() -> None
```

##### `reset_splice_insert_message` <a name="reset_splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetSpliceInsertMessage"></a>

```python
def reset_splice_insert_message() -> None
```

##### `reset_time_signal_message` <a name="reset_time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.resetTimeSignalMessage"></a>

```python
def reset_time_signal_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata">ad_break_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate">slate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage">splice_insert_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage">time_signal_message</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput">ad_break_metadata_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput">offset_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput">slate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput">splice_insert_message_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput">time_signal_message_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis">offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_break_metadata`<sup>Required</sup> <a name="ad_break_metadata" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadata"></a>

```python
ad_break_metadata: MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataList</a>

---

##### `slate`<sup>Required</sup> <a name="slate" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slate"></a>

```python
slate: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference</a>

---

##### `splice_insert_message`<sup>Required</sup> <a name="splice_insert_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessage"></a>

```python
splice_insert_message: MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference</a>

---

##### `time_signal_message`<sup>Required</sup> <a name="time_signal_message" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessage"></a>

```python
time_signal_message: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference</a>

---

##### `ad_break_metadata_input`<sup>Optional</sup> <a name="ad_break_metadata_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.adBreakMetadataInput"></a>

```python
ad_break_metadata_input: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata">MediatailorProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadata</a>]

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `offset_millis_input`<sup>Optional</sup> <a name="offset_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillisInput"></a>

```python
offset_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slate_input`<sup>Optional</sup> <a name="slate_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.slateInput"></a>

```python
slate_input: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---

##### `splice_insert_message_input`<sup>Optional</sup> <a name="splice_insert_message_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.spliceInsertMessageInput"></a>

```python
splice_insert_message_input: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---

##### `time_signal_message_input`<sup>Optional</sup> <a name="time_signal_message_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.timeSignalMessageInput"></a>

```python
time_signal_message_input: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `offset_millis`<sup>Required</sup> <a name="offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.offsetMillis"></a>

```python
offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName">reset_source_location_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName">reset_vod_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_location_name` <a name="reset_source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetSourceLocationName"></a>

```python
def reset_source_location_name() -> None
```

##### `reset_vod_source_name` <a name="reset_vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.resetVodSourceName"></a>

```python
def reset_vod_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput">vod_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `vod_source_name_input`<sup>Optional</sup> <a name="vod_source_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceNameInput"></a>

```python
vod_source_name_input: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSlate</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum">reset_avail_num</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected">reset_avails_expected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId">reset_splice_event_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId">reset_unique_program_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_avail_num` <a name="reset_avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailNum"></a>

```python
def reset_avail_num() -> None
```

##### `reset_avails_expected` <a name="reset_avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetAvailsExpected"></a>

```python
def reset_avails_expected() -> None
```

##### `reset_splice_event_id` <a name="reset_splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetSpliceEventId"></a>

```python
def reset_splice_event_id() -> None
```

##### `reset_unique_program_id` <a name="reset_unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.resetUniqueProgramId"></a>

```python
def reset_unique_program_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput">avail_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput">avails_expected_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput">splice_event_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput">unique_program_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum">avail_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected">avails_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId">splice_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId">unique_program_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_num_input`<sup>Optional</sup> <a name="avail_num_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNumInput"></a>

```python
avail_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avails_expected_input`<sup>Optional</sup> <a name="avails_expected_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpectedInput"></a>

```python
avails_expected_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `splice_event_id_input`<sup>Optional</sup> <a name="splice_event_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventIdInput"></a>

```python
splice_event_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_program_id_input`<sup>Optional</sup> <a name="unique_program_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramIdInput"></a>

```python
unique_program_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avail_num`<sup>Required</sup> <a name="avail_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availNum"></a>

```python
avail_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `avails_expected`<sup>Required</sup> <a name="avails_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.availsExpected"></a>

```python
avails_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `splice_event_id`<sup>Required</sup> <a name="splice_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.spliceEventId"></a>

```python
splice_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unique_program_id`<sup>Required</sup> <a name="unique_program_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.uniqueProgramId"></a>

```python
unique_program_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessage</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors">put_segmentation_descriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors">reset_segmentation_descriptors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_segmentation_descriptors` <a name="put_segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors"></a>

```python
def put_segmentation_descriptors(
  value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.putSegmentationDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

---

##### `reset_segmentation_descriptors` <a name="reset_segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.resetSegmentationDescriptors"></a>

```python
def reset_segmentation_descriptors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors">segmentation_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput">segmentation_descriptors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_descriptors`<sup>Required</sup> <a name="segmentation_descriptors" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptors"></a>

```python
segmentation_descriptors: MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList</a>

---

##### `segmentation_descriptors_input`<sup>Optional</sup> <a name="segmentation_descriptors_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.segmentationDescriptorsInput"></a>

```python
segmentation_descriptors_input: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessage</a>

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>]

---


### MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId">reset_segmentation_event_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId">reset_segmentation_type_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid">reset_segmentation_upid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType">reset_segmentation_upid_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum">reset_segment_num</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected">reset_segments_expected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum">reset_sub_segment_num</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected">reset_sub_segments_expected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_segmentation_event_id` <a name="reset_segmentation_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationEventId"></a>

```python
def reset_segmentation_event_id() -> None
```

##### `reset_segmentation_type_id` <a name="reset_segmentation_type_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationTypeId"></a>

```python
def reset_segmentation_type_id() -> None
```

##### `reset_segmentation_upid` <a name="reset_segmentation_upid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpid"></a>

```python
def reset_segmentation_upid() -> None
```

##### `reset_segmentation_upid_type` <a name="reset_segmentation_upid_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentationUpidType"></a>

```python
def reset_segmentation_upid_type() -> None
```

##### `reset_segment_num` <a name="reset_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentNum"></a>

```python
def reset_segment_num() -> None
```

##### `reset_segments_expected` <a name="reset_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSegmentsExpected"></a>

```python
def reset_segments_expected() -> None
```

##### `reset_sub_segment_num` <a name="reset_sub_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentNum"></a>

```python
def reset_sub_segment_num() -> None
```

##### `reset_sub_segments_expected` <a name="reset_sub_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.resetSubSegmentsExpected"></a>

```python
def reset_sub_segments_expected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput">segmentation_event_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput">segmentation_type_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput">segmentation_upid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput">segmentation_upid_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput">segment_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput">segments_expected_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput">sub_segment_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput">sub_segments_expected_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId">segmentation_event_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId">segmentation_type_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid">segmentation_upid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType">segmentation_upid_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum">segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected">segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum">sub_segment_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected">sub_segments_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segmentation_event_id_input`<sup>Optional</sup> <a name="segmentation_event_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventIdInput"></a>

```python
segmentation_event_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_type_id_input`<sup>Optional</sup> <a name="segmentation_type_id_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeIdInput"></a>

```python
segmentation_type_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_upid_input`<sup>Optional</sup> <a name="segmentation_upid_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidInput"></a>

```python
segmentation_upid_input: str
```

- *Type:* str

---

##### `segmentation_upid_type_input`<sup>Optional</sup> <a name="segmentation_upid_type_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidTypeInput"></a>

```python
segmentation_upid_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_num_input`<sup>Optional</sup> <a name="segment_num_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNumInput"></a>

```python
segment_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segments_expected_input`<sup>Optional</sup> <a name="segments_expected_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpectedInput"></a>

```python
segments_expected_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segment_num_input`<sup>Optional</sup> <a name="sub_segment_num_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNumInput"></a>

```python
sub_segment_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segments_expected_input`<sup>Optional</sup> <a name="sub_segments_expected_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpectedInput"></a>

```python
sub_segments_expected_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_event_id`<sup>Required</sup> <a name="segmentation_event_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationEventId"></a>

```python
segmentation_event_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_type_id`<sup>Required</sup> <a name="segmentation_type_id" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationTypeId"></a>

```python
segmentation_type_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segmentation_upid`<sup>Required</sup> <a name="segmentation_upid" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpid"></a>

```python
segmentation_upid: str
```

- *Type:* str

---

##### `segmentation_upid_type`<sup>Required</sup> <a name="segmentation_upid_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentationUpidType"></a>

```python
segmentation_upid_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_num`<sup>Required</sup> <a name="segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentNum"></a>

```python
segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segments_expected`<sup>Required</sup> <a name="segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.segmentsExpected"></a>

```python
segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segment_num`<sup>Required</sup> <a name="sub_segment_num" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentNum"></a>

```python
sub_segment_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sub_segments_expected`<sup>Required</sup> <a name="sub_segments_expected" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.subSegmentsExpected"></a>

```python
sub_segments_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors">MediatailorProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptors</a>

---


### MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis">reset_end_offset_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis">reset_start_offset_millis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_offset_millis` <a name="reset_end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetEndOffsetMillis"></a>

```python
def reset_end_offset_millis() -> None
```

##### `reset_start_offset_millis` <a name="reset_start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.resetStartOffsetMillis"></a>

```python
def reset_start_offset_millis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput">end_offset_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput">start_offset_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_offset_millis_input`<sup>Optional</sup> <a name="end_offset_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillisInput"></a>

```python
end_offset_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis_input`<sup>Optional</sup> <a name="start_offset_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillisInput"></a>

```python
start_offset_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_offset_millis`<sup>Required</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis`<sup>Required</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMediaClipRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---


### MediatailorProgramAudienceMediaAlternateMediaList <a name="MediatailorProgramAudienceMediaAlternateMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAudienceMediaAlternateMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]

---


### MediatailorProgramAudienceMediaAlternateMediaOutputReference <a name="MediatailorProgramAudienceMediaAlternateMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks">put_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange">put_clip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks">reset_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange">reset_clip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis">reset_duration_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName">reset_live_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis">reset_scheduled_start_time_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName">reset_source_location_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName">reset_vod_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_breaks` <a name="put_ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks"></a>

```python
def put_ad_breaks(
  value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]

---

##### `put_clip_range` <a name="put_clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange"></a>

```python
def put_clip_range(
  end_offset_millis: typing.Union[int, float] = None,
  start_offset_millis: typing.Union[int, float] = None
) -> None
```

###### `end_offset_millis`<sup>Optional</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange.parameter.endOffsetMillis"></a>

- *Type:* typing.Union[int, float]

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

###### `start_offset_millis`<sup>Optional</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.putClipRange.parameter.startOffsetMillis"></a>

- *Type:* typing.Union[int, float]

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

##### `reset_ad_breaks` <a name="reset_ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetAdBreaks"></a>

```python
def reset_ad_breaks() -> None
```

##### `reset_clip_range` <a name="reset_clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetClipRange"></a>

```python
def reset_clip_range() -> None
```

##### `reset_duration_millis` <a name="reset_duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetDurationMillis"></a>

```python
def reset_duration_millis() -> None
```

##### `reset_live_source_name` <a name="reset_live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetLiveSourceName"></a>

```python
def reset_live_source_name() -> None
```

##### `reset_scheduled_start_time_millis` <a name="reset_scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetScheduledStartTimeMillis"></a>

```python
def reset_scheduled_start_time_millis() -> None
```

##### `reset_source_location_name` <a name="reset_source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetSourceLocationName"></a>

```python
def reset_source_location_name() -> None
```

##### `reset_vod_source_name` <a name="reset_vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.resetVodSourceName"></a>

```python
def reset_vod_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput">ad_breaks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput">clip_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput">duration_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput">live_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput">scheduled_start_time_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput">vod_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName">live_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis">scheduled_start_time_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName">vod_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaks"></a>

```python
ad_breaks: MediatailorProgramAudienceMediaAlternateMediaAdBreaksList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaksList">MediatailorProgramAudienceMediaAlternateMediaAdBreaksList</a>

---

##### `clip_range`<sup>Required</sup> <a name="clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRange"></a>

```python
clip_range: MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference">MediatailorProgramAudienceMediaAlternateMediaClipRangeOutputReference</a>

---

##### `ad_breaks_input`<sup>Optional</sup> <a name="ad_breaks_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.adBreaksInput"></a>

```python
ad_breaks_input: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMediaAdBreaks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaAdBreaks">MediatailorProgramAudienceMediaAlternateMediaAdBreaks</a>]

---

##### `clip_range_input`<sup>Optional</sup> <a name="clip_range_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.clipRangeInput"></a>

```python
clip_range_input: IResolvable | MediatailorProgramAudienceMediaAlternateMediaClipRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaClipRange">MediatailorProgramAudienceMediaAlternateMediaClipRange</a>

---

##### `duration_millis_input`<sup>Optional</sup> <a name="duration_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillisInput"></a>

```python
duration_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `live_source_name_input`<sup>Optional</sup> <a name="live_source_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceNameInput"></a>

```python
live_source_name_input: str
```

- *Type:* str

---

##### `scheduled_start_time_millis_input`<sup>Optional</sup> <a name="scheduled_start_time_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillisInput"></a>

```python
scheduled_start_time_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `vod_source_name_input`<sup>Optional</sup> <a name="vod_source_name_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceNameInput"></a>

```python
vod_source_name_input: str
```

- *Type:* str

---

##### `duration_millis`<sup>Required</sup> <a name="duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

---

##### `scheduled_start_time_millis`<sup>Required</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.scheduledStartTimeMillis"></a>

```python
scheduled_start_time_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `vod_source_name`<sup>Required</sup> <a name="vod_source_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.vodSourceName"></a>

```python
vod_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMediaAlternateMedia
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>

---


### MediatailorProgramAudienceMediaList <a name="MediatailorProgramAudienceMediaList" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorProgramAudienceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorProgramAudienceMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>]

---


### MediatailorProgramAudienceMediaOutputReference <a name="MediatailorProgramAudienceMediaOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramAudienceMediaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia">put_alternate_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia">reset_alternate_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alternate_media` <a name="put_alternate_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia"></a>

```python
def put_alternate_media(
  value: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMedia]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.putAlternateMedia.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]

---

##### `reset_alternate_media` <a name="reset_alternate_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAlternateMedia"></a>

```python
def reset_alternate_media() -> None
```

##### `reset_audience` <a name="reset_audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia">alternate_media</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput">alternate_media_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alternate_media`<sup>Required</sup> <a name="alternate_media" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMedia"></a>

```python
alternate_media: MediatailorProgramAudienceMediaAlternateMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMediaList">MediatailorProgramAudienceMediaAlternateMediaList</a>

---

##### `alternate_media_input`<sup>Optional</sup> <a name="alternate_media_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.alternateMediaInput"></a>

```python
alternate_media_input: IResolvable | typing.List[MediatailorProgramAudienceMediaAlternateMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaAlternateMedia">MediatailorProgramAudienceMediaAlternateMedia</a>]

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMediaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramAudienceMedia
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramAudienceMedia">MediatailorProgramAudienceMedia</a>

---


### MediatailorProgramClipRangeOutputReference <a name="MediatailorProgramClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramClipRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_offset_millis`<sup>Required</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis`<sup>Required</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRangeOutputReference.property.internalValue"></a>

```python
internal_value: MediatailorProgramClipRange
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramClipRange">MediatailorProgramClipRange</a>

---


### MediatailorProgramScheduleConfigurationClipRangeOutputReference <a name="MediatailorProgramScheduleConfigurationClipRangeOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis">reset_end_offset_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis">reset_start_offset_millis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_offset_millis` <a name="reset_end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetEndOffsetMillis"></a>

```python
def reset_end_offset_millis() -> None
```

##### `reset_start_offset_millis` <a name="reset_start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.resetStartOffsetMillis"></a>

```python
def reset_start_offset_millis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput">end_offset_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput">start_offset_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis">end_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis">start_offset_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_offset_millis_input`<sup>Optional</sup> <a name="end_offset_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillisInput"></a>

```python
end_offset_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis_input`<sup>Optional</sup> <a name="start_offset_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillisInput"></a>

```python
start_offset_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_offset_millis`<sup>Required</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.endOffsetMillis"></a>

```python
end_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_offset_millis`<sup>Required</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.startOffsetMillis"></a>

```python
start_offset_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramScheduleConfigurationClipRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---


### MediatailorProgramScheduleConfigurationOutputReference <a name="MediatailorProgramScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange">put_clip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition">put_transition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange">reset_clip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition">reset_transition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clip_range` <a name="put_clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange"></a>

```python
def put_clip_range(
  end_offset_millis: typing.Union[int, float] = None,
  start_offset_millis: typing.Union[int, float] = None
) -> None
```

###### `end_offset_millis`<sup>Optional</sup> <a name="end_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange.parameter.endOffsetMillis"></a>

- *Type:* typing.Union[int, float]

The end offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#end_offset_millis MediatailorProgram#end_offset_millis}

---

###### `start_offset_millis`<sup>Optional</sup> <a name="start_offset_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putClipRange.parameter.startOffsetMillis"></a>

- *Type:* typing.Union[int, float]

The start offset of the clip range, in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#start_offset_millis MediatailorProgram#start_offset_millis}

---

##### `put_transition` <a name="put_transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition"></a>

```python
def put_transition(
  duration_millis: typing.Union[int, float] = None,
  relative_position: str = None,
  relative_program: str = None,
  scheduled_start_time_millis: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `duration_millis`<sup>Optional</sup> <a name="duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.durationMillis"></a>

- *Type:* typing.Union[int, float]

The duration of the live program in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#duration_millis MediatailorProgram#duration_millis}

---

###### `relative_position`<sup>Optional</sup> <a name="relative_position" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.relativePosition"></a>

- *Type:* str

The position where this program will be inserted relative to the RelativePosition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_position MediatailorProgram#relative_position}

---

###### `relative_program`<sup>Optional</sup> <a name="relative_program" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.relativeProgram"></a>

- *Type:* str

The name of the program that this program will be inserted next to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#relative_program MediatailorProgram#relative_program}

---

###### `scheduled_start_time_millis`<sup>Optional</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.scheduledStartTimeMillis"></a>

- *Type:* typing.Union[int, float]

The date and time that the program is scheduled to start, in epoch milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#scheduled_start_time_millis MediatailorProgram#scheduled_start_time_millis}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.putTransition.parameter.type"></a>

- *Type:* str

Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediatailor_program#type MediatailorProgram#type}

---

##### `reset_clip_range` <a name="reset_clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetClipRange"></a>

```python
def reset_clip_range() -> None
```

##### `reset_transition` <a name="reset_transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.resetTransition"></a>

```python
def reset_transition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange">clip_range</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput">clip_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput">transition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clip_range`<sup>Required</sup> <a name="clip_range" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRange"></a>

```python
clip_range: MediatailorProgramScheduleConfigurationClipRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRangeOutputReference">MediatailorProgramScheduleConfigurationClipRangeOutputReference</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transition"></a>

```python
transition: MediatailorProgramScheduleConfigurationTransitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference">MediatailorProgramScheduleConfigurationTransitionOutputReference</a>

---

##### `clip_range_input`<sup>Optional</sup> <a name="clip_range_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.clipRangeInput"></a>

```python
clip_range_input: IResolvable | MediatailorProgramScheduleConfigurationClipRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationClipRange">MediatailorProgramScheduleConfigurationClipRange</a>

---

##### `transition_input`<sup>Optional</sup> <a name="transition_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.transitionInput"></a>

```python
transition_input: IResolvable | MediatailorProgramScheduleConfigurationTransition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramScheduleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfiguration">MediatailorProgramScheduleConfiguration</a>

---


### MediatailorProgramScheduleConfigurationTransitionOutputReference <a name="MediatailorProgramScheduleConfigurationTransitionOutputReference" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_program

mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis">reset_duration_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition">reset_relative_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram">reset_relative_program</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis">reset_scheduled_start_time_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_millis` <a name="reset_duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetDurationMillis"></a>

```python
def reset_duration_millis() -> None
```

##### `reset_relative_position` <a name="reset_relative_position" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativePosition"></a>

```python
def reset_relative_position() -> None
```

##### `reset_relative_program` <a name="reset_relative_program" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetRelativeProgram"></a>

```python
def reset_relative_program() -> None
```

##### `reset_scheduled_start_time_millis` <a name="reset_scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetScheduledStartTimeMillis"></a>

```python
def reset_scheduled_start_time_millis() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput">duration_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput">relative_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput">relative_program_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput">scheduled_start_time_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis">duration_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition">relative_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram">relative_program</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis">scheduled_start_time_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_millis_input`<sup>Optional</sup> <a name="duration_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillisInput"></a>

```python
duration_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relative_position_input`<sup>Optional</sup> <a name="relative_position_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePositionInput"></a>

```python
relative_position_input: str
```

- *Type:* str

---

##### `relative_program_input`<sup>Optional</sup> <a name="relative_program_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgramInput"></a>

```python
relative_program_input: str
```

- *Type:* str

---

##### `scheduled_start_time_millis_input`<sup>Optional</sup> <a name="scheduled_start_time_millis_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillisInput"></a>

```python
scheduled_start_time_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `duration_millis`<sup>Required</sup> <a name="duration_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.durationMillis"></a>

```python
duration_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `relative_position`<sup>Required</sup> <a name="relative_position" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativePosition"></a>

```python
relative_position: str
```

- *Type:* str

---

##### `relative_program`<sup>Required</sup> <a name="relative_program" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.relativeProgram"></a>

```python
relative_program: str
```

- *Type:* str

---

##### `scheduled_start_time_millis`<sup>Required</sup> <a name="scheduled_start_time_millis" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.scheduledStartTimeMillis"></a>

```python
scheduled_start_time_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorProgramScheduleConfigurationTransition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorProgram.MediatailorProgramScheduleConfigurationTransition">MediatailorProgramScheduleConfigurationTransition</a>

---



