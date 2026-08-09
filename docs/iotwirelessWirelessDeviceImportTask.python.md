# `iotwirelessWirelessDeviceImportTask` Submodule <a name="`iotwirelessWirelessDeviceImportTask` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDeviceImportTask <a name="IotwirelessWirelessDeviceImportTask" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_name: str,
  sidewalk: IotwirelessWirelessDeviceImportTaskSidewalk,
  tags: IResolvable | typing.List[IotwirelessWirelessDeviceImportTaskTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.destinationName">destination_name</a></code> | <code>str</code> | Destination Name for import task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | sidewalk contain file for created device and role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.destinationName"></a>

- *Type:* str

Destination Name for import task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#destination_name IotwirelessWirelessDeviceImportTask#destination_name}

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.sidewalk"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

sidewalk contain file for created device and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk IotwirelessWirelessDeviceImportTask#sidewalk}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#tags IotwirelessWirelessDeviceImportTask#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk">put_sidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sidewalk` <a name="put_sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk"></a>

```python
def put_sidewalk(
  device_creation_file: str = None,
  role: str = None,
  sidewalk_manufacturing_sn: str = None
) -> None
```

###### `device_creation_file`<sup>Optional</sup> <a name="device_creation_file" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk.parameter.deviceCreationFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}.

---

###### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk.parameter.role"></a>

- *Type:* str

sidewalk role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#role IotwirelessWirelessDeviceImportTask#role}

---

###### `sidewalk_manufacturing_sn`<sup>Optional</sup> <a name="sidewalk_manufacturing_sn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk.parameter.sidewalkManufacturingSn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessWirelessDeviceImportTaskTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessWirelessDeviceImportTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessWirelessDeviceImportTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDeviceImportTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount">failed_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount">initialized_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount">onboarded_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount">pending_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId">wireless_device_import_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput">destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput">sidewalk_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName">destination_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `failed_imported_devices_count`<sup>Required</sup> <a name="failed_imported_devices_count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount"></a>

```python
failed_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initialized_imported_devices_count`<sup>Required</sup> <a name="initialized_imported_devices_count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount"></a>

```python
initialized_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `onboarded_imported_devices_count`<sup>Required</sup> <a name="onboarded_imported_devices_count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount"></a>

```python
onboarded_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_imported_devices_count`<sup>Required</sup> <a name="pending_imported_devices_count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount"></a>

```python
pending_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk"></a>

```python
sidewalk: IotwirelessWirelessDeviceImportTaskSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags"></a>

```python
tags: IotwirelessWirelessDeviceImportTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a>

---

##### `wireless_device_import_task_id`<sup>Required</sup> <a name="wireless_device_import_task_id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId"></a>

```python
wireless_device_import_task_id: str
```

- *Type:* str

---

##### `destination_name_input`<sup>Optional</sup> <a name="destination_name_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput"></a>

```python
destination_name_input: str
```

- *Type:* str

---

##### `sidewalk_input`<sup>Optional</sup> <a name="sidewalk_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput"></a>

```python
sidewalk_input: IResolvable | IotwirelessWirelessDeviceImportTaskSidewalk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessWirelessDeviceImportTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceImportTaskConfig <a name="IotwirelessWirelessDeviceImportTaskConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_name: str,
  sidewalk: IotwirelessWirelessDeviceImportTaskSidewalk,
  tags: IResolvable | typing.List[IotwirelessWirelessDeviceImportTaskTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName">destination_name</a></code> | <code>str</code> | Destination Name for import task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | sidewalk contain file for created device and role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

Destination Name for import task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#destination_name IotwirelessWirelessDeviceImportTask#destination_name}

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk"></a>

```python
sidewalk: IotwirelessWirelessDeviceImportTaskSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

sidewalk contain file for created device and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk IotwirelessWirelessDeviceImportTask#sidewalk}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessWirelessDeviceImportTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#tags IotwirelessWirelessDeviceImportTask#tags}

---

### IotwirelessWirelessDeviceImportTaskSidewalk <a name="IotwirelessWirelessDeviceImportTaskSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk(
  device_creation_file: str = None,
  role: str = None,
  sidewalk_manufacturing_sn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile">device_creation_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role">role</a></code> | <code>str</code> | sidewalk role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn">sidewalk_manufacturing_sn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}. |

---

##### `device_creation_file`<sup>Optional</sup> <a name="device_creation_file" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile"></a>

```python
device_creation_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role"></a>

```python
role: str
```

- *Type:* str

sidewalk role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#role IotwirelessWirelessDeviceImportTask#role}

---

##### `sidewalk_manufacturing_sn`<sup>Optional</sup> <a name="sidewalk_manufacturing_sn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn"></a>

```python
sidewalk_manufacturing_sn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}.

---

### IotwirelessWirelessDeviceImportTaskTags <a name="IotwirelessWirelessDeviceImportTaskTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#key IotwirelessWirelessDeviceImportTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_device_import_task#value IotwirelessWirelessDeviceImportTask#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceImportTaskSidewalkOutputReference <a name="IotwirelessWirelessDeviceImportTaskSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile">reset_device_creation_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn">reset_sidewalk_manufacturing_sn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device_creation_file` <a name="reset_device_creation_file" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile"></a>

```python
def reset_device_creation_file() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_sidewalk_manufacturing_sn` <a name="reset_sidewalk_manufacturing_sn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn"></a>

```python
def reset_sidewalk_manufacturing_sn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList">device_creation_file_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput">device_creation_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput">sidewalk_manufacturing_sn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile">device_creation_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn">sidewalk_manufacturing_sn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_creation_file_list`<sup>Required</sup> <a name="device_creation_file_list" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList"></a>

```python
device_creation_file_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_creation_file_input`<sup>Optional</sup> <a name="device_creation_file_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput"></a>

```python
device_creation_file_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `sidewalk_manufacturing_sn_input`<sup>Optional</sup> <a name="sidewalk_manufacturing_sn_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput"></a>

```python
sidewalk_manufacturing_sn_input: str
```

- *Type:* str

---

##### `device_creation_file`<sup>Required</sup> <a name="device_creation_file" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile"></a>

```python
device_creation_file: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `sidewalk_manufacturing_sn`<sup>Required</sup> <a name="sidewalk_manufacturing_sn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn"></a>

```python
sidewalk_manufacturing_sn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceImportTaskSidewalk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---


### IotwirelessWirelessDeviceImportTaskTagsList <a name="IotwirelessWirelessDeviceImportTaskTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessWirelessDeviceImportTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessWirelessDeviceImportTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>]

---


### IotwirelessWirelessDeviceImportTaskTagsOutputReference <a name="IotwirelessWirelessDeviceImportTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device_import_task

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceImportTaskTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>

---



