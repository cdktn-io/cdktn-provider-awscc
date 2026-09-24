# `mediaconvertJobTemplate` Submodule <a name="`mediaconvertJobTemplate` Submodule" id="@cdktn/provider-awscc.mediaconvertJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertJobTemplate <a name="MediaconvertJobTemplate" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  settings_json: str,
  acceleration_settings: MediaconvertJobTemplateAccelerationSettings = None,
  category: str = None,
  description: str = None,
  hop_destinations: IResolvable | typing.List[MediaconvertJobTemplateHopDestinations] = None,
  name: str = None,
  priority: typing.Union[int, float] = None,
  queue: str = None,
  status_update_interval: str = None,
  tags: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.settingsJson">settings_json</a></code> | <code>str</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.accelerationSettings">acceleration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.category">category</a></code> | <code>str</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.hopDestinations">hop_destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.queue">queue</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.statusUpdateInterval">status_update_interval</a></code> | <code>str</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.tags">tags</a></code> | <code>str</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `settings_json`<sup>Required</sup> <a name="settings_json" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.settingsJson"></a>

- *Type:* str

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `acceleration_settings`<sup>Optional</sup> <a name="acceleration_settings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.accelerationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.category"></a>

- *Type:* str

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.description"></a>

- *Type:* str

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `hop_destinations`<sup>Optional</sup> <a name="hop_destinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.hopDestinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.queue"></a>

- *Type:* str

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `status_update_interval`<sup>Optional</sup> <a name="status_update_interval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.statusUpdateInterval"></a>

- *Type:* str

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.tags"></a>

- *Type:* str

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings">put_acceleration_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations">put_hop_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings">reset_acceleration_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations">reset_hop_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue">reset_queue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval">reset_status_update_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_acceleration_settings` <a name="put_acceleration_settings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings"></a>

```python
def put_acceleration_settings(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings.parameter.mode"></a>

- *Type:* str

Specify the conditions when the service will run your job with accelerated transcoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}

---

##### `put_hop_destinations` <a name="put_hop_destinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations"></a>

```python
def put_hop_destinations(
  value: IResolvable | typing.List[MediaconvertJobTemplateHopDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]

---

##### `reset_acceleration_settings` <a name="reset_acceleration_settings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings"></a>

```python
def reset_acceleration_settings() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hop_destinations` <a name="reset_hop_destinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations"></a>

```python
def reset_hop_destinations() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_queue` <a name="reset_queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue"></a>

```python
def reset_queue() -> None
```

##### `reset_status_update_interval` <a name="reset_status_update_interval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval"></a>

```python
def reset_status_update_interval() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconvertJobTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconvertJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings">acceleration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations">hop_destinations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput">acceleration_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput">hop_destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput">queue_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput">settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput">status_update_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue">queue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson">settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval">status_update_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags">tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acceleration_settings`<sup>Required</sup> <a name="acceleration_settings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings"></a>

```python
acceleration_settings: MediaconvertJobTemplateAccelerationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `hop_destinations`<sup>Required</sup> <a name="hop_destinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations"></a>

```python
hop_destinations: MediaconvertJobTemplateHopDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `acceleration_settings_input`<sup>Optional</sup> <a name="acceleration_settings_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput"></a>

```python
acceleration_settings_input: IResolvable | MediaconvertJobTemplateAccelerationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hop_destinations_input`<sup>Optional</sup> <a name="hop_destinations_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput"></a>

```python
hop_destinations_input: IResolvable | typing.List[MediaconvertJobTemplateHopDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_input`<sup>Optional</sup> <a name="queue_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput"></a>

```python
queue_input: str
```

- *Type:* str

---

##### `settings_json_input`<sup>Optional</sup> <a name="settings_json_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput"></a>

```python
settings_json_input: str
```

- *Type:* str

---

##### `status_update_interval_input`<sup>Optional</sup> <a name="status_update_interval_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput"></a>

```python
status_update_interval_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue"></a>

```python
queue: str
```

- *Type:* str

---

##### `settings_json`<sup>Required</sup> <a name="settings_json" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson"></a>

```python
settings_json: str
```

- *Type:* str

---

##### `status_update_interval`<sup>Required</sup> <a name="status_update_interval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval"></a>

```python
status_update_interval: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertJobTemplateAccelerationSettings <a name="MediaconvertJobTemplateAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode">mode</a></code> | <code>str</code> | Specify the conditions when the service will run your job with accelerated transcoding. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specify the conditions when the service will run your job with accelerated transcoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}

---

### MediaconvertJobTemplateConfig <a name="MediaconvertJobTemplateConfig" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  settings_json: str,
  acceleration_settings: MediaconvertJobTemplateAccelerationSettings = None,
  category: str = None,
  description: str = None,
  hop_destinations: IResolvable | typing.List[MediaconvertJobTemplateHopDestinations] = None,
  name: str = None,
  priority: typing.Union[int, float] = None,
  queue: str = None,
  status_update_interval: str = None,
  tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson">settings_json</a></code> | <code>str</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings">acceleration_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category">category</a></code> | <code>str</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description">description</a></code> | <code>str</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations">hop_destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue">queue</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval">status_update_interval</a></code> | <code>str</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags">tags</a></code> | <code>str</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `settings_json`<sup>Required</sup> <a name="settings_json" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson"></a>

```python
settings_json: str
```

- *Type:* str

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `acceleration_settings`<sup>Optional</sup> <a name="acceleration_settings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings"></a>

```python
acceleration_settings: MediaconvertJobTemplateAccelerationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `hop_destinations`<sup>Optional</sup> <a name="hop_destinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations"></a>

```python
hop_destinations: IResolvable | typing.List[MediaconvertJobTemplateHopDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue"></a>

```python
queue: str
```

- *Type:* str

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `status_update_interval`<sup>Optional</sup> <a name="status_update_interval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval"></a>

```python
status_update_interval: str
```

- *Type:* str

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

### MediaconvertJobTemplateHopDestinations <a name="MediaconvertJobTemplateHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations(
  priority: typing.Union[int, float] = None,
  queue: str = None,
  wait_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Optional. A different relative priority for the job in the destination queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue">queue</a></code> | <code>str</code> | Optional. The destination queue for queue hopping. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes">wait_minutes</a></code> | <code>typing.Union[int, float]</code> | Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. A different relative priority for the job in the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue"></a>

```python
queue: str
```

- *Type:* str

Optional. The destination queue for queue hopping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `wait_minutes`<sup>Optional</sup> <a name="wait_minutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes"></a>

```python
wait_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#wait_minutes MediaconvertJobTemplate#wait_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconvertJobTemplateAccelerationSettingsOutputReference <a name="MediaconvertJobTemplateAccelerationSettingsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconvertJobTemplateAccelerationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---


### MediaconvertJobTemplateHopDestinationsList <a name="MediaconvertJobTemplateHopDestinationsList" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconvertJobTemplateHopDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconvertJobTemplateHopDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>]

---


### MediaconvertJobTemplateHopDestinationsOutputReference <a name="MediaconvertJobTemplateHopDestinationsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_job_template

mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue">reset_queue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes">reset_wait_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_queue` <a name="reset_queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue"></a>

```python
def reset_queue() -> None
```

##### `reset_wait_minutes` <a name="reset_wait_minutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes"></a>

```python
def reset_wait_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput">queue_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput">wait_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue">queue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes">wait_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_input`<sup>Optional</sup> <a name="queue_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput"></a>

```python
queue_input: str
```

- *Type:* str

---

##### `wait_minutes_input`<sup>Optional</sup> <a name="wait_minutes_input" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput"></a>

```python
wait_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue"></a>

```python
queue: str
```

- *Type:* str

---

##### `wait_minutes`<sup>Required</sup> <a name="wait_minutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes"></a>

```python
wait_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconvertJobTemplateHopDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>

---



