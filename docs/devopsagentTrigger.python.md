# `devopsagentTrigger` Submodule <a name="`devopsagentTrigger` Submodule" id="@cdktn/provider-awscc.devopsagentTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentTrigger <a name="DevopsagentTrigger" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger awscc_devopsagent_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTrigger(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  agent_space_id: str,
  condition: DevopsagentTriggerCondition,
  type: str,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.action">action</a></code> | <code>str</code> | The action to perform when the trigger fires. A JSON object containing actionType and task. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.agentSpaceId">agent_space_id</a></code> | <code>str</code> | The unique identifier of the parent Agent Space. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a></code> | The condition that causes the trigger to fire. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of trigger. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the trigger. Active triggers fire on schedule; Inactive triggers are paused. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.action"></a>

- *Type:* str

The action to perform when the trigger fires. A JSON object containing actionType and task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#action DevopsagentTrigger#action}

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.agentSpaceId"></a>

- *Type:* str

The unique identifier of the parent Agent Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#agent_space_id DevopsagentTrigger#agent_space_id}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a>

The condition that causes the trigger to fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#condition DevopsagentTrigger#condition}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.type"></a>

- *Type:* str

The type of trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#type DevopsagentTrigger#type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.Initializer.parameter.status"></a>

- *Type:* str

The status of the trigger. Active triggers fire on schedule; Inactive triggers are paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#status DevopsagentTrigger#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.putCondition"></a>

```python
def put_condition(
  schedule: DevopsagentTriggerConditionSchedule
) -> None
```

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.putCondition.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a>

Schedule configuration for a time-based trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#schedule DevopsagentTrigger#schedule}

---

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsagentTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isConstruct"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isTerraformElement"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isTerraformResource"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsagentTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsagentTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsagentTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference">DevopsagentTriggerConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.agentSpaceIdInput">agent_space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.conditionInput">condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.condition"></a>

```python
condition: DevopsagentTriggerConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference">DevopsagentTriggerConditionOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `agent_space_id_input`<sup>Optional</sup> <a name="agent_space_id_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.agentSpaceIdInput"></a>

```python
agent_space_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.conditionInput"></a>

```python
condition_input: IResolvable | DevopsagentTriggerCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentTriggerCondition <a name="DevopsagentTriggerCondition" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTriggerCondition(
  schedule: DevopsagentTriggerConditionSchedule
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a></code> | Schedule configuration for a time-based trigger. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition.property.schedule"></a>

```python
schedule: DevopsagentTriggerConditionSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a>

Schedule configuration for a time-based trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#schedule DevopsagentTrigger#schedule}

---

### DevopsagentTriggerConditionSchedule <a name="DevopsagentTriggerConditionSchedule" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTriggerConditionSchedule(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule.property.expression">expression</a></code> | <code>str</code> | A cron or rate expression that defines when the trigger fires. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule.property.expression"></a>

```python
expression: str
```

- *Type:* str

A cron or rate expression that defines when the trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#expression DevopsagentTrigger#expression}

---

### DevopsagentTriggerConfig <a name="DevopsagentTriggerConfig" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTriggerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  agent_space_id: str,
  condition: DevopsagentTriggerCondition,
  type: str,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.action">action</a></code> | <code>str</code> | The action to perform when the trigger fires. A JSON object containing actionType and task. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | The unique identifier of the parent Agent Space. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a></code> | The condition that causes the trigger to fire. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.type">type</a></code> | <code>str</code> | The type of trigger. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.status">status</a></code> | <code>str</code> | The status of the trigger. Active triggers fire on schedule; Inactive triggers are paused. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action to perform when the trigger fires. A JSON object containing actionType and task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#action DevopsagentTrigger#action}

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

The unique identifier of the parent Agent Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#agent_space_id DevopsagentTrigger#agent_space_id}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.condition"></a>

```python
condition: DevopsagentTriggerCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a>

The condition that causes the trigger to fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#condition DevopsagentTrigger#condition}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#type DevopsagentTrigger#type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the trigger. Active triggers fire on schedule; Inactive triggers are paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#status DevopsagentTrigger#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentTriggerConditionOutputReference <a name="DevopsagentTriggerConditionOutputReference" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTriggerConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.putSchedule">put_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.putSchedule"></a>

```python
def put_schedule(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.putSchedule.parameter.expression"></a>

- *Type:* str

A cron or rate expression that defines when the trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_trigger#expression DevopsagentTrigger#expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference">DevopsagentTriggerConditionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.schedule"></a>

```python
schedule: DevopsagentTriggerConditionScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference">DevopsagentTriggerConditionScheduleOutputReference</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.scheduleInput"></a>

```python
schedule_input: IResolvable | DevopsagentTriggerConditionSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentTriggerCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerCondition">DevopsagentTriggerCondition</a>

---


### DevopsagentTriggerConditionScheduleOutputReference <a name="DevopsagentTriggerConditionScheduleOutputReference" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_trigger

devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentTriggerConditionSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentTrigger.DevopsagentTriggerConditionSchedule">DevopsagentTriggerConditionSchedule</a>

---



