# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktn/provider-awscc.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: IResolvable | typing.List[ConnectHoursOfOperationConfigA],
  instance_arn: str,
  name: str,
  time_zone: str,
  child_hours_of_operations: IResolvable | typing.List[ConnectHoursOfOperationChildHoursOfOperations] = None,
  description: str = None,
  hours_of_operation_overrides: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverrides] = None,
  parent_hours_of_operations: IResolvable | typing.List[ConnectHoursOfOperationParentHoursOfOperations] = None,
  tags: IResolvable | typing.List[ConnectHoursOfOperationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]</code> | Configuration information for the hours of operation: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.childHoursOfOperations">child_hours_of_operations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]</code> | List of child hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.hoursOfOperationOverrides">hours_of_operation_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]</code> | One or more hours of operation overrides assigned to an hour of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.parentHoursOfOperations">parent_hours_of_operations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]</code> | List of parent hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]</code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]

Configuration information for the hours of operation: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.name"></a>

- *Type:* str

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}

---

##### `child_hours_of_operations`<sup>Optional</sup> <a name="child_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.childHoursOfOperations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]

List of child hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.description"></a>

- *Type:* str

The description of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}

---

##### `hours_of_operation_overrides`<sup>Optional</sup> <a name="hours_of_operation_overrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.hoursOfOperationOverrides"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]

One or more hours of operation overrides assigned to an hour of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}

---

##### `parent_hours_of_operations`<sup>Optional</sup> <a name="parent_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.parentHoursOfOperations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]

List of parent hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations">put_child_hours_of_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides">put_hours_of_operation_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations">put_parent_hours_of_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations">reset_child_hours_of_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides">reset_hours_of_operation_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations">reset_parent_hours_of_operations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_child_hours_of_operations` <a name="put_child_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations"></a>

```python
def put_child_hours_of_operations(
  value: IResolvable | typing.List[ConnectHoursOfOperationChildHoursOfOperations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]

---

##### `put_config` <a name="put_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```python
def put_config(
  value: IResolvable | typing.List[ConnectHoursOfOperationConfigA]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]

---

##### `put_hours_of_operation_overrides` <a name="put_hours_of_operation_overrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides"></a>

```python
def put_hours_of_operation_overrides(
  value: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]

---

##### `put_parent_hours_of_operations` <a name="put_parent_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations"></a>

```python
def put_parent_hours_of_operations(
  value: IResolvable | typing.List[ConnectHoursOfOperationParentHoursOfOperations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectHoursOfOperationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]

---

##### `reset_child_hours_of_operations` <a name="reset_child_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations"></a>

```python
def reset_child_hours_of_operations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hours_of_operation_overrides` <a name="reset_hours_of_operation_overrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides"></a>

```python
def reset_hours_of_operation_overrides() -> None
```

##### `reset_parent_hours_of_operations` <a name="reset_parent_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations"></a>

```python
def reset_parent_hours_of_operations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectHoursOfOperation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectHoursOfOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectHoursOfOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations">child_hours_of_operations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">hours_of_operation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides">hours_of_operation_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations">parent_hours_of_operations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput">child_hours_of_operations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput">hours_of_operation_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput">parent_hours_of_operations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `child_hours_of_operations`<sup>Required</sup> <a name="child_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations"></a>

```python
child_hours_of_operations: ConnectHoursOfOperationChildHoursOfOperationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```python
config: ConnectHoursOfOperationConfigAList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `hours_of_operation_arn`<sup>Required</sup> <a name="hours_of_operation_arn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```python
hours_of_operation_arn: str
```

- *Type:* str

---

##### `hours_of_operation_overrides`<sup>Required</sup> <a name="hours_of_operation_overrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides"></a>

```python
hours_of_operation_overrides: ConnectHoursOfOperationHoursOfOperationOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_hours_of_operations`<sup>Required</sup> <a name="parent_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations"></a>

```python
parent_hours_of_operations: ConnectHoursOfOperationParentHoursOfOperationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```python
tags: ConnectHoursOfOperationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a>

---

##### `child_hours_of_operations_input`<sup>Optional</sup> <a name="child_hours_of_operations_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput"></a>

```python
child_hours_of_operations_input: IResolvable | typing.List[ConnectHoursOfOperationChildHoursOfOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```python
config_input: IResolvable | typing.List[ConnectHoursOfOperationConfigA]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hours_of_operation_overrides_input`<sup>Optional</sup> <a name="hours_of_operation_overrides_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput"></a>

```python
hours_of_operation_overrides_input: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_hours_of_operations_input`<sup>Optional</sup> <a name="parent_hours_of_operations_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput"></a>

```python
parent_hours_of_operations_input: IResolvable | typing.List[ConnectHoursOfOperationParentHoursOfOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectHoursOfOperationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationChildHoursOfOperations <a name="ConnectHoursOfOperationChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations(
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id">id</a></code> | <code>str</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name">name</a></code> | <code>str</code> | The name of the hours of operation. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: IResolvable | typing.List[ConnectHoursOfOperationConfigA],
  instance_arn: str,
  name: str,
  time_zone: str,
  child_hours_of_operations: IResolvable | typing.List[ConnectHoursOfOperationChildHoursOfOperations] = None,
  description: str = None,
  hours_of_operation_overrides: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverrides] = None,
  parent_hours_of_operations: IResolvable | typing.List[ConnectHoursOfOperationParentHoursOfOperations] = None,
  tags: IResolvable | typing.List[ConnectHoursOfOperationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]</code> | Configuration information for the hours of operation: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">name</a></code> | <code>str</code> | The name of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations">child_hours_of_operations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]</code> | List of child hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">description</a></code> | <code>str</code> | The description of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides">hours_of_operation_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]</code> | One or more hours of operation overrides assigned to an hour of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations">parent_hours_of_operations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]</code> | List of parent hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```python
config: IResolvable | typing.List[ConnectHoursOfOperationConfigA]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]

Configuration information for the hours of operation: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}

---

##### `child_hours_of_operations`<sup>Optional</sup> <a name="child_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations"></a>

```python
child_hours_of_operations: IResolvable | typing.List[ConnectHoursOfOperationChildHoursOfOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]

List of child hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}

---

##### `hours_of_operation_overrides`<sup>Optional</sup> <a name="hours_of_operation_overrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides"></a>

```python
hours_of_operation_overrides: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]

One or more hours of operation overrides assigned to an hour of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}

---

##### `parent_hours_of_operations`<sup>Optional</sup> <a name="parent_hours_of_operations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations"></a>

```python
parent_hours_of_operations: IResolvable | typing.List[ConnectHoursOfOperationParentHoursOfOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]

List of parent hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectHoursOfOperationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigA(
  day: str,
  end_time: ConnectHoursOfOperationConfigEndTime,
  start_time: ConnectHoursOfOperationConfigStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">day</a></code> | <code>str</code> | The day that the hours of operation applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | The end time that your contact center closes. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | The start time that your contact center opens. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```python
day: str
```

- *Type:* str

The day that the hours of operation applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```python
end_time: ConnectHoursOfOperationConfigEndTime
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

The end time that your contact center closes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```python
start_time: ConnectHoursOfOperationConfigStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

The start time that your contact center opens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | The minutes. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | The minutes. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverrides <a name="ConnectHoursOfOperationHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides(
  effective_from: str = None,
  effective_till: str = None,
  hours_of_operation_override_id: str = None,
  override_config: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig] = None,
  override_description: str = None,
  override_name: str = None,
  override_type: str = None,
  recurrence_config: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom">effective_from</a></code> | <code>str</code> | The date from which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill">effective_till</a></code> | <code>str</code> | The date till which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId">hours_of_operation_override_id</a></code> | <code>str</code> | The Resource Identifier for the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig">override_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]</code> | Configuration information for the hours of operation override: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription">override_description</a></code> | <code>str</code> | The description of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName">override_name</a></code> | <code>str</code> | The name of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType">override_type</a></code> | <code>str</code> | The type of hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig">recurrence_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | Configuration for recurring hours of operation overrides. |

---

##### `effective_from`<sup>Optional</sup> <a name="effective_from" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom"></a>

```python
effective_from: str
```

- *Type:* str

The date from which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#effective_from ConnectHoursOfOperation#effective_from}

---

##### `effective_till`<sup>Optional</sup> <a name="effective_till" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill"></a>

```python
effective_till: str
```

- *Type:* str

The date till which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#effective_till ConnectHoursOfOperation#effective_till}

---

##### `hours_of_operation_override_id`<sup>Optional</sup> <a name="hours_of_operation_override_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId"></a>

```python
hours_of_operation_override_id: str
```

- *Type:* str

The Resource Identifier for the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours_of_operation_override_id ConnectHoursOfOperation#hours_of_operation_override_id}

---

##### `override_config`<sup>Optional</sup> <a name="override_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig"></a>

```python
override_config: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]

Configuration information for the hours of operation override: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#override_config ConnectHoursOfOperation#override_config}

---

##### `override_description`<sup>Optional</sup> <a name="override_description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription"></a>

```python
override_description: str
```

- *Type:* str

The description of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#override_description ConnectHoursOfOperation#override_description}

---

##### `override_name`<sup>Optional</sup> <a name="override_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName"></a>

```python
override_name: str
```

- *Type:* str

The name of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#override_name ConnectHoursOfOperation#override_name}

---

##### `override_type`<sup>Optional</sup> <a name="override_type" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType"></a>

```python
override_type: str
```

- *Type:* str

The type of hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#override_type ConnectHoursOfOperation#override_type}

---

##### `recurrence_config`<sup>Optional</sup> <a name="recurrence_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig"></a>

```python
recurrence_config: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

Configuration for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#recurrence_config ConnectHoursOfOperation#recurrence_config}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig(
  day: str = None,
  end_time: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime = None,
  start_time: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day">day</a></code> | <code>str</code> | The day that the hours of operation override applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | The new end time that your contact center closes for the overriden days. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | The new start time that your contact center opens for the overriden days. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day"></a>

```python
day: str
```

- *Type:* str

The day that the hours of operation override applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime"></a>

```python
end_time: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

The new end time that your contact center closes for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime"></a>

```python
start_time: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

The new start time that your contact center opens for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | The minutes. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | The minutes. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig(
  recurrence_pattern: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern">recurrence_pattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | Pattern for recurring hours of operation overrides. |

---

##### `recurrence_pattern`<sup>Optional</sup> <a name="recurrence_pattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern"></a>

```python
recurrence_pattern: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

Pattern for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#recurrence_pattern ConnectHoursOfOperation#recurrence_pattern}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern(
  by_month: typing.List[typing.Union[int, float]] = None,
  by_month_day: typing.List[typing.Union[int, float]] = None,
  by_weekday_occurrence: typing.List[typing.Union[int, float]] = None,
  frequency: str = None,
  interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth">by_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of months (1-12) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay">by_month_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of month days (-1 to 31) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence">by_weekday_occurrence</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency">frequency</a></code> | <code>str</code> | The frequency of recurrence for hours of operation overrides. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}. |

---

##### `by_month`<sup>Optional</sup> <a name="by_month" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth"></a>

```python
by_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of months (1-12) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_month ConnectHoursOfOperation#by_month}

---

##### `by_month_day`<sup>Optional</sup> <a name="by_month_day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay"></a>

```python
by_month_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of month days (-1 to 31) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_month_day ConnectHoursOfOperation#by_month_day}

---

##### `by_weekday_occurrence`<sup>Optional</sup> <a name="by_weekday_occurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence"></a>

```python
by_weekday_occurrence: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

The frequency of recurrence for hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#frequency ConnectHoursOfOperation#frequency}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}.

---

### ConnectHoursOfOperationParentHoursOfOperations <a name="ConnectHoursOfOperationParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations(
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id">id</a></code> | <code>str</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name">name</a></code> | <code>str</code> | The name of the hours of operation. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationTags <a name="ConnectHoursOfOperationTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#key ConnectHoursOfOperation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#value ConnectHoursOfOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationChildHoursOfOperationsList <a name="ConnectHoursOfOperationChildHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectHoursOfOperationChildHoursOfOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectHoursOfOperationChildHoursOfOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>]

---


### ConnectHoursOfOperationChildHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationChildHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationChildHoursOfOperations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>

---


### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectHoursOfOperationConfigA]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>]

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">put_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_time` <a name="put_end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```python
def put_end_time(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float]
) -> None
```

###### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

##### `put_start_time` <a name="put_start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float]
) -> None
```

###### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">end_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">start_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```python
end_time: ConnectHoursOfOperationConfigEndTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```python
start_time: ConnectHoursOfOperationConfigStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```python
end_time_input: IResolvable | ConnectHoursOfOperationConfigEndTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```python
start_time_input: IResolvable | ConnectHoursOfOperationConfigStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationConfigEndTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationConfigStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesList <a name="ConnectHoursOfOperationHoursOfOperationOverridesList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectHoursOfOperationHoursOfOperationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>]

---


### ConnectHoursOfOperationHoursOfOperationOverridesOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig">put_override_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig">put_recurrence_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom">reset_effective_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill">reset_effective_till</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId">reset_hours_of_operation_override_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig">reset_override_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription">reset_override_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName">reset_override_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType">reset_override_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig">reset_recurrence_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_override_config` <a name="put_override_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig"></a>

```python
def put_override_config(
  value: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]

---

##### `put_recurrence_config` <a name="put_recurrence_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig"></a>

```python
def put_recurrence_config(
  recurrence_pattern: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern = None
) -> None
```

###### `recurrence_pattern`<sup>Optional</sup> <a name="recurrence_pattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig.parameter.recurrencePattern"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

Pattern for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#recurrence_pattern ConnectHoursOfOperation#recurrence_pattern}

---

##### `reset_effective_from` <a name="reset_effective_from" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom"></a>

```python
def reset_effective_from() -> None
```

##### `reset_effective_till` <a name="reset_effective_till" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill"></a>

```python
def reset_effective_till() -> None
```

##### `reset_hours_of_operation_override_id` <a name="reset_hours_of_operation_override_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId"></a>

```python
def reset_hours_of_operation_override_id() -> None
```

##### `reset_override_config` <a name="reset_override_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig"></a>

```python
def reset_override_config() -> None
```

##### `reset_override_description` <a name="reset_override_description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription"></a>

```python
def reset_override_description() -> None
```

##### `reset_override_name` <a name="reset_override_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName"></a>

```python
def reset_override_name() -> None
```

##### `reset_override_type` <a name="reset_override_type" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType"></a>

```python
def reset_override_type() -> None
```

##### `reset_recurrence_config` <a name="reset_recurrence_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig"></a>

```python
def reset_recurrence_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig">override_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig">recurrence_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput">effective_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput">effective_till_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput">hours_of_operation_override_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput">override_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput">override_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput">override_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput">override_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput">recurrence_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom">effective_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill">effective_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId">hours_of_operation_override_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription">override_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName">override_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType">override_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override_config`<sup>Required</sup> <a name="override_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig"></a>

```python
override_config: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a>

---

##### `recurrence_config`<sup>Required</sup> <a name="recurrence_config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig"></a>

```python
recurrence_config: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a>

---

##### `effective_from_input`<sup>Optional</sup> <a name="effective_from_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput"></a>

```python
effective_from_input: str
```

- *Type:* str

---

##### `effective_till_input`<sup>Optional</sup> <a name="effective_till_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput"></a>

```python
effective_till_input: str
```

- *Type:* str

---

##### `hours_of_operation_override_id_input`<sup>Optional</sup> <a name="hours_of_operation_override_id_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput"></a>

```python
hours_of_operation_override_id_input: str
```

- *Type:* str

---

##### `override_config_input`<sup>Optional</sup> <a name="override_config_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput"></a>

```python
override_config_input: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]

---

##### `override_description_input`<sup>Optional</sup> <a name="override_description_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput"></a>

```python
override_description_input: str
```

- *Type:* str

---

##### `override_name_input`<sup>Optional</sup> <a name="override_name_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput"></a>

```python
override_name_input: str
```

- *Type:* str

---

##### `override_type_input`<sup>Optional</sup> <a name="override_type_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput"></a>

```python
override_type_input: str
```

- *Type:* str

---

##### `recurrence_config_input`<sup>Optional</sup> <a name="recurrence_config_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput"></a>

```python
recurrence_config_input: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `effective_from`<sup>Required</sup> <a name="effective_from" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom"></a>

```python
effective_from: str
```

- *Type:* str

---

##### `effective_till`<sup>Required</sup> <a name="effective_till" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill"></a>

```python
effective_till: str
```

- *Type:* str

---

##### `hours_of_operation_override_id`<sup>Required</sup> <a name="hours_of_operation_override_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId"></a>

```python
hours_of_operation_override_id: str
```

- *Type:* str

---

##### `override_description`<sup>Required</sup> <a name="override_description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription"></a>

```python
override_description: str
```

- *Type:* str

---

##### `override_name`<sup>Required</sup> <a name="override_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName"></a>

```python
override_name: str
```

- *Type:* str

---

##### `override_type`<sup>Required</sup> <a name="override_type" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType"></a>

```python
override_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>]

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime">put_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime">put_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_time` <a name="put_end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime"></a>

```python
def put_end_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

##### `put_start_time` <a name="put_start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

##### `reset_day` <a name="reset_day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput">end_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput">start_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime"></a>

```python
end_time: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime"></a>

```python
start_time: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a>

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput"></a>

```python
end_time_input: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput"></a>

```python
start_time_input: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern">put_recurrence_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern">reset_recurrence_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurrence_pattern` <a name="put_recurrence_pattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern"></a>

```python
def put_recurrence_pattern(
  by_month: typing.List[typing.Union[int, float]] = None,
  by_month_day: typing.List[typing.Union[int, float]] = None,
  by_weekday_occurrence: typing.List[typing.Union[int, float]] = None,
  frequency: str = None,
  interval: typing.Union[int, float] = None
) -> None
```

###### `by_month`<sup>Optional</sup> <a name="by_month" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.byMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of months (1-12) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_month ConnectHoursOfOperation#by_month}

---

###### `by_month_day`<sup>Optional</sup> <a name="by_month_day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.byMonthDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of month days (-1 to 31) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_month_day ConnectHoursOfOperation#by_month_day}

---

###### `by_weekday_occurrence`<sup>Optional</sup> <a name="by_weekday_occurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.byWeekdayOccurrence"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}.

---

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.frequency"></a>

- *Type:* str

The frequency of recurrence for hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#frequency ConnectHoursOfOperation#frequency}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}.

---

##### `reset_recurrence_pattern` <a name="reset_recurrence_pattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern"></a>

```python
def reset_recurrence_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern">recurrence_pattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput">recurrence_pattern_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurrence_pattern`<sup>Required</sup> <a name="recurrence_pattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern"></a>

```python
recurrence_pattern: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a>

---

##### `recurrence_pattern_input`<sup>Optional</sup> <a name="recurrence_pattern_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput"></a>

```python
recurrence_pattern_input: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth">reset_by_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay">reset_by_month_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence">reset_by_weekday_occurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval">reset_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_by_month` <a name="reset_by_month" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth"></a>

```python
def reset_by_month() -> None
```

##### `reset_by_month_day` <a name="reset_by_month_day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay"></a>

```python
def reset_by_month_day() -> None
```

##### `reset_by_weekday_occurrence` <a name="reset_by_weekday_occurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence"></a>

```python
def reset_by_weekday_occurrence() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput">by_month_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput">by_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput">by_weekday_occurrence_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth">by_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay">by_month_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence">by_weekday_occurrence</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `by_month_day_input`<sup>Optional</sup> <a name="by_month_day_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput"></a>

```python
by_month_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `by_month_input`<sup>Optional</sup> <a name="by_month_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput"></a>

```python
by_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `by_weekday_occurrence_input`<sup>Optional</sup> <a name="by_weekday_occurrence_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput"></a>

```python
by_weekday_occurrence_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `by_month`<sup>Required</sup> <a name="by_month" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth"></a>

```python
by_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `by_month_day`<sup>Required</sup> <a name="by_month_day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay"></a>

```python
by_month_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `by_weekday_occurrence`<sup>Required</sup> <a name="by_weekday_occurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence"></a>

```python
by_weekday_occurrence: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---


### ConnectHoursOfOperationParentHoursOfOperationsList <a name="ConnectHoursOfOperationParentHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectHoursOfOperationParentHoursOfOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectHoursOfOperationParentHoursOfOperations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>]

---


### ConnectHoursOfOperationParentHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationParentHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationParentHoursOfOperations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>

---


### ConnectHoursOfOperationTagsList <a name="ConnectHoursOfOperationTagsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectHoursOfOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectHoursOfOperationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>]

---


### ConnectHoursOfOperationTagsOutputReference <a name="ConnectHoursOfOperationTagsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_hours_of_operation

connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectHoursOfOperationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>

---



