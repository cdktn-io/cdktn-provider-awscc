# `workspacesthinclientEnvironment` Submodule <a name="`workspacesthinclientEnvironment` Submodule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesthinclientEnvironment <a name="WorkspacesthinclientEnvironment" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment awscc_workspacesthinclient_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  desktop_arn: str,
  desired_software_set_id: str = None,
  desktop_endpoint: str = None,
  device_creation_tags: IResolvable | typing.List[WorkspacesthinclientEnvironmentDeviceCreationTags] = None,
  kms_key_arn: str = None,
  maintenance_window: WorkspacesthinclientEnvironmentMaintenanceWindow = None,
  name: str = None,
  software_set_update_mode: str = None,
  software_set_update_schedule: str = None,
  tags: IResolvable | typing.List[WorkspacesthinclientEnvironmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopArn">desktop_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desiredSoftwareSetId">desired_software_set_id</a></code> | <code>str</code> | The ID of the software set to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopEndpoint">desktop_endpoint</a></code> | <code>str</code> | The URL for the identity provider login (only for environments that use AppStream 2.0). |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.deviceCreationTags">device_creation_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]</code> | An array of key-value pairs to apply to the newly created devices for this environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | A specification for a time window to apply software updates. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateMode">software_set_update_mode</a></code> | <code>str</code> | An option to define which software updates to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateSchedule">software_set_update_schedule</a></code> | <code>str</code> | An option to define if software updates should be applied within a maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `desktop_arn`<sup>Required</sup> <a name="desktop_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#desktop_arn WorkspacesthinclientEnvironment#desktop_arn}

---

##### `desired_software_set_id`<sup>Optional</sup> <a name="desired_software_set_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desiredSoftwareSetId"></a>

- *Type:* str

The ID of the software set to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#desired_software_set_id WorkspacesthinclientEnvironment#desired_software_set_id}

---

##### `desktop_endpoint`<sup>Optional</sup> <a name="desktop_endpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopEndpoint"></a>

- *Type:* str

The URL for the identity provider login (only for environments that use AppStream 2.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#desktop_endpoint WorkspacesthinclientEnvironment#desktop_endpoint}

---

##### `device_creation_tags`<sup>Optional</sup> <a name="device_creation_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.deviceCreationTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]

An array of key-value pairs to apply to the newly created devices for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#device_creation_tags WorkspacesthinclientEnvironment#device_creation_tags}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#kms_key_arn WorkspacesthinclientEnvironment#kms_key_arn}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

A specification for a time window to apply software updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#maintenance_window WorkspacesthinclientEnvironment#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.name"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#name WorkspacesthinclientEnvironment#name}

---

##### `software_set_update_mode`<sup>Optional</sup> <a name="software_set_update_mode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateMode"></a>

- *Type:* str

An option to define which software updates to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#software_set_update_mode WorkspacesthinclientEnvironment#software_set_update_mode}

---

##### `software_set_update_schedule`<sup>Optional</sup> <a name="software_set_update_schedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateSchedule"></a>

- *Type:* str

An option to define if software updates should be applied within a maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule WorkspacesthinclientEnvironment#software_set_update_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#tags WorkspacesthinclientEnvironment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags">put_device_creation_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId">reset_desired_software_set_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint">reset_desktop_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags">reset_device_creation_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode">reset_software_set_update_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule">reset_software_set_update_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_device_creation_tags` <a name="put_device_creation_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags"></a>

```python
def put_device_creation_tags(
  value: IResolvable | typing.List[WorkspacesthinclientEnvironmentDeviceCreationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  apply_time_of: str = None,
  days_of_the_week: typing.List[str] = None,
  end_time_hour: typing.Union[int, float] = None,
  end_time_minute: typing.Union[int, float] = None,
  start_time_hour: typing.Union[int, float] = None,
  start_time_minute: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `apply_time_of`<sup>Optional</sup> <a name="apply_time_of" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.applyTimeOf"></a>

- *Type:* str

The desired time zone maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#apply_time_of WorkspacesthinclientEnvironment#apply_time_of}

---

###### `days_of_the_week`<sup>Optional</sup> <a name="days_of_the_week" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.daysOfTheWeek"></a>

- *Type:* typing.List[str]

The date of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#days_of_the_week WorkspacesthinclientEnvironment#days_of_the_week}

---

###### `end_time_hour`<sup>Optional</sup> <a name="end_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.endTimeHour"></a>

- *Type:* typing.Union[int, float]

The hour end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#end_time_hour WorkspacesthinclientEnvironment#end_time_hour}

---

###### `end_time_minute`<sup>Optional</sup> <a name="end_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.endTimeMinute"></a>

- *Type:* typing.Union[int, float]

The minute end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#end_time_minute WorkspacesthinclientEnvironment#end_time_minute}

---

###### `start_time_hour`<sup>Optional</sup> <a name="start_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.startTimeHour"></a>

- *Type:* typing.Union[int, float]

The hour start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#start_time_hour WorkspacesthinclientEnvironment#start_time_hour}

---

###### `start_time_minute`<sup>Optional</sup> <a name="start_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.startTimeMinute"></a>

- *Type:* typing.Union[int, float]

The minute start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#start_time_minute WorkspacesthinclientEnvironment#start_time_minute}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.type"></a>

- *Type:* str

The type of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#type WorkspacesthinclientEnvironment#type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspacesthinclientEnvironmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]

---

##### `reset_desired_software_set_id` <a name="reset_desired_software_set_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId"></a>

```python
def reset_desired_software_set_id() -> None
```

##### `reset_desktop_endpoint` <a name="reset_desktop_endpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint"></a>

```python
def reset_desktop_endpoint() -> None
```

##### `reset_device_creation_tags` <a name="reset_device_creation_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags"></a>

```python
def reset_device_creation_tags() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_software_set_update_mode` <a name="reset_software_set_update_mode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode"></a>

```python
def reset_software_set_update_mode() -> None
```

##### `reset_software_set_update_schedule` <a name="reset_software_set_update_schedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule"></a>

```python
def reset_software_set_update_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspacesthinclientEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspacesthinclientEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesthinclientEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode">activation_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType">desktop_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags">device_creation_tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId">pending_software_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion">pending_software_set_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount">registered_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus">software_set_compliance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput">desired_software_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput">desktop_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput">desktop_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput">device_creation_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput">software_set_update_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput">software_set_update_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId">desired_software_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn">desktop_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint">desktop_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode">software_set_update_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule">software_set_update_schedule</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `activation_code`<sup>Required</sup> <a name="activation_code" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode"></a>

```python
activation_code: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `desktop_type`<sup>Required</sup> <a name="desktop_type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType"></a>

```python
desktop_type: str
```

- *Type:* str

---

##### `device_creation_tags`<sup>Required</sup> <a name="device_creation_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags"></a>

```python
device_creation_tags: WorkspacesthinclientEnvironmentDeviceCreationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a>

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow"></a>

```python
maintenance_window: WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a>

---

##### `pending_software_set_id`<sup>Required</sup> <a name="pending_software_set_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId"></a>

```python
pending_software_set_id: str
```

- *Type:* str

---

##### `pending_software_set_version`<sup>Required</sup> <a name="pending_software_set_version" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion"></a>

```python
pending_software_set_version: str
```

- *Type:* str

---

##### `registered_devices_count`<sup>Required</sup> <a name="registered_devices_count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount"></a>

```python
registered_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_set_compliance_status`<sup>Required</sup> <a name="software_set_compliance_status" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus"></a>

```python
software_set_compliance_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags"></a>

```python
tags: WorkspacesthinclientEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `desired_software_set_id_input`<sup>Optional</sup> <a name="desired_software_set_id_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput"></a>

```python
desired_software_set_id_input: str
```

- *Type:* str

---

##### `desktop_arn_input`<sup>Optional</sup> <a name="desktop_arn_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput"></a>

```python
desktop_arn_input: str
```

- *Type:* str

---

##### `desktop_endpoint_input`<sup>Optional</sup> <a name="desktop_endpoint_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput"></a>

```python
desktop_endpoint_input: str
```

- *Type:* str

---

##### `device_creation_tags_input`<sup>Optional</sup> <a name="device_creation_tags_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput"></a>

```python
device_creation_tags_input: IResolvable | typing.List[WorkspacesthinclientEnvironmentDeviceCreationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: IResolvable | WorkspacesthinclientEnvironmentMaintenanceWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `software_set_update_mode_input`<sup>Optional</sup> <a name="software_set_update_mode_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput"></a>

```python
software_set_update_mode_input: str
```

- *Type:* str

---

##### `software_set_update_schedule_input`<sup>Optional</sup> <a name="software_set_update_schedule_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput"></a>

```python
software_set_update_schedule_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspacesthinclientEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]

---

##### `desired_software_set_id`<sup>Required</sup> <a name="desired_software_set_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId"></a>

```python
desired_software_set_id: str
```

- *Type:* str

---

##### `desktop_arn`<sup>Required</sup> <a name="desktop_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn"></a>

```python
desktop_arn: str
```

- *Type:* str

---

##### `desktop_endpoint`<sup>Required</sup> <a name="desktop_endpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint"></a>

```python
desktop_endpoint: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `software_set_update_mode`<sup>Required</sup> <a name="software_set_update_mode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode"></a>

```python
software_set_update_mode: str
```

- *Type:* str

---

##### `software_set_update_schedule`<sup>Required</sup> <a name="software_set_update_schedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule"></a>

```python
software_set_update_schedule: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesthinclientEnvironmentConfig <a name="WorkspacesthinclientEnvironmentConfig" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  desktop_arn: str,
  desired_software_set_id: str = None,
  desktop_endpoint: str = None,
  device_creation_tags: IResolvable | typing.List[WorkspacesthinclientEnvironmentDeviceCreationTags] = None,
  kms_key_arn: str = None,
  maintenance_window: WorkspacesthinclientEnvironmentMaintenanceWindow = None,
  name: str = None,
  software_set_update_mode: str = None,
  software_set_update_schedule: str = None,
  tags: IResolvable | typing.List[WorkspacesthinclientEnvironmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn">desktop_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId">desired_software_set_id</a></code> | <code>str</code> | The ID of the software set to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint">desktop_endpoint</a></code> | <code>str</code> | The URL for the identity provider login (only for environments that use AppStream 2.0). |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags">device_creation_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]</code> | An array of key-value pairs to apply to the newly created devices for this environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | A specification for a time window to apply software updates. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode">software_set_update_mode</a></code> | <code>str</code> | An option to define which software updates to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule">software_set_update_schedule</a></code> | <code>str</code> | An option to define if software updates should be applied within a maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `desktop_arn`<sup>Required</sup> <a name="desktop_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn"></a>

```python
desktop_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#desktop_arn WorkspacesthinclientEnvironment#desktop_arn}

---

##### `desired_software_set_id`<sup>Optional</sup> <a name="desired_software_set_id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId"></a>

```python
desired_software_set_id: str
```

- *Type:* str

The ID of the software set to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#desired_software_set_id WorkspacesthinclientEnvironment#desired_software_set_id}

---

##### `desktop_endpoint`<sup>Optional</sup> <a name="desktop_endpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint"></a>

```python
desktop_endpoint: str
```

- *Type:* str

The URL for the identity provider login (only for environments that use AppStream 2.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#desktop_endpoint WorkspacesthinclientEnvironment#desktop_endpoint}

---

##### `device_creation_tags`<sup>Optional</sup> <a name="device_creation_tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags"></a>

```python
device_creation_tags: IResolvable | typing.List[WorkspacesthinclientEnvironmentDeviceCreationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]

An array of key-value pairs to apply to the newly created devices for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#device_creation_tags WorkspacesthinclientEnvironment#device_creation_tags}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#kms_key_arn WorkspacesthinclientEnvironment#kms_key_arn}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow"></a>

```python
maintenance_window: WorkspacesthinclientEnvironmentMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

A specification for a time window to apply software updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#maintenance_window WorkspacesthinclientEnvironment#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#name WorkspacesthinclientEnvironment#name}

---

##### `software_set_update_mode`<sup>Optional</sup> <a name="software_set_update_mode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode"></a>

```python
software_set_update_mode: str
```

- *Type:* str

An option to define which software updates to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#software_set_update_mode WorkspacesthinclientEnvironment#software_set_update_mode}

---

##### `software_set_update_schedule`<sup>Optional</sup> <a name="software_set_update_schedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule"></a>

```python
software_set_update_schedule: str
```

- *Type:* str

An option to define if software updates should be applied within a maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule WorkspacesthinclientEnvironment#software_set_update_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspacesthinclientEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#tags WorkspacesthinclientEnvironment#tags}

---

### WorkspacesthinclientEnvironmentDeviceCreationTags <a name="WorkspacesthinclientEnvironmentDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

### WorkspacesthinclientEnvironmentMaintenanceWindow <a name="WorkspacesthinclientEnvironmentMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow(
  apply_time_of: str = None,
  days_of_the_week: typing.List[str] = None,
  end_time_hour: typing.Union[int, float] = None,
  end_time_minute: typing.Union[int, float] = None,
  start_time_hour: typing.Union[int, float] = None,
  start_time_minute: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf">apply_time_of</a></code> | <code>str</code> | The desired time zone maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek">days_of_the_week</a></code> | <code>typing.List[str]</code> | The date of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour">end_time_hour</a></code> | <code>typing.Union[int, float]</code> | The hour end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute">end_time_minute</a></code> | <code>typing.Union[int, float]</code> | The minute end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour">start_time_hour</a></code> | <code>typing.Union[int, float]</code> | The hour start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute">start_time_minute</a></code> | <code>typing.Union[int, float]</code> | The minute start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type">type</a></code> | <code>str</code> | The type of maintenance window. |

---

##### `apply_time_of`<sup>Optional</sup> <a name="apply_time_of" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf"></a>

```python
apply_time_of: str
```

- *Type:* str

The desired time zone maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#apply_time_of WorkspacesthinclientEnvironment#apply_time_of}

---

##### `days_of_the_week`<sup>Optional</sup> <a name="days_of_the_week" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek"></a>

```python
days_of_the_week: typing.List[str]
```

- *Type:* typing.List[str]

The date of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#days_of_the_week WorkspacesthinclientEnvironment#days_of_the_week}

---

##### `end_time_hour`<sup>Optional</sup> <a name="end_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour"></a>

```python
end_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#end_time_hour WorkspacesthinclientEnvironment#end_time_hour}

---

##### `end_time_minute`<sup>Optional</sup> <a name="end_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute"></a>

```python
end_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minute end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#end_time_minute WorkspacesthinclientEnvironment#end_time_minute}

---

##### `start_time_hour`<sup>Optional</sup> <a name="start_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour"></a>

```python
start_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#start_time_hour WorkspacesthinclientEnvironment#start_time_hour}

---

##### `start_time_minute`<sup>Optional</sup> <a name="start_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute"></a>

```python
start_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minute start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#start_time_minute WorkspacesthinclientEnvironment#start_time_minute}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type"></a>

```python
type: str
```

- *Type:* str

The type of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#type WorkspacesthinclientEnvironment#type}

---

### WorkspacesthinclientEnvironmentTags <a name="WorkspacesthinclientEnvironmentTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesthinclientEnvironmentDeviceCreationTagsList <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesthinclientEnvironmentDeviceCreationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>]

---


### WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesthinclientEnvironmentDeviceCreationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>

---


### WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference <a name="WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf">reset_apply_time_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek">reset_days_of_the_week</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour">reset_end_time_hour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute">reset_end_time_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour">reset_start_time_hour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute">reset_start_time_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apply_time_of` <a name="reset_apply_time_of" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf"></a>

```python
def reset_apply_time_of() -> None
```

##### `reset_days_of_the_week` <a name="reset_days_of_the_week" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek"></a>

```python
def reset_days_of_the_week() -> None
```

##### `reset_end_time_hour` <a name="reset_end_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour"></a>

```python
def reset_end_time_hour() -> None
```

##### `reset_end_time_minute` <a name="reset_end_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute"></a>

```python
def reset_end_time_minute() -> None
```

##### `reset_start_time_hour` <a name="reset_start_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour"></a>

```python
def reset_start_time_hour() -> None
```

##### `reset_start_time_minute` <a name="reset_start_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute"></a>

```python
def reset_start_time_minute() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput">apply_time_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput">days_of_the_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput">end_time_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput">end_time_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput">start_time_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput">start_time_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf">apply_time_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek">days_of_the_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour">end_time_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute">end_time_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour">start_time_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute">start_time_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_time_of_input`<sup>Optional</sup> <a name="apply_time_of_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput"></a>

```python
apply_time_of_input: str
```

- *Type:* str

---

##### `days_of_the_week_input`<sup>Optional</sup> <a name="days_of_the_week_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput"></a>

```python
days_of_the_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `end_time_hour_input`<sup>Optional</sup> <a name="end_time_hour_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput"></a>

```python
end_time_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_minute_input`<sup>Optional</sup> <a name="end_time_minute_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput"></a>

```python
end_time_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_hour_input`<sup>Optional</sup> <a name="start_time_hour_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput"></a>

```python
start_time_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_minute_input`<sup>Optional</sup> <a name="start_time_minute_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput"></a>

```python
start_time_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `apply_time_of`<sup>Required</sup> <a name="apply_time_of" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf"></a>

```python
apply_time_of: str
```

- *Type:* str

---

##### `days_of_the_week`<sup>Required</sup> <a name="days_of_the_week" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek"></a>

```python
days_of_the_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `end_time_hour`<sup>Required</sup> <a name="end_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour"></a>

```python
end_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_minute`<sup>Required</sup> <a name="end_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute"></a>

```python
end_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_hour`<sup>Required</sup> <a name="start_time_hour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour"></a>

```python
start_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_minute`<sup>Required</sup> <a name="start_time_minute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute"></a>

```python
start_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesthinclientEnvironmentMaintenanceWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---


### WorkspacesthinclientEnvironmentTagsList <a name="WorkspacesthinclientEnvironmentTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesthinclientEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesthinclientEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>]

---


### WorkspacesthinclientEnvironmentTagsOutputReference <a name="WorkspacesthinclientEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesthinclient_environment

workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesthinclientEnvironmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>

---



