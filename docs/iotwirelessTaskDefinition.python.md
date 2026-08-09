# `iotwirelessTaskDefinition` Submodule <a name="`iotwirelessTaskDefinition` Submodule" id="@cdktn/provider-awscc.iotwirelessTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessTaskDefinition <a name="IotwirelessTaskDefinition" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_create_tasks: bool | IResolvable,
  lo_ra_wan_update_gateway_task_entry: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry = None,
  name: str = None,
  tags: IResolvable | typing.List[IotwirelessTaskDefinitionTags] = None,
  task_definition_type: str = None,
  update: IotwirelessTaskDefinitionUpdate = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.autoCreateTasks">auto_create_tasks</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to automatically create tasks using this task definition for all gateways with the specified current version. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.loRaWanUpdateGatewayTaskEntry">lo_ra_wan_update_gateway_task_entry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | The list of task definitions. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]</code> | A list of key-value pairs that contain metadata for the destination. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.taskDefinitionType">task_definition_type</a></code> | <code>str</code> | A filter to list only the wireless gateway task definitions that use this task definition type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | Information about the gateways to update. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_create_tasks`<sup>Required</sup> <a name="auto_create_tasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.autoCreateTasks"></a>

- *Type:* bool | cdktn.IResolvable

Whether to automatically create tasks using this task definition for all gateways with the specified current version.

If false, the task must me created by calling CreateWirelessGatewayTask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}

---

##### `lo_ra_wan_update_gateway_task_entry`<sup>Optional</sup> <a name="lo_ra_wan_update_gateway_task_entry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.loRaWanUpdateGatewayTaskEntry"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

The list of task definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.name"></a>

- *Type:* str

The name of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}

---

##### `task_definition_type`<sup>Optional</sup> <a name="task_definition_type" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.taskDefinitionType"></a>

- *Type:* str

A filter to list only the wireless gateway task definitions that use this task definition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.update"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

Information about the gateways to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry">put_lo_ra_wan_update_gateway_task_entry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate">put_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry">reset_lo_ra_wan_update_gateway_task_entry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType">reset_task_definition_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lo_ra_wan_update_gateway_task_entry` <a name="put_lo_ra_wan_update_gateway_task_entry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry"></a>

```python
def put_lo_ra_wan_update_gateway_task_entry(
  current_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion = None,
  update_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion = None
) -> None
```

###### `current_version`<sup>Optional</sup> <a name="current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry.parameter.currentVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

###### `update_version`<sup>Optional</sup> <a name="update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry.parameter.updateVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessTaskDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]

---

##### `put_update` <a name="put_update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate"></a>

```python
def put_update(
  lo_ra_wan: IotwirelessTaskDefinitionUpdateLoRaWan = None,
  update_data_role: str = None,
  update_data_source: str = None
) -> None
```

###### `lo_ra_wan`<sup>Optional</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}.

---

###### `update_data_role`<sup>Optional</sup> <a name="update_data_role" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate.parameter.updateDataRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}.

---

###### `update_data_source`<sup>Optional</sup> <a name="update_data_source" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate.parameter.updateDataSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}.

---

##### `reset_lo_ra_wan_update_gateway_task_entry` <a name="reset_lo_ra_wan_update_gateway_task_entry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry"></a>

```python
def reset_lo_ra_wan_update_gateway_task_entry() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_definition_type` <a name="reset_task_definition_type" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType"></a>

```python
def reset_task_definition_type() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate"></a>

```python
def reset_update() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessTaskDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry">lo_ra_wan_update_gateway_task_entry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId">task_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput">auto_create_tasks_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput">lo_ra_wan_update_gateway_task_entry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput">task_definition_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput">update_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks">auto_create_tasks</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType">task_definition_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lo_ra_wan_update_gateway_task_entry`<sup>Required</sup> <a name="lo_ra_wan_update_gateway_task_entry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry"></a>

```python
lo_ra_wan_update_gateway_task_entry: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags"></a>

```python
tags: IotwirelessTaskDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a>

---

##### `task_definition_id`<sup>Required</sup> <a name="task_definition_id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId"></a>

```python
task_definition_id: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update"></a>

```python
update: IotwirelessTaskDefinitionUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a>

---

##### `auto_create_tasks_input`<sup>Optional</sup> <a name="auto_create_tasks_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput"></a>

```python
auto_create_tasks_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `lo_ra_wan_update_gateway_task_entry_input`<sup>Optional</sup> <a name="lo_ra_wan_update_gateway_task_entry_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput"></a>

```python
lo_ra_wan_update_gateway_task_entry_input: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessTaskDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]

---

##### `task_definition_type_input`<sup>Optional</sup> <a name="task_definition_type_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput"></a>

```python
task_definition_type_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput"></a>

```python
update_input: IResolvable | IotwirelessTaskDefinitionUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `auto_create_tasks`<sup>Required</sup> <a name="auto_create_tasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks"></a>

```python
auto_create_tasks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `task_definition_type`<sup>Required</sup> <a name="task_definition_type" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType"></a>

```python
task_definition_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessTaskDefinitionConfig <a name="IotwirelessTaskDefinitionConfig" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_create_tasks: bool | IResolvable,
  lo_ra_wan_update_gateway_task_entry: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry = None,
  name: str = None,
  tags: IResolvable | typing.List[IotwirelessTaskDefinitionTags] = None,
  task_definition_type: str = None,
  update: IotwirelessTaskDefinitionUpdate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks">auto_create_tasks</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to automatically create tasks using this task definition for all gateways with the specified current version. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry">lo_ra_wan_update_gateway_task_entry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | The list of task definitions. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name">name</a></code> | <code>str</code> | The name of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]</code> | A list of key-value pairs that contain metadata for the destination. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType">task_definition_type</a></code> | <code>str</code> | A filter to list only the wireless gateway task definitions that use this task definition type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | Information about the gateways to update. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_create_tasks`<sup>Required</sup> <a name="auto_create_tasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks"></a>

```python
auto_create_tasks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to automatically create tasks using this task definition for all gateways with the specified current version.

If false, the task must me created by calling CreateWirelessGatewayTask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}

---

##### `lo_ra_wan_update_gateway_task_entry`<sup>Optional</sup> <a name="lo_ra_wan_update_gateway_task_entry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry"></a>

```python
lo_ra_wan_update_gateway_task_entry: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

The list of task definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessTaskDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}

---

##### `task_definition_type`<sup>Optional</sup> <a name="task_definition_type" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType"></a>

```python
task_definition_type: str
```

- *Type:* str

A filter to list only the wireless gateway task definitions that use this task definition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update"></a>

```python
update: IotwirelessTaskDefinitionUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

Information about the gateways to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry(
  current_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion = None,
  update_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion">current_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion">update_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `current_version`<sup>Optional</sup> <a name="current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion"></a>

```python
current_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `update_version`<sup>Optional</sup> <a name="update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion"></a>

```python
update_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion(
  model: str = None,
  package_version: str = None,
  station: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station">station</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station"></a>

```python
station: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion(
  model: str = None,
  package_version: str = None,
  station: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station">station</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station"></a>

```python
station: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionTags <a name="IotwirelessTaskDefinitionTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}.

---

### IotwirelessTaskDefinitionUpdate <a name="IotwirelessTaskDefinitionUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate(
  lo_ra_wan: IotwirelessTaskDefinitionUpdateLoRaWan = None,
  update_data_role: str = None,
  update_data_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole">update_data_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource">update_data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}. |

---

##### `lo_ra_wan`<sup>Optional</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessTaskDefinitionUpdateLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}.

---

##### `update_data_role`<sup>Optional</sup> <a name="update_data_role" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole"></a>

```python
update_data_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}.

---

##### `update_data_source`<sup>Optional</sup> <a name="update_data_source" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource"></a>

```python
update_data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}.

---

### IotwirelessTaskDefinitionUpdateLoRaWan <a name="IotwirelessTaskDefinitionUpdateLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan(
  current_version: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion = None,
  sig_key_crc: typing.Union[int, float] = None,
  update_signature: str = None,
  update_version: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion">current_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc">sig_key_crc</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature">update_signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion">update_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `current_version`<sup>Optional</sup> <a name="current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion"></a>

```python
current_version: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `sig_key_crc`<sup>Optional</sup> <a name="sig_key_crc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc"></a>

```python
sig_key_crc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}.

---

##### `update_signature`<sup>Optional</sup> <a name="update_signature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature"></a>

```python
update_signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}.

---

##### `update_version`<sup>Optional</sup> <a name="update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion"></a>

```python
update_version: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion(
  model: str = None,
  package_version: str = None,
  station: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station">station</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station"></a>

```python
station: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion(
  model: str = None,
  package_version: str = None,
  station: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion">package_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station">station</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station"></a>

```python
station: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion">reset_package_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation">reset_station</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```

##### `reset_station` <a name="reset_station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation"></a>

```python
def reset_station() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput">station_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station">station</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `station_input`<sup>Optional</sup> <a name="station_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput"></a>

```python
station_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station"></a>

```python
station: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion">put_current_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion">put_update_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion">reset_current_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion">reset_update_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_current_version` <a name="put_current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion"></a>

```python
def put_current_version(
  model: str = None,
  package_version: str = None,
  station: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion.parameter.model"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

###### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

###### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion.parameter.station"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

##### `put_update_version` <a name="put_update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion"></a>

```python
def put_update_version(
  model: str = None,
  package_version: str = None,
  station: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion.parameter.model"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

###### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

###### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion.parameter.station"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

##### `reset_current_version` <a name="reset_current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion"></a>

```python
def reset_current_version() -> None
```

##### `reset_update_version` <a name="reset_update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion"></a>

```python
def reset_update_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion">current_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion">update_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput">current_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput">update_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion"></a>

```python
current_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a>

---

##### `update_version`<sup>Required</sup> <a name="update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion"></a>

```python
update_version: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a>

---

##### `current_version_input`<sup>Optional</sup> <a name="current_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput"></a>

```python
current_version_input: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `update_version_input`<sup>Optional</sup> <a name="update_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput"></a>

```python
update_version_input: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion">reset_package_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation">reset_station</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```

##### `reset_station` <a name="reset_station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation"></a>

```python
def reset_station() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput">station_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station">station</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `station_input`<sup>Optional</sup> <a name="station_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput"></a>

```python
station_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station"></a>

```python
station: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---


### IotwirelessTaskDefinitionTagsList <a name="IotwirelessTaskDefinitionTagsList" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessTaskDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessTaskDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>]

---


### IotwirelessTaskDefinitionTagsOutputReference <a name="IotwirelessTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion">reset_package_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation">reset_station</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```

##### `reset_station` <a name="reset_station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation"></a>

```python
def reset_station() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput">station_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station">station</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `station_input`<sup>Optional</sup> <a name="station_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput"></a>

```python
station_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station"></a>

```python
station: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion">put_current_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion">put_update_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion">reset_current_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc">reset_sig_key_crc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature">reset_update_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion">reset_update_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_current_version` <a name="put_current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion"></a>

```python
def put_current_version(
  model: str = None,
  package_version: str = None,
  station: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion.parameter.model"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

###### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

###### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion.parameter.station"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

##### `put_update_version` <a name="put_update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion"></a>

```python
def put_update_version(
  model: str = None,
  package_version: str = None,
  station: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion.parameter.model"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

###### `package_version`<sup>Optional</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion.parameter.packageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

###### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion.parameter.station"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

##### `reset_current_version` <a name="reset_current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion"></a>

```python
def reset_current_version() -> None
```

##### `reset_sig_key_crc` <a name="reset_sig_key_crc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc"></a>

```python
def reset_sig_key_crc() -> None
```

##### `reset_update_signature` <a name="reset_update_signature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature"></a>

```python
def reset_update_signature() -> None
```

##### `reset_update_version` <a name="reset_update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion"></a>

```python
def reset_update_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion">current_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion">update_version</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput">current_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput">sig_key_crc_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput">update_signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput">update_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc">sig_key_crc</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature">update_signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion"></a>

```python
current_version: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a>

---

##### `update_version`<sup>Required</sup> <a name="update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion"></a>

```python
update_version: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a>

---

##### `current_version_input`<sup>Optional</sup> <a name="current_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput"></a>

```python
current_version_input: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `sig_key_crc_input`<sup>Optional</sup> <a name="sig_key_crc_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput"></a>

```python
sig_key_crc_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_signature_input`<sup>Optional</sup> <a name="update_signature_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput"></a>

```python
update_signature_input: str
```

- *Type:* str

---

##### `update_version_input`<sup>Optional</sup> <a name="update_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput"></a>

```python
update_version_input: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `sig_key_crc`<sup>Required</sup> <a name="sig_key_crc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc"></a>

```python
sig_key_crc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_signature`<sup>Required</sup> <a name="update_signature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature"></a>

```python
update_signature: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion">reset_package_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation">reset_station</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_package_version` <a name="reset_package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion"></a>

```python
def reset_package_version() -> None
```

##### `reset_station` <a name="reset_station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation"></a>

```python
def reset_station() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput">station_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station">station</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `station_input`<sup>Optional</sup> <a name="station_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput"></a>

```python
station_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station"></a>

```python
station: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---


### IotwirelessTaskDefinitionUpdateOutputReference <a name="IotwirelessTaskDefinitionUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_task_definition

iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan">put_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan">reset_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole">reset_update_data_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource">reset_update_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lo_ra_wan` <a name="put_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan"></a>

```python
def put_lo_ra_wan(
  current_version: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion = None,
  sig_key_crc: typing.Union[int, float] = None,
  update_signature: str = None,
  update_version: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion = None
) -> None
```

###### `current_version`<sup>Optional</sup> <a name="current_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.currentVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

###### `sig_key_crc`<sup>Optional</sup> <a name="sig_key_crc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.sigKeyCrc"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}.

---

###### `update_signature`<sup>Optional</sup> <a name="update_signature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.updateSignature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}.

---

###### `update_version`<sup>Optional</sup> <a name="update_version" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.updateVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

##### `reset_lo_ra_wan` <a name="reset_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan"></a>

```python
def reset_lo_ra_wan() -> None
```

##### `reset_update_data_role` <a name="reset_update_data_role" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole"></a>

```python
def reset_update_data_role() -> None
```

##### `reset_update_data_source` <a name="reset_update_data_source" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource"></a>

```python
def reset_update_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput">lo_ra_wan_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput">update_data_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput">update_data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole">update_data_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource">update_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessTaskDefinitionUpdateLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a>

---

##### `lo_ra_wan_input`<sup>Optional</sup> <a name="lo_ra_wan_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput"></a>

```python
lo_ra_wan_input: IResolvable | IotwirelessTaskDefinitionUpdateLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `update_data_role_input`<sup>Optional</sup> <a name="update_data_role_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput"></a>

```python
update_data_role_input: str
```

- *Type:* str

---

##### `update_data_source_input`<sup>Optional</sup> <a name="update_data_source_input" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput"></a>

```python
update_data_source_input: str
```

- *Type:* str

---

##### `update_data_role`<sup>Required</sup> <a name="update_data_role" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole"></a>

```python
update_data_role: str
```

- *Type:* str

---

##### `update_data_source`<sup>Required</sup> <a name="update_data_source" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource"></a>

```python
update_data_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessTaskDefinitionUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---



