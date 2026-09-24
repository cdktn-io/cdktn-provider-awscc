# `ec2InstanceEventWindow` Submodule <a name="`ec2InstanceEventWindow` Submodule" id="@cdktn/provider-awscc.ec2InstanceEventWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceEventWindow <a name="Ec2InstanceEventWindow" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cron_expression: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Ec2InstanceEventWindowTags] = None,
  time_ranges: IResolvable | typing.List[Ec2InstanceEventWindowTimeRanges] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.cronExpression">cron_expression</a></code> | <code>str</code> | The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]</code> | The tags applied to the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.timeRanges">time_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]</code> | The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.cronExpression"></a>

- *Type:* str

The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.name"></a>

- *Type:* str

The name of the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]

The tags applied to the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}

---

##### `time_ranges`<sup>Optional</sup> <a name="time_ranges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.timeRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]

The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges">put_time_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges">reset_time_ranges</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2InstanceEventWindowTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]

---

##### `put_time_ranges` <a name="put_time_ranges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges"></a>

```python
def put_time_ranges(
  value: IResolvable | typing.List[Ec2InstanceEventWindowTimeRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]

---

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_time_ranges` <a name="reset_time_ranges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges"></a>

```python
def reset_time_ranges() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2InstanceEventWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2InstanceEventWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2InstanceEventWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId">instance_event_window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges">time_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput">time_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_event_window_id`<sup>Required</sup> <a name="instance_event_window_id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId"></a>

```python
instance_event_window_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags"></a>

```python
tags: Ec2InstanceEventWindowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a>

---

##### `time_ranges`<sup>Required</sup> <a name="time_ranges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges"></a>

```python
time_ranges: Ec2InstanceEventWindowTimeRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a>

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2InstanceEventWindowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]

---

##### `time_ranges_input`<sup>Optional</sup> <a name="time_ranges_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput"></a>

```python
time_ranges_input: IResolvable | typing.List[Ec2InstanceEventWindowTimeRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceEventWindowConfig <a name="Ec2InstanceEventWindowConfig" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cron_expression: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Ec2InstanceEventWindowTags] = None,
  time_ranges: IResolvable | typing.List[Ec2InstanceEventWindowTimeRanges] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression">cron_expression</a></code> | <code>str</code> | The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name">name</a></code> | <code>str</code> | The name of the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]</code> | The tags applied to the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges">time_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]</code> | The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2InstanceEventWindowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]

The tags applied to the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}

---

##### `time_ranges`<sup>Optional</sup> <a name="time_ranges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges"></a>

```python
time_ranges: IResolvable | typing.List[Ec2InstanceEventWindowTimeRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]

The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}

---

### Ec2InstanceEventWindowTags <a name="Ec2InstanceEventWindowTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#key Ec2InstanceEventWindow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#value Ec2InstanceEventWindow#value}

---

### Ec2InstanceEventWindowTimeRanges <a name="Ec2InstanceEventWindowTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges(
  end_hour: typing.Union[int, float] = None,
  end_week_day: str = None,
  start_hour: typing.Union[int, float] = None,
  start_week_day: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour">end_hour</a></code> | <code>typing.Union[int, float]</code> | The hour when the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay">end_week_day</a></code> | <code>str</code> | The day on which the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | The hour when the time range begins. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay">start_week_day</a></code> | <code>str</code> | The day on which the time range begins. |

---

##### `end_hour`<sup>Optional</sup> <a name="end_hour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour"></a>

```python
end_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour when the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_hour Ec2InstanceEventWindow#end_hour}

---

##### `end_week_day`<sup>Optional</sup> <a name="end_week_day" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay"></a>

```python
end_week_day: str
```

- *Type:* str

The day on which the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_week_day Ec2InstanceEventWindow#end_week_day}

---

##### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour when the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_hour Ec2InstanceEventWindow#start_hour}

---

##### `start_week_day`<sup>Optional</sup> <a name="start_week_day" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay"></a>

```python
start_week_day: str
```

- *Type:* str

The day on which the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_week_day Ec2InstanceEventWindow#start_week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceEventWindowTagsList <a name="Ec2InstanceEventWindowTagsList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceEventWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceEventWindowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>]

---


### Ec2InstanceEventWindowTagsOutputReference <a name="Ec2InstanceEventWindowTagsOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceEventWindowTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>

---


### Ec2InstanceEventWindowTimeRangesList <a name="Ec2InstanceEventWindowTimeRangesList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceEventWindowTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceEventWindowTimeRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>]

---


### Ec2InstanceEventWindowTimeRangesOutputReference <a name="Ec2InstanceEventWindowTimeRangesOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_event_window

ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour">reset_end_hour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay">reset_end_week_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour">reset_start_hour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay">reset_start_week_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_hour` <a name="reset_end_hour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour"></a>

```python
def reset_end_hour() -> None
```

##### `reset_end_week_day` <a name="reset_end_week_day" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay"></a>

```python
def reset_end_week_day() -> None
```

##### `reset_start_hour` <a name="reset_start_hour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour"></a>

```python
def reset_start_hour() -> None
```

##### `reset_start_week_day` <a name="reset_start_week_day" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay"></a>

```python
def reset_start_week_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput">end_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput">end_week_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput">start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput">start_week_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour">end_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay">end_week_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay">start_week_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_hour_input`<sup>Optional</sup> <a name="end_hour_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput"></a>

```python
end_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_week_day_input`<sup>Optional</sup> <a name="end_week_day_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput"></a>

```python
end_week_day_input: str
```

- *Type:* str

---

##### `start_hour_input`<sup>Optional</sup> <a name="start_hour_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput"></a>

```python
start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_week_day_input`<sup>Optional</sup> <a name="start_week_day_input" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput"></a>

```python
start_week_day_input: str
```

- *Type:* str

---

##### `end_hour`<sup>Required</sup> <a name="end_hour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour"></a>

```python
end_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_week_day`<sup>Required</sup> <a name="end_week_day" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay"></a>

```python
end_week_day: str
```

- *Type:* str

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_week_day`<sup>Required</sup> <a name="start_week_day" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay"></a>

```python
start_week_day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceEventWindowTimeRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>

---



