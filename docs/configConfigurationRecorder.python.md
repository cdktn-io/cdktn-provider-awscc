# `configConfigurationRecorder` Submodule <a name="`configConfigurationRecorder` Submodule" id="@cdktn/provider-awscc.configConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorder <a name="ConfigConfigurationRecorder" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder awscc_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorder(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  name: str = None,
  recording_group: ConfigConfigurationRecorderRecordingGroup = None,
  recording_mode: ConfigConfigurationRecorderRecordingMode = None,
  started_on_create: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingGroup">recording_group</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | Specifies which resource types are in scope for the configuration recorder to record. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingMode">recording_mode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | Specifies the default recording frequency for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.startedOnCreate">started_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Defaults to 'true'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.name"></a>

- *Type:* str

The name of the configuration recorder.

By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}

---

##### `recording_group`<sup>Optional</sup> <a name="recording_group" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingGroup"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

Specifies which resource types are in scope for the configuration recorder to record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `recording_mode`<sup>Optional</sup> <a name="recording_mode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingMode"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

Specifies the default recording frequency for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

##### `started_on_create`<sup>Optional</sup> <a name="started_on_create" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.startedOnCreate"></a>

- *Type:* bool | cdktn.IResolvable

Defaults to 'true'.

Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup">put_recording_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode">put_recording_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup">reset_recording_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode">reset_recording_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate">reset_started_on_create</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recording_group` <a name="put_recording_group" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup"></a>

```python
def put_recording_group(
  all_supported: bool | IResolvable = None,
  exclusion_by_resource_types: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes = None,
  include_global_resource_types: bool | IResolvable = None,
  recording_strategy: ConfigConfigurationRecorderRecordingGroupRecordingStrategy = None,
  resource_types: typing.List[str] = None
) -> None
```

###### `all_supported`<sup>Optional</sup> <a name="all_supported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.allSupported"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}

---

###### `exclusion_by_resource_types`<sup>Optional</sup> <a name="exclusion_by_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.exclusionByResourceTypes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}

---

###### `include_global_resource_types`<sup>Optional</sup> <a name="include_global_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.includeGlobalResourceTypes"></a>

- *Type:* bool | cdktn.IResolvable

This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}

---

###### `recording_strategy`<sup>Optional</sup> <a name="recording_strategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.recordingStrategy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

An object that specifies the recording strategy for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}

---

###### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

A comma-separated list that specifies which resource types AWS Config records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

##### `put_recording_mode` <a name="put_recording_mode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode"></a>

```python
def put_recording_mode(
  recording_frequency: str = None,
  recording_mode_overrides: IResolvable | typing.List[ConfigConfigurationRecorderRecordingModeRecordingModeOverrides] = None
) -> None
```

###### `recording_frequency`<sup>Optional</sup> <a name="recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode.parameter.recordingFrequency"></a>

- *Type:* str

The default recording frequency that AWS Config uses to record configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

###### `recording_mode_overrides`<sup>Optional</sup> <a name="recording_mode_overrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode.parameter.recordingModeOverrides"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]

An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode_overrides ConfigConfigurationRecorder#recording_mode_overrides}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_recording_group` <a name="reset_recording_group" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup"></a>

```python
def reset_recording_group() -> None
```

##### `reset_recording_mode` <a name="reset_recording_mode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode"></a>

```python
def reset_recording_mode() -> None
```

##### `reset_started_on_create` <a name="reset_started_on_create" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate"></a>

```python
def reset_started_on_create() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigConfigurationRecorder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigConfigurationRecorder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationRecorder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup">recording_group</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode">recording_mode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput">recording_group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput">recording_mode_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput">started_on_create_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate">started_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recording_group`<sup>Required</sup> <a name="recording_group" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup"></a>

```python
recording_group: ConfigConfigurationRecorderRecordingGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a>

---

##### `recording_mode`<sup>Required</sup> <a name="recording_mode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode"></a>

```python
recording_mode: ConfigConfigurationRecorderRecordingModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recording_group_input`<sup>Optional</sup> <a name="recording_group_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput"></a>

```python
recording_group_input: IResolvable | ConfigConfigurationRecorderRecordingGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `recording_mode_input`<sup>Optional</sup> <a name="recording_mode_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput"></a>

```python
recording_mode_input: IResolvable | ConfigConfigurationRecorderRecordingMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `started_on_create_input`<sup>Optional</sup> <a name="started_on_create_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput"></a>

```python
started_on_create_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `started_on_create`<sup>Required</sup> <a name="started_on_create" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate"></a>

```python
started_on_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationRecorderConfig <a name="ConfigConfigurationRecorderConfig" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  name: str = None,
  recording_group: ConfigConfigurationRecorderRecordingGroup = None,
  recording_mode: ConfigConfigurationRecorderRecordingMode = None,
  started_on_create: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name">name</a></code> | <code>str</code> | The name of the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup">recording_group</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | Specifies which resource types are in scope for the configuration recorder to record. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode">recording_mode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | Specifies the default recording frequency for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate">started_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Defaults to 'true'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the configuration recorder.

By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}

---

##### `recording_group`<sup>Optional</sup> <a name="recording_group" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup"></a>

```python
recording_group: ConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

Specifies which resource types are in scope for the configuration recorder to record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `recording_mode`<sup>Optional</sup> <a name="recording_mode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode"></a>

```python
recording_mode: ConfigConfigurationRecorderRecordingMode
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

Specifies the default recording frequency for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

##### `started_on_create`<sup>Optional</sup> <a name="started_on_create" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate"></a>

```python
started_on_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Defaults to 'true'.

Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}

---

### ConfigConfigurationRecorderRecordingGroup <a name="ConfigConfigurationRecorderRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup(
  all_supported: bool | IResolvable = None,
  exclusion_by_resource_types: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes = None,
  include_global_resource_types: bool | IResolvable = None,
  recording_strategy: ConfigConfigurationRecorderRecordingGroupRecordingStrategy = None,
  resource_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported">all_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes">exclusion_by_resource_types</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes">include_global_resource_types</a></code> | <code>bool \| cdktn.IResolvable</code> | This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy">recording_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | An object that specifies the recording strategy for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | A comma-separated list that specifies which resource types AWS Config records. |

---

##### `all_supported`<sup>Optional</sup> <a name="all_supported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported"></a>

```python
all_supported: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}

---

##### `exclusion_by_resource_types`<sup>Optional</sup> <a name="exclusion_by_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes"></a>

```python
exclusion_by_resource_types: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}

---

##### `include_global_resource_types`<sup>Optional</sup> <a name="include_global_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes"></a>

```python
include_global_resource_types: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}

---

##### `recording_strategy`<sup>Optional</sup> <a name="recording_strategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy"></a>

```python
recording_strategy: ConfigConfigurationRecorderRecordingGroupRecordingStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

An object that specifies the recording strategy for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

A comma-separated list that specifies which resource types AWS Config records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes(
  resource_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | A comma-separated list of resource types to exclude from recording by the configuration recorder. |

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

A comma-separated list of resource types to exclude from recording by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupRecordingStrategy <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy(
  use_only: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly">use_only</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}. |

---

##### `use_only`<sup>Optional</sup> <a name="use_only" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly"></a>

```python
use_only: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}.

---

### ConfigConfigurationRecorderRecordingMode <a name="ConfigConfigurationRecorderRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode(
  recording_frequency: str = None,
  recording_mode_overrides: IResolvable | typing.List[ConfigConfigurationRecorderRecordingModeRecordingModeOverrides] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency">recording_frequency</a></code> | <code>str</code> | The default recording frequency that AWS Config uses to record configuration changes. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides">recording_mode_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]</code> | An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode. |

---

##### `recording_frequency`<sup>Optional</sup> <a name="recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency"></a>

```python
recording_frequency: str
```

- *Type:* str

The default recording frequency that AWS Config uses to record configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `recording_mode_overrides`<sup>Optional</sup> <a name="recording_mode_overrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides"></a>

```python
recording_mode_overrides: IResolvable | typing.List[ConfigConfigurationRecorderRecordingModeRecordingModeOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]

An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_mode_overrides ConfigConfigurationRecorder#recording_mode_overrides}

---

### ConfigConfigurationRecorderRecordingModeRecordingModeOverrides <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides(
  description: str = None,
  recording_frequency: str = None,
  resource_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description">description</a></code> | <code>str</code> | A description that you provide for the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency">recording_frequency</a></code> | <code>str</code> | The recording frequency that will be applied to all the resource types specified in the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | A comma-separated list that specifies which resource types AWS Config includes in the override. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description"></a>

```python
description: str
```

- *Type:* str

A description that you provide for the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}

---

##### `recording_frequency`<sup>Optional</sup> <a name="recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency"></a>

```python
recording_frequency: str
```

- *Type:* str

The recording frequency that will be applied to all the resource types specified in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

A comma-separated list that specifies which resource types AWS Config includes in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---


### ConfigConfigurationRecorderRecordingGroupOutputReference <a name="ConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes">put_exclusion_by_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy">put_recording_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported">reset_all_supported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes">reset_exclusion_by_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes">reset_include_global_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy">reset_recording_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion_by_resource_types` <a name="put_exclusion_by_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes"></a>

```python
def put_exclusion_by_resource_types(
  resource_types: typing.List[str] = None
) -> None
```

###### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

A comma-separated list of resource types to exclude from recording by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

##### `put_recording_strategy` <a name="put_recording_strategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy"></a>

```python
def put_recording_strategy(
  use_only: str = None
) -> None
```

###### `use_only`<sup>Optional</sup> <a name="use_only" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy.parameter.useOnly"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}.

---

##### `reset_all_supported` <a name="reset_all_supported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported"></a>

```python
def reset_all_supported() -> None
```

##### `reset_exclusion_by_resource_types` <a name="reset_exclusion_by_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes"></a>

```python
def reset_exclusion_by_resource_types() -> None
```

##### `reset_include_global_resource_types` <a name="reset_include_global_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes"></a>

```python
def reset_include_global_resource_types() -> None
```

##### `reset_recording_strategy` <a name="reset_recording_strategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy"></a>

```python
def reset_recording_strategy() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes">exclusion_by_resource_types</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy">recording_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput">all_supported_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput">exclusion_by_resource_types_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput">include_global_resource_types_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput">recording_strategy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported">all_supported</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes">include_global_resource_types</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion_by_resource_types`<sup>Required</sup> <a name="exclusion_by_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes"></a>

```python
exclusion_by_resource_types: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a>

---

##### `recording_strategy`<sup>Required</sup> <a name="recording_strategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy"></a>

```python
recording_strategy: ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a>

---

##### `all_supported_input`<sup>Optional</sup> <a name="all_supported_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput"></a>

```python
all_supported_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclusion_by_resource_types_input`<sup>Optional</sup> <a name="exclusion_by_resource_types_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput"></a>

```python
exclusion_by_resource_types_input: IResolvable | ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---

##### `include_global_resource_types_input`<sup>Optional</sup> <a name="include_global_resource_types_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput"></a>

```python
include_global_resource_types_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recording_strategy_input`<sup>Optional</sup> <a name="recording_strategy_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput"></a>

```python
recording_strategy_input: IResolvable | ConfigConfigurationRecorderRecordingGroupRecordingStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_supported`<sup>Required</sup> <a name="all_supported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported"></a>

```python
all_supported: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_global_resource_types`<sup>Required</sup> <a name="include_global_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes"></a>

```python
include_global_resource_types: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationRecorderRecordingGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---


### ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly">reset_use_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_only` <a name="reset_use_only" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly"></a>

```python
def reset_use_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput">use_only_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly">use_only</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_only_input`<sup>Optional</sup> <a name="use_only_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput"></a>

```python
use_only_input: str
```

- *Type:* str

---

##### `use_only`<sup>Required</sup> <a name="use_only" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly"></a>

```python
use_only: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationRecorderRecordingGroupRecordingStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---


### ConfigConfigurationRecorderRecordingModeOutputReference <a name="ConfigConfigurationRecorderRecordingModeOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides">put_recording_mode_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency">reset_recording_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides">reset_recording_mode_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recording_mode_overrides` <a name="put_recording_mode_overrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides"></a>

```python
def put_recording_mode_overrides(
  value: IResolvable | typing.List[ConfigConfigurationRecorderRecordingModeRecordingModeOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]

---

##### `reset_recording_frequency` <a name="reset_recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency"></a>

```python
def reset_recording_frequency() -> None
```

##### `reset_recording_mode_overrides` <a name="reset_recording_mode_overrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides"></a>

```python
def reset_recording_mode_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides">recording_mode_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput">recording_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput">recording_mode_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency">recording_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recording_mode_overrides`<sup>Required</sup> <a name="recording_mode_overrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides"></a>

```python
recording_mode_overrides: ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a>

---

##### `recording_frequency_input`<sup>Optional</sup> <a name="recording_frequency_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput"></a>

```python
recording_frequency_input: str
```

- *Type:* str

---

##### `recording_mode_overrides_input`<sup>Optional</sup> <a name="recording_mode_overrides_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput"></a>

```python
recording_mode_overrides_input: IResolvable | typing.List[ConfigConfigurationRecorderRecordingModeRecordingModeOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]

---

##### `recording_frequency`<sup>Required</sup> <a name="recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency"></a>

```python
recording_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationRecorderRecordingMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConfigurationRecorderRecordingModeRecordingModeOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>]

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_configuration_recorder

configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency">reset_recording_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_recording_frequency` <a name="reset_recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency"></a>

```python
def reset_recording_frequency() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput">recording_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency">recording_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `recording_frequency_input`<sup>Optional</sup> <a name="recording_frequency_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput"></a>

```python
recording_frequency_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recording_frequency`<sup>Required</sup> <a name="recording_frequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency"></a>

```python
recording_frequency: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConfigurationRecorderRecordingModeRecordingModeOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>

---



