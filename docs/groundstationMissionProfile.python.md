# `groundstationMissionProfile` Submodule <a name="`groundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.groundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationMissionProfile <a name="GroundstationMissionProfile" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataflow_edges: IResolvable | typing.List[GroundstationMissionProfileDataflowEdges],
  minimum_viable_contact_duration_seconds: typing.Union[int, float],
  name: str,
  tracking_config_arn: str,
  contact_post_pass_duration_seconds: typing.Union[int, float] = None,
  contact_pre_pass_duration_seconds: typing.Union[int, float] = None,
  streams_kms_key: GroundstationMissionProfileStreamsKmsKey = None,
  streams_kms_role: str = None,
  tags: IResolvable | typing.List[GroundstationMissionProfileTags] = None,
  telemetry_sink_config_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dataflowEdges">dataflow_edges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.minimumViableContactDurationSeconds">minimum_viable_contact_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.trackingConfigArn">tracking_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPostPassDurationSeconds">contact_post_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPrePassDurationSeconds">contact_pre_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsKey">streams_kms_key</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsRole">streams_kms_role</a></code> | <code>str</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.telemetrySinkConfigArn">telemetry_sink_config_arn</a></code> | <code>str</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataflow_edges`<sup>Required</sup> <a name="dataflow_edges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.dataflowEdges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `minimum_viable_contact_duration_seconds`<sup>Required</sup> <a name="minimum_viable_contact_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.minimumViableContactDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.name"></a>

- *Type:* str

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `tracking_config_arn`<sup>Required</sup> <a name="tracking_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.trackingConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `contact_post_pass_duration_seconds`<sup>Optional</sup> <a name="contact_post_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPostPassDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `contact_pre_pass_duration_seconds`<sup>Optional</sup> <a name="contact_pre_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.contactPrePassDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `streams_kms_key`<sup>Optional</sup> <a name="streams_kms_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `streams_kms_role`<sup>Optional</sup> <a name="streams_kms_role" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.streamsKmsRole"></a>

- *Type:* str

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `telemetry_sink_config_arn`<sup>Optional</sup> <a name="telemetry_sink_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.telemetrySinkConfigArn"></a>

- *Type:* str

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges">put_dataflow_edges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey">put_streams_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds">reset_contact_post_pass_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds">reset_contact_pre_pass_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey">reset_streams_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole">reset_streams_kms_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn">reset_telemetry_sink_config_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dataflow_edges` <a name="put_dataflow_edges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges"></a>

```python
def put_dataflow_edges(
  value: IResolvable | typing.List[GroundstationMissionProfileDataflowEdges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]

---

##### `put_streams_kms_key` <a name="put_streams_kms_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey"></a>

```python
def put_streams_kms_key(
  kms_alias_arn: str = None,
  kms_alias_name: str = None,
  kms_key_arn: str = None
) -> None
```

###### `kms_alias_arn`<sup>Optional</sup> <a name="kms_alias_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.kmsAliasArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}.

---

###### `kms_alias_name`<sup>Optional</sup> <a name="kms_alias_name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.kmsAliasName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GroundstationMissionProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]

---

##### `reset_contact_post_pass_duration_seconds` <a name="reset_contact_post_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds"></a>

```python
def reset_contact_post_pass_duration_seconds() -> None
```

##### `reset_contact_pre_pass_duration_seconds` <a name="reset_contact_pre_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds"></a>

```python
def reset_contact_pre_pass_duration_seconds() -> None
```

##### `reset_streams_kms_key` <a name="reset_streams_kms_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey"></a>

```python
def reset_streams_kms_key() -> None
```

##### `reset_streams_kms_role` <a name="reset_streams_kms_role" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole"></a>

```python
def reset_streams_kms_role() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_telemetry_sink_config_arn` <a name="reset_telemetry_sink_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn"></a>

```python
def reset_telemetry_sink_config_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroundstationMissionProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges">dataflow_edges</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId">mission_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey">streams_kms_key</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput">contact_post_pass_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput">contact_pre_pass_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput">dataflow_edges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput">minimum_viable_contact_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput">streams_kms_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput">streams_kms_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput">telemetry_sink_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput">tracking_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds">contact_post_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds">contact_pre_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds">minimum_viable_contact_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole">streams_kms_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn">telemetry_sink_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn">tracking_config_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dataflow_edges`<sup>Required</sup> <a name="dataflow_edges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges"></a>

```python
dataflow_edges: GroundstationMissionProfileDataflowEdgesList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mission_profile_id`<sup>Required</sup> <a name="mission_profile_id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId"></a>

```python
mission_profile_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `streams_kms_key`<sup>Required</sup> <a name="streams_kms_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey"></a>

```python
streams_kms_key: GroundstationMissionProfileStreamsKmsKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags"></a>

```python
tags: GroundstationMissionProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a>

---

##### `contact_post_pass_duration_seconds_input`<sup>Optional</sup> <a name="contact_post_pass_duration_seconds_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput"></a>

```python
contact_post_pass_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contact_pre_pass_duration_seconds_input`<sup>Optional</sup> <a name="contact_pre_pass_duration_seconds_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput"></a>

```python
contact_pre_pass_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dataflow_edges_input`<sup>Optional</sup> <a name="dataflow_edges_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput"></a>

```python
dataflow_edges_input: IResolvable | typing.List[GroundstationMissionProfileDataflowEdges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]

---

##### `minimum_viable_contact_duration_seconds_input`<sup>Optional</sup> <a name="minimum_viable_contact_duration_seconds_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput"></a>

```python
minimum_viable_contact_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `streams_kms_key_input`<sup>Optional</sup> <a name="streams_kms_key_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput"></a>

```python
streams_kms_key_input: IResolvable | GroundstationMissionProfileStreamsKmsKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `streams_kms_role_input`<sup>Optional</sup> <a name="streams_kms_role_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput"></a>

```python
streams_kms_role_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GroundstationMissionProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]

---

##### `telemetry_sink_config_arn_input`<sup>Optional</sup> <a name="telemetry_sink_config_arn_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput"></a>

```python
telemetry_sink_config_arn_input: str
```

- *Type:* str

---

##### `tracking_config_arn_input`<sup>Optional</sup> <a name="tracking_config_arn_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput"></a>

```python
tracking_config_arn_input: str
```

- *Type:* str

---

##### `contact_post_pass_duration_seconds`<sup>Required</sup> <a name="contact_post_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```python
contact_post_pass_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contact_pre_pass_duration_seconds`<sup>Required</sup> <a name="contact_pre_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```python
contact_pre_pass_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_viable_contact_duration_seconds`<sup>Required</sup> <a name="minimum_viable_contact_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```python
minimum_viable_contact_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `streams_kms_role`<sup>Required</sup> <a name="streams_kms_role" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole"></a>

```python
streams_kms_role: str
```

- *Type:* str

---

##### `telemetry_sink_config_arn`<sup>Required</sup> <a name="telemetry_sink_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```python
telemetry_sink_config_arn: str
```

- *Type:* str

---

##### `tracking_config_arn`<sup>Required</sup> <a name="tracking_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn"></a>

```python
tracking_config_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationMissionProfileConfig <a name="GroundstationMissionProfileConfig" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataflow_edges: IResolvable | typing.List[GroundstationMissionProfileDataflowEdges],
  minimum_viable_contact_duration_seconds: typing.Union[int, float],
  name: str,
  tracking_config_arn: str,
  contact_post_pass_duration_seconds: typing.Union[int, float] = None,
  contact_pre_pass_duration_seconds: typing.Union[int, float] = None,
  streams_kms_key: GroundstationMissionProfileStreamsKmsKey = None,
  streams_kms_role: str = None,
  tags: IResolvable | typing.List[GroundstationMissionProfileTags] = None,
  telemetry_sink_config_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges">dataflow_edges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds">minimum_viable_contact_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name">name</a></code> | <code>str</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn">tracking_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds">contact_post_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds">contact_pre_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey">streams_kms_key</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole">streams_kms_role</a></code> | <code>str</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn">telemetry_sink_config_arn</a></code> | <code>str</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataflow_edges`<sup>Required</sup> <a name="dataflow_edges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges"></a>

```python
dataflow_edges: IResolvable | typing.List[GroundstationMissionProfileDataflowEdges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `minimum_viable_contact_duration_seconds`<sup>Required</sup> <a name="minimum_viable_contact_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds"></a>

```python
minimum_viable_contact_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `tracking_config_arn`<sup>Required</sup> <a name="tracking_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn"></a>

```python
tracking_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `contact_post_pass_duration_seconds`<sup>Optional</sup> <a name="contact_post_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds"></a>

```python
contact_post_pass_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `contact_pre_pass_duration_seconds`<sup>Optional</sup> <a name="contact_pre_pass_duration_seconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds"></a>

```python
contact_pre_pass_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `streams_kms_key`<sup>Optional</sup> <a name="streams_kms_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey"></a>

```python
streams_kms_key: GroundstationMissionProfileStreamsKmsKey
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `streams_kms_role`<sup>Optional</sup> <a name="streams_kms_role" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole"></a>

```python
streams_kms_role: str
```

- *Type:* str

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GroundstationMissionProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `telemetry_sink_config_arn`<sup>Optional</sup> <a name="telemetry_sink_config_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn"></a>

```python
telemetry_sink_config_arn: str
```

- *Type:* str

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

### GroundstationMissionProfileDataflowEdges <a name="GroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileDataflowEdges(
  destination: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}.

---

### GroundstationMissionProfileStreamsKmsKey <a name="GroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey(
  kms_alias_arn: str = None,
  kms_alias_name: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn">kms_alias_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName">kms_alias_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}. |

---

##### `kms_alias_arn`<sup>Optional</sup> <a name="kms_alias_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn"></a>

```python
kms_alias_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}.

---

##### `kms_alias_name`<sup>Optional</sup> <a name="kms_alias_name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName"></a>

```python
kms_alias_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}.

---

### GroundstationMissionProfileTags <a name="GroundstationMissionProfileTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationMissionProfileDataflowEdgesList <a name="GroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroundstationMissionProfileDataflowEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GroundstationMissionProfileDataflowEdges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>]

---


### GroundstationMissionProfileDataflowEdgesOutputReference <a name="GroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GroundstationMissionProfileDataflowEdges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>

---


### GroundstationMissionProfileStreamsKmsKeyOutputReference <a name="GroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn">reset_kms_alias_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName">reset_kms_alias_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_alias_arn` <a name="reset_kms_alias_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn"></a>

```python
def reset_kms_alias_arn() -> None
```

##### `reset_kms_alias_name` <a name="reset_kms_alias_name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName"></a>

```python
def reset_kms_alias_name() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput">kms_alias_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput">kms_alias_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">kms_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">kms_alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_alias_arn_input`<sup>Optional</sup> <a name="kms_alias_arn_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput"></a>

```python
kms_alias_arn_input: str
```

- *Type:* str

---

##### `kms_alias_name_input`<sup>Optional</sup> <a name="kms_alias_name_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput"></a>

```python
kms_alias_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_alias_arn`<sup>Required</sup> <a name="kms_alias_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```python
kms_alias_arn: str
```

- *Type:* str

---

##### `kms_alias_name`<sup>Required</sup> <a name="kms_alias_name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```python
kms_alias_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GroundstationMissionProfileStreamsKmsKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---


### GroundstationMissionProfileTagsList <a name="GroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroundstationMissionProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GroundstationMissionProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>]

---


### GroundstationMissionProfileTagsOutputReference <a name="GroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import groundstation_mission_profile

groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GroundstationMissionProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>

---



